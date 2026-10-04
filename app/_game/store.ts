import { useSyncExternalStore } from "react";
import { advancements, type AdvancementId } from "./advancements";

export type Weather = "clear" | "rain" | "snow" | "thunder";
export type TimeMode = "auto" | "day" | "night";
export type Overlay = null | "pause" | "advancements";

export interface Toast {
  id: number;
  advancementId: AdvancementId;
}

export interface GameState {
  weather: Weather;
  time: TimeMode;
  unlocked: Partial<Record<AdvancementId, number>>;
  visited: string[];
  headClicks: number;
  debug: boolean;
  overlay: Overlay;
  toasts: Toast[];
}

const storageKey = "kazutti-world-v2";
const persistedKeys = ["weather", "time", "unlocked", "visited", "headClicks"] as const satisfies ReadonlyArray<
  keyof GameState
>;

const initialState: GameState = {
  weather: "clear",
  time: "auto",
  unlocked: {},
  visited: [],
  headClicks: 0,
  debug: false,
  overlay: null,
  toasts: [],
};

function loadState(): GameState {
  if (typeof window === "undefined") return initialState;
  try {
    const saved = JSON.parse(window.localStorage.getItem(storageKey) ?? "{}") as Partial<GameState>;
    const restored: Partial<GameState> = {};
    for (const key of persistedKeys) {
      if (saved[key] !== undefined) Object.assign(restored, { [key]: saved[key] });
    }
    return { ...initialState, ...restored };
  } catch {
    return initialState;
  }
}

let state: GameState = loadState();
const listeners = new Set<() => void>();
let saveTimer: ReturnType<typeof setTimeout> | undefined;

function persist() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      const snapshot = Object.fromEntries(persistedKeys.map((key) => [key, state[key]]));
      window.localStorage.setItem(storageKey, JSON.stringify(snapshot));
    } catch {
    }
  }, 200);
}

export function getState() {
  return state;
}

export function setState(update: Partial<GameState> | ((current: GameState) => Partial<GameState>)) {
  const patch = typeof update === "function" ? update(state) : update;
  state = { ...state, ...patch };
  persist();
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useGame<T>(selector: (current: GameState) => T): T {
  return useSyncExternalStore(
    subscribe,
    () => selector(state),
    () => selector(initialState),
  );
}

let sequence = 0;

export function dismissToast(id: number) {
  setState((current) => ({ toasts: current.toasts.filter((toast) => toast.id !== id) }));
}

export function unlock(id: AdvancementId) {
  if (state.unlocked[id]) return;

  setState((current) => ({
    unlocked: { ...current.unlocked, [id]: Date.now() },
    toasts: [...current.toasts, { id: ++sequence, advancementId: id }],
  }));

  const unlockedCount = Object.keys(state.unlocked).length;
  if (id !== "completionist" && unlockedCount === advancements.length - 1) {
    unlock("completionist");
  }
}

export const pageRoutes = ["/", "/profile", "/skills", "/achievements"] as const;

export function visit(path: string) {
  if (!state.visited.includes(path)) {
    setState((current) => ({ visited: [...current.visited, path] }));
  }

  unlock("welcome");
  if (path === "/profile") unlock("profile");
  if (path === "/skills") unlock("skills");
  if (path === "/achievements") unlock("achievements");
  if (pageRoutes.every((route) => state.visited.includes(route))) unlock("adventuring");
}
