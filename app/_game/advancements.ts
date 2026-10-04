import type { ItemIcon } from "./pixels";

export type AdvancementFrame = "task" | "goal" | "challenge";

export const advancements = [
  { id: "welcome", title: "Minecraft", description: "Kazutti の世界に降り立つ", hint: "サイトを開く", icon: "grass", frame: "task" },
  { id: "profile", title: "自己紹介", description: "プロフィールを覗いた", hint: "プロフィールを見る", icon: "head", frame: "task" },
  { id: "skills", title: "エンチャンター", description: "スキル一覧を開いた", hint: "スキルを見る", icon: "book", frame: "task" },
  { id: "achievements", title: "ダイヤモンド！", description: "実績一覧を開いた", hint: "実績を見る", icon: "diamond", frame: "task" },
  { id: "adventuring", title: "冒険の時間", description: "すべてのページを訪れた", hint: "全ページを巡る", icon: "compass", frame: "goal" },
  { id: "debug", title: "統計オタク", description: "F3 デバッグ画面を開いた", hint: "開発者なら知っているキー", icon: "clock", frame: "task" },
  { id: "weather", title: "お天気キャスター", description: "天候を変更した", hint: "Esc メニューの中", icon: "feather", frame: "task" },
  { id: "night", title: "おやすみなさい", description: "時間を夜にした", hint: "Esc メニューの中", icon: "clock", frame: "task" },
  { id: "headbonk", title: "ヘッドバンガー", description: "Kazutti の頭を 10 回クリックした", hint: "プロフィールの顔", icon: "head", frame: "challenge" },
  { id: "completionist", title: "完全攻略", description: "すべての進捗を達成した", hint: "全部集める", icon: "diamond", frame: "challenge" },
] as const satisfies ReadonlyArray<{
  id: string;
  title: string;
  description: string;
  hint: string;
  icon: ItemIcon;
  frame: AdvancementFrame;
}>;

export type AdvancementId = (typeof advancements)[number]["id"];
