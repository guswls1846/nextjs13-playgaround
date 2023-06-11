"use client";
import React from "react";
import Link from "next/link";
import useUserInfo from "@/app/hook/useUserInfo";
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";

const HomeContainer = () => {
  const { department } = useUserInfo();
  const { refresh } = useRouter();
  const isLogin = department === "marketing" || department === "product";

  const handleLogout = () => {
    refresh();
    logout();
  };
  return (
    <div>
      {isLogin && <button onClick={handleLogout}>로그아웃</button>}
      {!isLogin && <Link href={"/login"}>로그인</Link>}
    </div>
  );
};

export default HomeContainer;
