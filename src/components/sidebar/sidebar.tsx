"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { links } from "./data";

const Sidebar = () => {
  const pathname = usePathname();

  const checkActive = (path: string) =>
    path === "/" ? pathname === path : pathname.startsWith(path);

  const renderMenuItems = links.map((link, index) => (
    <li
      key={index}
      className={clsx(
        "h-10 w-full flex justify-start items-center p-2",
        checkActive(link.href)
          ? "text-primary-bg2-default bg-primary-bg1-default"
          : "text-neutral-fg1-default"
      )}
    >
      <Link href={link.href} className={clsx(["font-semibold text-base"])}>
        {link.name}
      </Link>
    </li>
  ));

  return (
    <aside className="w-[240px] bg-white h-[calc(100vh-64px)]">
      <ul className="p-4 flex flex-col gap-y-1">{renderMenuItems}</ul>
    </aside>
  );
};

export default Sidebar;
