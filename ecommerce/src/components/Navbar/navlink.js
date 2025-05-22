"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navlink({ name, href }) {
  const pathname = usePathname();

  return (
    <li className="w-full" key={name}>
      <Link
        href={href}
        className={`block py-2 px-3 text-white hover:bg-blue-800  rounded-sm  md:p-0 dark:text-white
          ${
            pathname === href
              ? "bg-blue-800 text-white md:bg-blue-950 md:hover:bg-blue-800 md:p-2"
              : "text-gray-900 md:bg-transparent md:hover:text-blue-700 md:hover:bg-transparent"
          }
          `}
      >
        {name}
      </Link>
    </li>
  );
}
