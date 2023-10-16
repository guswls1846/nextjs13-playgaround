import { ReactNode } from "react";

type NestedLayoutProps = {
  children: ReactNode;
};

export default function NestedLayout({ children }: NestedLayoutProps) {
  return (
    <div className="bg-amber-100 h-20">
      <h1 className="text-red-500">중첩 레이아웃</h1>
      {children}
    </div>
  );
}
