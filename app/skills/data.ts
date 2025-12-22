export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'design';

export const categories = [
  { id: 'frontend', name: 'フロントエンド', icon: '🌐' },
  { id: 'backend',  name: 'バックエンド',   icon: '⚙️' },
  { id: 'tools',    name: 'ツール/その他', icon: '🧰' },
  { id: 'design',   name: 'デザイン',       icon: '🎨' },
] as const;

export interface Skill {
  id: string;
  name: string;
  iconUrl: string;
  description: string;
  category: SkillCategory;
  experience: string; 
  level: number;     
}

export const skillList: Skill[] = [
  {
    id: 'react',
    name: 'React / Next.js',
    iconUrl: 'https://placehold.co/64x64/61DAFB/000000.png?text=React',
    description: '',
    category: 'frontend',
    experience: '6か月', 
    level: 2, 
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    iconUrl: 'https://placehold.co/64x64/3178C6/ffffff.png?text=TS',
    description: '',
    category: 'frontend',
    experience: '6か月',
    level: 3,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    iconUrl: 'https://placehold.co/64x64/06B6D4/ffffff.png?text=Tailwind',
    description: '',
    category: 'frontend',
    experience: '6か月',
    level: 2,
  },
  
  {
    id: 'Java',
    name: 'Java',
    iconUrl: 'https://placehold.co/64x64/339933/ffffff.png?text=Java',
    description: 'マイクラフトのプラグイン開発や、基本的なプログラミングが可能です。',
    category: 'backend',
    experience: '1年＋',
    level: 4,
  },
  {
    id: 'mc-command',
    name: 'MC-Commands',
    iconUrl: 'https://placehold.co/64x64/C77e4e/ffffff.png?text=CMD', 
    description: 'mcfunctionを用いたデータパック制作や、単純なコマンドギミックの構築が可能です。',
    category: 'backend',
    experience: '2カ月', 
    level: 3,
  },
 
  {
    id: 'mc-plugin',
    name: 'MC-Plugin',
    iconUrl: 'https://placehold.co/64x64/fcf3cf/000000.png?text=Plugin',
    description: 'Spigot/Paper APIを使用したサーバーサイドプラグインの開発。独自機能の実装を行います。',
    category: 'backend',
    experience: '1年+',
    level: 4,
  },
  
  {
    id: 'mc-mod',
    name: 'Mod',
    iconUrl: 'https://placehold.co/64x64/444444/ffffff.png?text=Mod',
    description: '50人クラフトのコマンド勢採用に向けて、Forgeを使用したMOD開発を勉強しています。',
    category: 'backend',
    experience: '1カ月',
    level: 1,
  },

  {
    id: 'git',
    name: 'Git / GitHub',
    iconUrl: 'https://placehold.co/64x64/F05032/ffffff.png?text=Git',
    description: '',
    category: 'tools',
    experience: '3年',
    level: 4,
  },

  {
    id: 'archicad',
    name: 'Archicad',
    iconUrl: 'https://placehold.co/64x64/0059b3/ffffff.png?text=AC',
    description: 'BIMソフトウェア。平面と3Dの両方を横断しながら建築設計を行うことができます。',
    category: 'design',
    experience: '2年',
    level: 3,
  },
  {
    id: 'vectorworks',
    name: 'Vectorworks',
    iconUrl: 'https://placehold.co/64x64/e6bc00/000000.png?text=Vector',
    description: '2D/3D汎用CADソフト。大学ではこのソフトを使用して建築設計を学んでいます。',
    category: 'design',
    experience: '2年', 
    level: 3,
  },
];