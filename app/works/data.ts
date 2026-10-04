export interface WorkLink {
  label: string;
  href: string;
}

export interface Work {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  date?: string;
  tweetUrl?: string;
  links?: WorkLink[];
  badge?: { text: string; background: string; color: string };
}

export interface WorkSection {
  id: string;
  title: string;
  items: Work[];
}

export const workSections: WorkSection[] = [
  {
    id: "plugin",
    title: "プラグイン",
    items: [
      {
        id: "sulfur-magma-cube",
        title: "マグマキューブをサルファー化",
        tweetUrl: "https://x.com/kaz_tti/status/2105999558291730641",
      },
    ],
  },
  {
    id: "datapack",
    title: "データパック・コマンド",
    items: [],
  },
  {
    id: "mod",
    title: "Mod",
    items: [],
  },
];
