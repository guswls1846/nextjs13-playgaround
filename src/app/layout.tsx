import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS Playground",
  description: "NextJS 13 앱 라우터 방식 프로젝트 템플릿",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-yellow-700`}>
        루트 레이아웃
        {children}
      </body>
    </html>
  );
}
