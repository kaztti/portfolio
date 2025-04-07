import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import LogoHeader from "@/components/LogoHeader"; // 👈 追加！

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400", variable: "--font-pixel" });

export const metadata = {
  title: "Kazutti Portfolio",
  description: "Kazuttiのポートフォリオ",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} ${pixelFont.variable} antialiased`}>
        {/* 👇 どのページでもロゴ表示 */}
        <LogoHeader />

        {/* 👇 アニメーション付きページ内容 */}
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
