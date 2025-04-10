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
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Code, Code2, NotebookPen, Plus, Star, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session: Session | null = await auth();
	return (
		<SidebarProvider>
			<AppSidebar session={session} />
			<SidebarInset className="flex flex-col h-[98vh]">
				<header className="flex h-16 items-center gap-2 sticky top-0 z-10">
					<div className="w-full flex items-center justify-between gap-2 px-4">
						<div className="w-full flex items-center justify-between">
							<div className="flex items-center gap-4 px-4">
								<SidebarTrigger className="-ml-1" />
								<Separator className="h-6 w-px bg-border" />
								<svg
									width="16"
									height="16"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_5375_3077)">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2H30C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z"
											fill="currentColor"
										></path>
									</g>
									<defs>
										<clipPath id="clip0_5375_3077">
											<rect width="40" height="40" fill="currentColor"></rect>
										</clipPath>
									</defs>
								</svg>
								<h2 className="text-md">My Vault</h2>
								<Separator className="h-6 w-px bg-border" />
								<Input
									className="w-xs hover:cursor-pointer hover:bg-primary-foreground/10 hover:placeholder:text-primary"
									placeholder="Search..."
								/>
							</div>
							<div>
								{/* <DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button>
											<Plus />
											New Content
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem>
											<Code2 />
											Snippet
										</DropdownMenuItem>
										<DropdownMenuItem>
											<NotebookPen />
											Note
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Tag />
											Tag
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu> */}
								<Dialog>
									<DialogTrigger asChild>
										<Button>
											<Plus />
											New Content
										</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Create new</DialogTitle>
										</DialogHeader>
										<Separator className="w-full h-px my-1 bg-neutral-900" />
										<div className="flex flex-wrap gap-4">
											<Card className="w-52 text-sm hover:border-primary/50 hover:cursor-pointer">
												<CardHeader className="flex flex-row gap-2 items-center ">
													<Code2 className="text-indigo-500 h-6 w-6 " />
													<CardTitle className="w-fit">Snippet</CardTitle>
												</CardHeader>
												<CardContent className="-mt-3">
													<p>Create and organize a snippet of code</p>
												</CardContent>
											</Card>
											<Card className="w-52 text-sm hover:border-primary/50 hover:cursor-pointer">
												<CardHeader className="flex flex-row gap-2 items-center ">
													<NotebookPen className="text-amber-500 h-5 w-5" />
													<CardTitle className="w-fit">Note</CardTitle>
												</CardHeader>
												<CardContent className="-mt-3">
													<p>Create a note of important information</p>
												</CardContent>
											</Card>
											<Card className="w-52 text-sm hover:border-primary/50 hover:cursor-pointer">
												<CardHeader className="flex flex-row gap-2 items-center ">
													<Tag className="text-emerald-500 h-5 w-5" />
													<CardTitle className="w-fit">Tag</CardTitle>
												</CardHeader>
												<CardContent className="-mt-3">
													<p>Create a tag to categorize</p>
												</CardContent>
											</Card>
										</div>
										{/* <Separator className="w-full h-px my-1 bg-neutral-900" /> */}
										<DialogFooter className="sm:justify-start">
											<DialogClose asChild>
												<Button type="button" variant="outline">
													Cancel
												</Button>
											</DialogClose>
										</DialogFooter>
									</DialogContent>
								</Dialog>
							</div>
						</div>
					</div>
				</header>
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
