"use client";

import { useEffect } from "react";
import { advancements } from "./advancements";
import { ItemSprite } from "./pixels";
import { dismissToast, useGame, type Toast } from "./store";

const frameLabels = {
  task: "進捗を達成！",
  goal: "目標を達成！",
  challenge: "挑戦を達成！",
} as const;

function AdvancementToast({ toast }: { toast: Toast }) {
  const advancement = advancements.find(({ id }) => id === toast.advancementId);

  useEffect(() => {
    const timer = setTimeout(() => dismissToast(toast.id), 5000);
    return () => clearTimeout(timer);
  }, [toast.id]);

  if (!advancement) return null;

  return (
    <li className={`toast toast-${advancement.frame}`}>
      <span className="toast-icon">
        <ItemSprite icon={advancement.icon} size={32} />
      </span>
      <span className="toast-text">
        <strong className="toast-heading">{frameLabels[advancement.frame]}</strong>
        <span>{advancement.title}</span>
      </span>
    </li>
  );
}

export function Toasts() {
  const toasts = useGame((state) => state.toasts);

  return (
    <ol className="toasts" aria-live="polite" aria-label="進捗の通知">
      {toasts.slice(0, 3).map((toast) => (
        <AdvancementToast key={toast.id} toast={toast} />
      ))}
    </ol>
  );
}
