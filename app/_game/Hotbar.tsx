"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { advancements } from "./advancements";
import { ItemSprite, type ItemIcon } from "./pixels";
import { setState, unlock, useGame } from "./store";

type Router = ReturnType<typeof useRouter>;

interface HotbarSlot {
  label: string;
  icon: ItemIcon;
  href?: string;
  activate: (router: Router) => void;
}

const openExternal = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

export const hotbarSlots: HotbarSlot[] = [
  { label: "タイトル", icon: "grass", href: "/", activate: (router) => router.push("/") },
  { label: "プロフィール", icon: "head", href: "/profile", activate: (router) => router.push("/profile") },
  { label: "スキル", icon: "book", href: "/skills", activate: (router) => router.push("/skills") },
  { label: "実績", icon: "diamond", href: "/achievements", activate: (router) => router.push("/achievements") },
  { label: "GitHub", icon: "chest", activate: () => openExternal("https://github.com/kaztti") },
  { label: "X (Twitter)", icon: "feather", activate: () => openExternal("https://twitter.com/kaz_tti") },
  { label: "進捗一覧 (L)", icon: "compass", activate: () => setState({ overlay: "advancements" }) },
  {
    label: "デバッグ画面 (F3)",
    icon: "clock",
    activate: () => {
      setState((current) => ({ debug: !current.debug }));
      unlock("debug");
    },
  },
  { label: "メニュー (Esc)", icon: "redstone", activate: () => setState({ overlay: "pause" }) },
];

export function Hotbar() {
  const pathname = usePathname();
  const router = useRouter();
  const unlockedCount = useGame((state) => Object.keys(state.unlocked).length);
  const activeSlot = hotbarSlots.find((slot) => slot.href === pathname);
  const progress = (unlockedCount / advancements.length) * 100;

  return (
    <div className="hud">
      <p key={pathname} className="hud-item-name">
        {activeSlot?.label}
      </p>

      <div className="hud-xp" title={`進捗 ${unlockedCount} / ${advancements.length}`}>
        <span className="hud-level">{unlockedCount}</span>
        <div
          className="hud-xp-bar"
          role="progressbar"
          aria-label="進捗の達成度"
          aria-valuenow={unlockedCount}
          aria-valuemin={0}
          aria-valuemax={advancements.length}
        >
          <div className="hud-xp-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <nav className="hotbar" aria-label="ホットバー">
        {hotbarSlots.map((slot, index) => (
          <button
            key={slot.label}
            type="button"
            title={`${slot.label} [${index + 1}]`}
            aria-label={slot.label}
            aria-current={slot === activeSlot ? "page" : undefined}
            className={`hotbar-slot ${slot === activeSlot ? "is-active" : ""}`}
            onClick={() => slot.activate(router)}
          >
            {slot.icon === "head" ? (
              <Image src="/face.png" alt="" width={28} height={28} className="hotbar-face" />
            ) : (
              <ItemSprite icon={slot.icon} size={28} />
            )}
            <span className="hotbar-key">{index + 1}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
