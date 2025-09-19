// src/app/layout.js
import "./globals.css";
import LogoHeader from "@/components/LogoHeader";

export const metadata = {
  title: "Kazutti Portfolio",
  description: "かずってぃのポートフォリオ",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <LogoHeader />
        {children}
      </body>
    </html>
  );
}
