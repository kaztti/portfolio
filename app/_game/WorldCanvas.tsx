"use client";

import { useEffect, useRef } from "react";
import { getState } from "./store";

interface Drop {
  x: number;
  y: number;
  speed: number;
  size: number;
  sway: number;
}

const random = (min: number, max: number) => min + Math.random() * (max - min);

export function WorldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let width = 0;
    let height = 0;
    let drops: Drop[] = [];
    let stars: { x: number; y: number; phase: number }[] = [];
    let flash = 0;
    let frame = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const count = Math.round((width * height) / 9000);
      drops = Array.from({ length: count }, () => ({
        x: random(0, width),
        y: random(-height, height),
        speed: random(0.6, 1.2),
        size: random(2, 4),
        sway: random(0, Math.PI * 2),
      }));
      stars = Array.from({ length: Math.round(width / 12) }, () => ({
        x: random(0, width),
        y: random(0, height * 0.6),
        phase: random(0, Math.PI * 2),
      }));
    };

    const tick = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const { weather } = getState();
      const isNight = document.documentElement.dataset.time === "night";

      if (isNight && weather === "clear") {
        for (const star of stars) {
          const alpha = 0.4 + 0.6 * Math.abs(Math.sin(time / 900 + star.phase));
          ctx.fillStyle = `rgba(255, 255, 230, ${alpha})`;
          ctx.fillRect(Math.round(star.x), Math.round(star.y), 3, 3);
        }
      }

      if (weather === "rain" || weather === "thunder") {
        ctx.fillStyle = "rgba(120, 160, 255, 0.55)";
        for (const drop of drops) {
          drop.y += 14 * drop.speed;
          drop.x -= 2 * drop.speed;
          if (drop.y > height) {
            drop.y = random(-60, -10);
            drop.x = random(0, width + 100);
          }
          ctx.fillRect(Math.round(drop.x), Math.round(drop.y), 2, 12);
        }
      } else if (weather === "snow") {
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        for (const drop of drops) {
          drop.y += 1.4 * drop.speed;
          drop.sway += 0.02;
          drop.x += Math.sin(drop.sway) * 0.6;
          if (drop.y > height) {
            drop.y = random(-40, -5);
            drop.x = random(0, width);
          }
          ctx.fillRect(Math.round(drop.x), Math.round(drop.y), drop.size, drop.size);
        }
      }

      if (weather === "thunder") {
        if (flash <= 0 && Math.random() < 0.003) flash = 1;
        if (flash > 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${flash * 0.6})`;
          ctx.fillRect(0, 0, width, height);
          flash -= 0.04;
        }
      }

      frame = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="world-canvas" aria-hidden="true" />;
}
