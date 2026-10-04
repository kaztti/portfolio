"use client";

import { useEffect, useRef } from "react";
import { getState, setState, unlock } from "./store";

const faces = ["front", "back", "left", "right", "top", "bottom"] as const;

export function PlayerHead() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cube = cubeRef.current;
    const scene = sceneRef.current;
    if (!cube || !scene) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rotation = { x: -18, y: -30, vx: 0, vy: reducedMotion ? 0 : 0.35 };
    let drag: { x: number; y: number; moved: number } | null = null;
    let frame = 0;

    const render = () => {
      if (!drag) {
        rotation.y += rotation.vy;
        rotation.x += rotation.vx;
        rotation.vx *= 0.94;
        rotation.vy = rotation.vy * 0.96 + (reducedMotion ? 0 : 0.35) * 0.04;
        rotation.x += (-18 - rotation.x) * 0.02;
      }
      cube.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
      frame = requestAnimationFrame(render);
    };

    const onDown = (event: PointerEvent) => {
      drag = { x: event.clientX, y: event.clientY, moved: 0 };
      scene.setPointerCapture(event.pointerId);
    };
    const onMove = (event: PointerEvent) => {
      if (!drag) return;
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      drag.moved += Math.abs(dx) + Math.abs(dy);
      rotation.y += dx * 0.6;
      rotation.x = Math.max(-80, Math.min(80, rotation.x - dy * 0.6));
      rotation.vy = dx * 0.6;
      rotation.vx = -dy * 0.3;
      drag.x = event.clientX;
      drag.y = event.clientY;
    };
    const onUp = () => {
      if (drag && drag.moved < 6) {
        cube.classList.remove("is-hurt");
        void cube.offsetWidth;
        cube.classList.add("is-hurt");
        rotation.vy += 25;
        setState((current) => ({ headClicks: current.headClicks + 1 }));
        if (getState().headClicks >= 10) unlock("headbonk");
      }
      drag = null;
    };

    scene.addEventListener("pointerdown", onDown);
    scene.addEventListener("pointermove", onMove);
    scene.addEventListener("pointerup", onUp);
    scene.addEventListener("pointercancel", onUp);
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      scene.removeEventListener("pointerdown", onDown);
      scene.removeEventListener("pointermove", onMove);
      scene.removeEventListener("pointerup", onUp);
      scene.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <div ref={sceneRef} className="head-scene" role="img" aria-label="Kazutti のアバター（ドラッグで回転、クリックで叩ける）">
      <div ref={cubeRef} className="head-cube">
        {faces.map((face) => (
          <div key={face} className={`head-face head-${face}`} />
        ))}
      </div>
      <div className="head-shadow" />
    </div>
  );
}
