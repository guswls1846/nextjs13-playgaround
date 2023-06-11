"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getUser } from "@/lib/auth";

const useUserInfo = () => {
  const pathname = usePathname();
  const [user, setUser] = useState({ department: "" });
  useEffect(() => {
    setUser(getUser());
  }, [pathname]);

  return user;
};

export default useUserInfo;
