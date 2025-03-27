"use client";
import { useEffect } from "react";

import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useRouter } from "next/navigation";
import { Code } from "lucide-react";

export default function DashboardPage() {
	const router = useRouter();
	const isAuthenticated = true;

	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/login"); // Redirect to login
		}
	}, [isAuthenticated, router]);
	return (
		// <div className="flex flex-1 flex-col gap-4 p-4 overflow-y-auto">
		// 	<div className="grid auto-rows-min gap-4 md:grid-cols-3">
		// 		<div className="aspect-video rounded-xl bg-muted/50" />
		// 	</div>
		// 	<div className="grid auto-rows-min gap-4 md:grid-cols-1">
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 		<div className="w-full h-12 rounded-xl bg-muted/50" />
		// 	</div>
		// </div>
		<div className="p-4">
			<div className="w-full rounded-lg bg-muted px-6 py-4">
				<h3 className="text-xl font-bold mb-6">Categories</h3>
				<div className="flex gap-4">
					<div className="w-fit border border-muted-foreground/50 rounded-lg px-6 py-2 flex gap-2">
						<Code /> <span className="font-bold">Snippet</span>
					</div>
				</div>
			</div>
		</div>
	);
}
