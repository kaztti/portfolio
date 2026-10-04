export type AchievementType = 'task' | 'goal' | 'challenge';

export interface AchievementImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface AchievementLink {
  label: string;
  href: string;
}

export interface Achievement {
  id: string;
  title: string;
  description?: string;
  date?: string;
  icon: string;
  type: AchievementType;
  role?: string;
  highlights?: string[];
  tags?: string[];
  images?: AchievementImage[];
  links?: AchievementLink[];
}


export interface AchievementSection {
  id: string;
  title: string;
  items: Achievement[];
}

export const achievementSections: AchievementSection[] = [
  {
    id: 'events',
    title: 'イベント企画',
    items: [
      {
        id: 'kenchiku-jiman-vol1',
        title: '賞金付き建築大会「ケンチク自慢 Vol.1」の開催',
        icon: '🏆',
        type: 'challenge',
        links: [{ label: '告知ポスト (X)', href: 'https://x.com/rearthserver/status/2003387380578001361' }],
      },
      {
        id: 'photo-sessions',
        title: '定期的に撮影会の開催',
        icon: '📸',
        type: 'task',
        images: [
          { src: '/achievements/group-photo.png', alt: 'らーす鯖のロビーの前に大勢のプレイヤーが集まった集合写真', width: 1920, height: 1080 },
        ],
      },
      {
        id: 'promo-events',
        title: '宣伝イベントの開催',
        icon: '📣',
        type: 'task',
        images: [
          { src: '/achievements/promo-campaign.png', alt: '「らーす鯖を宣伝しよう！！」Discord 参加人数の達成ごとに報酬を配布するキャンペーン告知', width: 1600, height: 900 },
        ],
      },
    ],
  },
  {
    id: 'video',
    title: '広告・動画制作',
    items: [
      {
        id: 'promo-images',
        title: '広告画像の制作',
        icon: '🖼️',
        type: 'task',
        images: [
          { src: '/achievements/war-server-teaser.png', alt: '「次期 War 鯖」2026年3月20日公開の告知画像', width: 1280, height: 720 },
          { src: '/achievements/life-server-teaser.png', alt: '「新 Life 鯖」Discord 参加者 8,000 人達成で公開の告知画像', width: 1280, height: 720 },
          { src: '/achievements/war-server-guide.png', alt: 'War 鯖のサーバー内に設置した案内パネル', width: 1920, height: 1009 },
        ],
      },
      {
        id: 'race-server-promo-videos',
        title: 'らーす鯖の紹介動画の制作・編集',
        highlights: [
          '紹介動画Shortsの編集・制作',
          '約2か月継続して毎日投稿',
          '多くの動画で再生数1万回超え',
        ],
        description:
          'らーす鯖の魅力を伝えるために取り組んでいました。',
        date: '約2か月（毎日投稿）',
        icon: '🎬',
        type: 'task',
        links: [{ label: 'YouTube チャンネル', href: 'https://www.youtube.com/@RearthServer' }],
      },
    ],
  },
  {
    id: 'plugin',
    title: 'プラグイン開発',
    items: [
      {
        id: 'core-plugin',
        title: 'コアプラグイン',
        highlights: [
          'PVPに関するシステム',
          'グリッチや不正を防止するシステム',
          'らーす鯖で使えるコマンドを追加',
        ],
        description:
          'らーす鯖のゲーム性を担うプラグインを開発しました。',
        date: '2024-8~2026-7.31',
        icon: '🌳',
        type: 'task',
      },
      {
        id: 'github-repo',
        title: 'GitHub（その他の制作物）',
        description:
          'リポジトリに制作物や企画の一部をまとめています。',
        date: 'Ongoing',
        icon: '📚',
        type: 'goal',
        links: [{ label: 'GitHub', href: 'https://github.com/kaztti/-' }],
      },
    ],
  },
  {
    id: 'study',
    title: '研究・学び',
    items: [
      {
        id: 'promotion-research',
        title: '効果的な宣伝の研究',
        icon: '🔍',
        type: 'goal',
      },
      {
        id: 'copywriting-research',
        title: '魅力を感じる文章構成の研究',
        icon: '✒️',
        type: 'goal',
      },
    ],
  },
  {
    id: 'race-server',
    title: 'らーす鯖の運営',
    items: [
      {
        id: 'rearth-project',
        title:
          'マインクラフトマルチプレイサーバー「らーす鯖」の運営',
        role: '元モデレーター / 開発メンバー',
        highlights: [
          'Discord参加者 6,500＋',
          '同時接続者数 230人',
          'サーバー参加プレイヤー総数 19,000＋',
          '運営歴 3年＋',
        ],
        tags: [
          'サーバー管理',
          'コンテンツ開発',
          'コミュニティの治安維持',
          'プレイヤーサポート',
          '広告画像・動画の作成',
        ],
        date: '2022-12~2026-07.27',
        icon: '🗺️',
        type: 'task',
      },
    ],
  },
];
