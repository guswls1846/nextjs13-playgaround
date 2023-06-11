"use client";
import "./globals.css";
import React from "react";
import useUserInfo from "@/app/hook/useUserInfo";

interface RootLayoutProps {
  children: React.ReactNode;
  marketingTeam: React.ReactNode;
  productTeam: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({
  children,
  marketingTeam,
  productTeam,
  modal,
}: RootLayoutProps) {
  const { department } = useUserInfo();

  const isMarketingTeam = department === "marketing";
  const isProductTeam = department === "product";

  return (
    <html lang="en">
      <body className={"h-screen flex flex-col"}>
        {children}
        {modal}

        {/*조건부 라우트를 사용한 병렬 라우트*/}
        {isMarketingTeam && marketingTeam}
        {isProductTeam && productTeam}
      </body>
    </html>
  );
}
