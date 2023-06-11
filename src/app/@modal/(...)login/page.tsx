"use client";
import React, { SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import Modal from "@/components/modal";

const LoginModal = () => {
  const { back } = useRouter();
  const handleLogin = (event: SyntheticEvent<HTMLButtonElement>) => {
    const name = event.currentTarget.name as "marketing" | "product";
    login(name);
    back();
  };

  return (
    <Modal>
      <div className={"flex flex-1 flex-col w-96 h-96 bg-blue-100"}>
        <button onClick={handleLogin} name={"marketing"}>
          마켓팅팀 로그인
        </button>
        <button onClick={handleLogin} name={"product"}>
          프로덕트팀 로그인
        </button>
      </div>
    </Modal>
  );
};

export default LoginModal;
