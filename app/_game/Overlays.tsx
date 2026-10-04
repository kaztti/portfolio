"use client";

import { useRouter } from "next/navigation";
import { advancements } from "./advancements";
import { ItemSprite } from "./pixels";
import { setState, unlock, useGame, type TimeMode, type Weather } from "./store";

const cycle = <T,>(values: readonly T[], current: T) => values[(values.indexOf(current) + 1) % values.length];

const weatherLabels: Record<Weather, string> = { clear: "晴れ", rain: "雨", snow: "雪", thunder: "雷雨" };
const timeLabels: Record<TimeMode, string> = { auto: "現実と同期", day: "昼", night: "夜" };

function PauseMenu() {
  const router = useRouter();
  const weather = useGame((state) => state.weather);
  const time = useGame((state) => state.time);
  const unlockedCount = useGame((state) => Object.keys(state.unlocked).length);

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-labelledby="pause-title">
      <div className="overlay-panel">
        <h2 id="pause-title" className="overlay-title">ゲームメニュー</h2>
        <button type="button" autoFocus className="mc-button" onClick={() => setState({ overlay: null })}>
          ゲームに戻る
        </button>
        <button type="button" className="mc-button" onClick={() => setState({ overlay: "advancements" })}>
          進捗 ({unlockedCount}/{advancements.length})
        </button>

        <div className="options-grid">
          <button
            type="button"
            className="mc-button"
            onClick={() => {
              const next = cycle(["clear", "rain", "snow", "thunder"] as const, weather);
              setState({ weather: next });
              if (next !== "clear") unlock("weather");
            }}
          >
            天候: {weatherLabels[weather]}
          </button>
          <button
            type="button"
            className="mc-button"
            onClick={() => {
              const next = cycle(["auto", "day", "night"] as const, time);
              setState({ time: next });
              if (next === "night") unlock("night");
            }}
          >
            時間: {timeLabels[time]}
          </button>
        </div>

        <button
          type="button"
          className="mc-button"
          onClick={() => {
            setState({ overlay: null });
            router.push("/");
          }}
        >
          タイトルへ戻る
        </button>
        <p className="overlay-hint">F3: デバッグ / L: 進捗 / 1-9: ホットバー</p>
      </div>
    </div>
  );
}

function AdvancementsPanel() {
  const unlocked = useGame((state) => state.unlocked);

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-labelledby="adv-panel-title">
      <div className="overlay-panel overlay-panel-wide">
        <h2 id="adv-panel-title" className="overlay-title">
          進捗 {Object.keys(unlocked).length}/{advancements.length}
        </h2>
        <ul className="adv-grid">
          {advancements.map((advancement) => {
            const done = Boolean(unlocked[advancement.id]);
            return (
              <li key={advancement.id} className={`adv-cell adv-cell-${advancement.frame} ${done ? "is-done" : ""}`}>
                <span className="adv-cell-icon">
                  <ItemSprite icon={advancement.icon} size={32} />
                </span>
                <span className="adv-cell-text">
                  <strong>{done ? advancement.title : "???"}</strong>
                  <span>{done ? advancement.description : `ヒント: ${advancement.hint}`}</span>
                </span>
              </li>
            );
          })}
        </ul>
        <button type="button" autoFocus className="mc-button" onClick={() => setState({ overlay: null })}>
          完了
        </button>
      </div>
    </div>
  );
}

export function Overlays() {
  const overlay = useGame((state) => state.overlay);

  return (
    <>
      {overlay === "pause" && <PauseMenu />}
      {overlay === "advancements" && <AdvancementsPanel />}
    </>
  );
}
