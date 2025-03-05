"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/ui/theme-toggle"; // Dark Mode Toggle
import { Home, Folder, Star, Settings } from "lucide-react";
import Link from "next/link";

const sidebarLinks = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "My Vault", href: "/dashboard/vault", icon: Folder },
  { name: "Pinned", href: "/dashboard/pinned", icon: Star },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-background p-4 border-r">
      <h2 className="text-xl font-bold mb-6">Vaultify 🔐</h2>
      <nav className="space-y-2">
        {sidebarLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <Button
              variant={pathname === link.href ? "secondary" : "ghost"}
              className="w-full flex justify-start"
            >
              <link.icon className="mr-2 h-5 w-5" />
              {link.name}
            </Button>
          </Link>
        ))}
      </nav>
      {/* <div className="absolute bottom-4">
        <ModeToggle />
      </div> */}
    </aside>
  );
}
