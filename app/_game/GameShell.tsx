"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { DebugOverlay } from "./DebugOverlay";
import { Hotbar, hotbarSlots } from "./Hotbar";
import { Overlays } from "./Overlays";
import { getState, setState, unlock, useGame, visit } from "./store";
import { Toasts } from "./Toasts";
import { WorldCanvas } from "./WorldCanvas";

function isTyping(target: EventTarget | null) {
  return target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));
}

export function GameShell() {
  const pathname = usePathname();
  const router = useRouter();
  const time = useGame((state) => state.time);
  const weather = useGame((state) => state.weather);

  useEffect(() => {
    visit(pathname);
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    const resolve = () => {
      const hour = new Date().getHours();
      const isNight = time === "night" || (time === "auto" && (hour >= 18 || hour < 6));
      root.dataset.time = isNight ? "night" : "day";
    };
    resolve();
    root.dataset.weather = weather;
    const timer = setInterval(resolve, 60_000);
    return () => clearInterval(timer);
  }, [time, weather]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isTyping(event.target)) return;
      const { overlay } = getState();

      if (event.key === "Escape") {
        event.preventDefault();
        setState({ overlay: overlay === null ? "pause" : null });
        return;
      }
      if (overlay || event.ctrlKey || event.metaKey || event.altKey) return;

      if (event.key === "F3") {
        event.preventDefault();
        setState((current) => ({ debug: !current.debug }));
        unlock("debug");
        return;
      }
      if (event.key === "l" || event.key === "L") {
        setState({ overlay: "advancements" });
        return;
      }
      const slot = hotbarSlots[Number(event.key) - 1];
      if (slot) {
        event.preventDefault();
        slot.activate(router);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return (
    <>
      <WorldCanvas />
      <div className="world-tint" aria-hidden="true" />
      <Hotbar />
      <Toasts />
      <DebugOverlay />
      <Overlays />
    </>
  );
}
