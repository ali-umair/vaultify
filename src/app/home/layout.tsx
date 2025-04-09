import { auth } from "@/auth";
import "../globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import {
	SidebarProvider,
	SidebarInset,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Session } from "next-auth";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session: Session | null = await auth();
	return (
		<SidebarProvider>
			<AppSidebar session={session}/>
			<SidebarInset className="flex flex-col h-[98vh]">
				<header className="flex h-16 items-center gap-2 sticky top-0 z-10">
					<div className="w-full flex items-center justify-between gap-2 px-4">
						<div className="flex items-center gap-4 px-4">
							<SidebarTrigger className="-ml-1" />
							<Separator className="h-6 w-px bg-border" />
							<h2 className="text-lg">Vaultify</h2>
						</div>
					</div>
				</header>
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
