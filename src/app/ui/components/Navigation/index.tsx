"use client";
import { usePathname } from "next/navigation";
import { NavLink } from "@/app/ui/components/Navigation/type";
import Link from "next/link";

interface NavigationProps {
  navLinks: NavLink[];
}

export function NavigationList({ navLinks }: NavigationProps) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        const textColor = isActive ? "text-blue" : "text-black";
        return (
          <Link
            className={`${textColor} flex items-center`}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
