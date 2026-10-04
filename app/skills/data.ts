export type SkillCategory = "frontend" | "backend" | "tools" | "design";

export interface Skill {
  id: string;
  name: string;
  badge: { text: string; background: string; color: string };
  description: string;
  category: SkillCategory;
  experience: string;
  level: number;
}

export const categories = [
  { id: "frontend", name: "フロントエンド", icon: "🌐" },
  { id: "backend", name: "バックエンド", icon: "⚙️" },
  { id: "tools", name: "ツール/その他", icon: "🧰" },
  { id: "design", name: "デザイン", icon: "🎨" },
] as const satisfies ReadonlyArray<{ id: SkillCategory; name: string; icon: string }>;

export const skillList: Skill[] = [
  {
    id: "react",
    name: "React / Next.js",
    badge: { text: "React", background: "#61dafb", color: "#000000" },
    description: "",
    category: "frontend",
    experience: "1年",
    level: 3,
  },
  {
    id: "typescript",
    name: "TypeScript",
    badge: { text: "TS", background: "#3178c6", color: "#ffffff" },
    description: "",
    category: "frontend",
    experience: "1年",
    level: 4,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    badge: { text: "TW", background: "#06b6d4", color: "#ffffff" },
    description: "",
    category: "frontend",
    experience: "1年",
    level: 3,
  },
  {
    id: "java",
    name: "Java",
    badge: { text: "Java", background: "#339933", color: "#ffffff" },
    description: "マイクラフトのプラグイン開発や、基本的なプログラミングが可能です。",
    category: "backend",
    experience: "1年6か月",
    level: 5,
  },
  {
    id: "mc-command",
    name: "MC-Commands",
    badge: { text: "CMD", background: "#c77e4e", color: "#ffffff" },
    description: "mcfunctionを用いたデータパック制作や、単純なコマンドギミックの構築が可能です。",
    category: "tools",
    experience: "8か月",
    level: 4,
  },
  {
    id: "mc-plugin",
    name: "MC-Plugin",
    badge: { text: "Plugin", background: "#fcf3cf", color: "#000000" },
    description: "らーす鯖で使用しているプラグインを開発しています。メニュープラグインやPVPシステムを制作しました。",
    category: "backend",
    experience: "1年6か月",
    level: 5,
  },
  {
    id: "mc-mod",
    name: "Mod",
    badge: { text: "Mod", background: "#444444", color: "#ffffff" },
    description: "50人クラフトのコマンド勢採用に向けて、Forgeを使用したMOD開発を勉強しています。",
    category: "backend",
    experience: "7か月",
    level: 2,
  },
  {
    id: "git",
    name: "Git / GitHub",
    badge: { text: "Git", background: "#f05032", color: "#ffffff" },
    description: "",
    category: "tools",
    experience: "3年6か月",
    level: 5,
  },
  {
    id: "archicad",
    name: "Archicad",
    badge: { text: "AC", background: "#0059b3", color: "#ffffff" },
    description: "BIMソフトウェア。平面と3Dの両方を横断しながら建築設計を行うことができます。",
    category: "design",
    experience: "2年6か月",
    level: 4,
  },
  {
    id: "vectorworks",
    name: "Vectorworks",
    badge: { text: "Vector", background: "#e6bc00", color: "#000000" },
    description: "2D/3D汎用CADソフト。大学ではこのソフトを使用して建築設計を学んでいます。",
    category: "design",
    experience: "2年6か月",
    level: 4,
  },
];
