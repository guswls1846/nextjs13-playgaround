import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "@/app/dashboard/loading";

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
      <body>
        <h1>Cars</h1>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Cars</Link>
        </li>
        {children}
      </body>
    </html>
  );
}
