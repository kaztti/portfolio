"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { advancements } from "./advancements";
import { getState, useGame } from "./store";

const biomes: Record<string, string> = {
  "/": "minecraft:plains (タイトル平原)",
  "/profile": "minecraft:meadow (自己紹介の草原)",
  "/skills": "minecraft:deep_dark (エンチャントの書庫)",
  "/achievements": "minecraft:badlands (進捗の荒野)",
};

const facings = ["south (Towards +Z)", "west (Towards -X)", "north (Towards -Z)", "east (Towards +X)"];

function DebugPanel() {
  const pathname = usePathname();
  const leftRef = useRef<HTMLPreElement>(null);
  const rightRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const mouse = { x: 0, y: 0, facing: facings[0] };
    let frames = 0;
    let fps = 0;
    let lastSecond = performance.now();
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      const dx = event.clientX - mouse.x;
      const dy = event.clientY - mouse.y;
      if (Math.abs(dx) + Math.abs(dy) > 2) {
        mouse.facing = Math.abs(dx) > Math.abs(dy) ? facings[dx > 0 ? 3 : 1] : facings[dy > 0 ? 0 : 2];
      }
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const nav = navigator as Navigator & { deviceMemory?: number };
    const browser = /Firefox/.test(nav.userAgent) ? "Firefox" : /Edg\//.test(nav.userAgent) ? "Edge" : /Chrome/.test(nav.userAgent) ? "Chrome" : /Safari/.test(nav.userAgent) ? "Safari" : "Unknown";

    const tick = (now: number) => {
      frames++;
      if (now - lastSecond >= 1000) {
        fps = frames;
        frames = 0;
        lastSecond = now;
      }
      const state = getState();
      const root = document.documentElement;
      const x = (mouse.x / 16).toFixed(3);
      const y = (64 - window.scrollY / 16).toFixed(5);
      const z = (mouse.y / 16).toFixed(3);
      const clock = new Date().toLocaleTimeString("ja-JP");
      const unlocked = Object.keys(state.unlocked).length;

      if (leftRef.current) {
        leftRef.current.textContent = [
          "Kazutti Portfolio 1.21 (next/vanilla)",
          `${fps} fps T: inf vsync`,
          `C: ${document.querySelectorAll("*").length} elements`,
          `Route: ${pathname}`,
          "",
          `XYZ: ${x} / ${y} / ${z}`,
          `Block: ${Math.floor(mouse.x / 16)} ${Math.floor(64 - window.scrollY / 16)} ${Math.floor(mouse.y / 16)}`,
          `Facing: ${mouse.facing}`,
          `Biome: ${biomes[pathname] ?? "minecraft:the_void"}`,
          `Light: ${root.dataset.time === "night" ? "4 (night)" : "15 (day)"}  Time: ${clock}`,
          `Weather: ${state.weather}`,
          `Advancements: ${unlocked}/${advancements.length}`,
        ].join("\n");
      }
      if (rightRef.current) {
        rightRef.current.textContent = [
          `Browser: ${browser}`,
          `CPU: ${nav.hardwareConcurrency ?? "?"}x cores`,
          `Mem: ${nav.deviceMemory ? `${nav.deviceMemory}GB` : "unknown"}`,
          "",
          `Display: ${window.innerWidth}x${window.innerHeight} @${window.devicePixelRatio}x`,
          `Lang: ${nav.language}`,
          "",
          "Built with Next.js + React",
          "Fonts: Press Start 2P / DotGothic16",
          "",
          "F3: 閉じる  L: 進捗  Esc: メニュー",
        ].join("\n");
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <div className="debug-overlay" aria-hidden="true">
      <pre ref={leftRef} className="debug-column" />
      <pre ref={rightRef} className="debug-column debug-right" />
    </div>
  );
}

export function DebugOverlay() {
  const debug = useGame((state) => state.debug);
  return debug ? <DebugPanel /> : null;
}
