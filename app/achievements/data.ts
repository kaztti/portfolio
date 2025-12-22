export type AchievementType = 'task' | 'goal' | 'challenge';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string; 
  type: AchievementType; 
  link?: string;
}

export const achievementList: Achievement[] = [
  {
    id: 'rearth-project',
    title: 'マインクラフトマルチプレイサーバーであるらーす鯖のサーバー管理、開発、コミュニティマネジメント',
    description: '特にプラグイン開発、ユーザーからのチケットお問い合わせ対応、開発の進行管理を担当しています。',
    date: '2022-12~Now',
    icon: '🗺️', 
    type: 'challenge',
  },
  {
    id: 'menu-plugin',
    title: 'メニュープラグイン',
    description: 'らーす鯖で使用しているメニュープラグインを開発しました。GUIでの操作性を重視し、ユーザーが直感的に利用できるよう工夫しました。',
    date: '2024-12',
    icon: '🌳', 
    type: 'task',
  },
  {
    id: 'github-repo',
    title: 'その他の実績',  
    description: '上記の文字をクリックすると、私のGitHubリポジトリに飛びます。ここには他の様々な作品や企画が掲載されていますので、ぜひご覧ください！',
    date: 'Ongoing',
    icon: '📚', 
    type: 'goal', 
    link: 'https://github.com/kaztti/-', 
  },
];