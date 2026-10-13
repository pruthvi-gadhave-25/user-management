"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/users", label: "Users" },
        { href: "/settings", label: "Settings" },
    ];

    return (
        <nav className="space-y-2 text-white">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-4 py-3 ${
                        pathname === link.href || pathname.startsWith(link.href + "/")
                            ? "bg-red-800 text-white"
                            : "hover:bg-gray-800"
                    }`}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}