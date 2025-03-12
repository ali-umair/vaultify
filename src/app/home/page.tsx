"use client";
import { useEffect } from "react";

import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useRouter } from "next/navigation";

export default function DashboardPage() {

	const router = useRouter();
	const isAuthenticated = true;

	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/login"); // Redirect to login
		}
	}, [isAuthenticated, router]);

	const notifications = [
		{
			title: "Your call has been confirmed.",
			description: "1 hour ago",
		},
		{
			title: "You have a new message!",
			description: "1 hour ago",
		},
		{
			title: "Your subscription is expiring soon!",
			description: "2 hours ago",
		},
	];
	const languageLogos: Record<string, string> = {
		html: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
		css: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
		javascript:
			"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
		typescript:
			"https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
		react: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
	};
	return (
		// <div className="">
		// 	<div className="fixed left-4 top-2 h-[97%]">
		// 		<Sidebar />
		// 	</div>
		// 	<div className="fixed left-70 top-2 h-[97%] w-[calc(94vw_*_var(--scale-factor))] dark:bg-[#141414] bg-slate-300 rounded-lg flex flex-col">
		// 		<div className="flex items-center justify-between pb-5 px-6 py-4">
		// 			<h1 className="text-2xl font-medium">My Library</h1>
		// 			<div id="search-btns" className="flex items-center gap-2">
		// 				{/* <Button
		// 					type="submit"
		// 					variant="outline"
		// 					size="lg"
		// 					className="rounded-full"
		// 				>
		// 					<Filter />
		// 					Filter
		// 				</Button> */}
		// 				<Button type="submit" size="lg" className="rounded-full">
		// 					<Plus />
		// 					Add New
		// 				</Button>
		// 			</div>
		// 		</div>
		// 		<div className="flex-1 overflow-y-auto p-6">
		// 			<Section />
		// 			<Section />
		// 		</div>
		// 	</div>
		// </div>
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
					{/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
				<div className="aspect-video rounded-xl bg-muted/50" />
				<div className="aspect-video rounded-xl bg-muted/50" />
			</div> */}
					{/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
					<header className="flex h-16 shrink-0 items-center gap-2">
						<div className="w-full flex items-center justify-between gap-2 px-4">
							<div className="flex items-center gap-2 px-4">
								<SidebarTrigger className="-ml-1" />
							</div>
						</div>
					</header>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
