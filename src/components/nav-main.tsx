"use client";

import { ChevronRight, FolderKey, Home, Settings2, type LucideIcon } from "lucide-react";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({
	items,
}: {
	items: {
		title: string;
		url: string;
		icon: LucideIcon;
		isActive?: boolean;
		items?: {
			title: string;
			url: string;
		}[];
	}[];
}) {
	const pathname = usePathname();
    console.log(pathname)
	return (
		<SidebarGroup>
			{/* <SidebarGroupLabel>Snippets</SidebarGroupLabel> */}
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton asChild tooltip="Home">
						<Link
							href="/home"
							className={`link ${pathname == "/home" ? "bg-muted-foreground/30" : ""}`}
						>
							<Home />
							<span>Home</span>
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>
                <SidebarMenuItem>
					<SidebarMenuButton asChild tooltip="My Vault">
						<Link
							href="/home/vault"
							className={`link ${pathname == "/home/vault" ? "bg-muted-foreground/30" : ""}`}
						>
							<FolderKey />
							<span>My Vault</span>
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>
                <SidebarMenuItem>
					<SidebarMenuButton asChild tooltip="Settings">
						<Link
							href="/settings"
							className={`link ${pathname == "/settings" ? "bg-muted-foreground/30" : ""}`}
						>
							<Settings2 />
							<span>Settings</span>
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarGroup>
	);
}
