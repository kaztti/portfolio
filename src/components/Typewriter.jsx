// src/components/Typewriter.jsx
"use client";
import { useEffect, useState, useCallback } from "react";

export default function Typewriter({ lines = [], typingSpeed = 80, pauseBetween = 800, className = "" }) {
  const [display, setDisplay] = useState(Array(lines.length).fill(""));
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  const tick = useCallback(() => {
    if (lineIdx >= lines.length) return;
    const full = lines[lineIdx];
    if (charIdx < full.length) {
      setDisplay(prev => {
        const next = [...prev];
        next[lineIdx] = full.slice(0, charIdx + 1);
        return next;
      });
      setCharIdx(c => c + 1);
    } else {
      setTimeout(() => {
        setLineIdx(i => i + 1);
        setCharIdx(0);
      }, pauseBetween);
    }
  }, [lineIdx, charIdx, lines, pauseBetween]);

  useEffect(() => {
    const id = setTimeout(tick, typingSpeed);
    return () => clearTimeout(id);
  }, [tick, typingSpeed]);

  return (
    <div className={className}>
      {display.map((t, i) => (
        <div key={i} aria-live="polite">
          {t}
          <span className="animate-pulse">|</span>
        </div>
      ))}
    </div>
  );
}