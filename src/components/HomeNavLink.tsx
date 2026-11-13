"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNavLink() {
  const pathname = usePathname();
  const isHaulDetail = /^\/haul\/[^/]+$/.test(pathname);
  const href = isHaulDetail ? "/locations" : "/";

  return (
    <Link href={href} className="text-(--color-foreground) hover:text-(--color-primary)">
      Home
    </Link>
  );
}
