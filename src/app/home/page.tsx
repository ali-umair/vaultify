import { Code, Code2, NotebookPen, Pin, Star, Tag } from "lucide-react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import HomeCards from "./vault/HomeCards";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import TableRowRecent from "./vault/TableRowRecent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function DashboardPage() {
	const session = await auth();
	console.log(session);
	if (!session) {
		redirect("/login");
	}

	type Item = {
		key: string;
		languageIcon: string;
		language: string;
		title: string;
		description: string;
	};
	const languageLogos: Record<string, string> = {
		html: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
		css: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
		javascript:
			"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
		typescript:
			"https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
		react: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
	};
	const recent: Array<Item> = [
		{
			key: "1",
			languageIcon:
				"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
			language: "React",
			title: "Start managing your vault",
			description:
				"We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations",
		},
		{
			key: "2",
			languageIcon:
				"https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
			language: "TypeScript",
			title: "Start managing your vault",
			description:
				"We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations",
		},
		{
			key: "3",
			languageIcon:
				"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
			language: "TypeScript",
			title: "Start managing your vault",
			description:
				"We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations",
		},
		{
			key: "4",
			languageIcon:
				"https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
			language: "TypeScript",
			title: "Start managing your vault",
			description:
				"We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations",
		},
		{
			key: "5",
			languageIcon:
				"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
			language: "TypeScript",
			title: "Start managing your vault",
			description:
				"We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations",
		},
		{
			key: "6",
			languageIcon:
				"https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
			language: "TypeScript",
			title: "Start managing your vault",
			description:
				"We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations",
		},
		{
			key: "7",
			languageIcon:
				"https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
			language: "TypeScript",
			title: "Start managing your vault",
			description:
				"We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations",
		},
		{
			key: "8",
			languageIcon:
				"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
			language: "React",
			title: "Start managing your vault",
			description:
				"We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations",
		},
		{
			key: "9",
			languageIcon:
				"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
			language: "React",
			title: "Start managing your vault",
			description:
				"We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations",
		},
		{
			key: "10",
			languageIcon:
				"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
			language: "React",
			title: "Start managing your vault",
			description:
				"We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations",
		},
		{
			key: "11",
			languageIcon:
				"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
			language: "React",
			title: "Start managing your vault",
			description:
				"We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations",
		},
		{
			key: "12",
			languageIcon:
				"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
			language: "React",
			title: "Start managing your vault",
			description:
				"We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations We need to develop website for the store that sells flowers and decorations",
		},
	];
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			{/* Main Grid Layout - Two Columns */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{/* Left Side (2/3 width) */}
				<div className="col-span-2 flex flex-col gap-4">
					{/* Top Row - Three Cards */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<HomeCards
							title="Total Snippets"
							count={35}
							icon={<Code2 className="text-indigo-500 h-6 w-6" />}
							subText="last added 3m ago"
						/>
						<HomeCards
							title="Total Notes"
							count={15}
							icon={<NotebookPen className="text-amber-500 h-5 w-5" />}
							subText="last added 5h ago"
						/>
						<HomeCards
							title="Total Tags"
							count={7}
							icon={<Tag className="text-emerald-500 h-5 w-5" />}
							subText="last added 1d ago"
						/>
					</div>
				</div>
				<Card className="lg:w-full">
					<CardHeader className="flex flex-row items-center justify-between">
						<CardTitle className="w-fit">Most Used</CardTitle>
						<Star className="fill-yellow-400 text-transparent h-6 w-6" />
					</CardHeader>
					<CardContent>
						<div className="flex justify-around font-bold">
							<div className="flex items-center justify-center gap-3">
								<span className="">Tag:</span>
								<Badge variant="secondary">Vaultify</Badge>
							</div>
							<div className="flex items-center justify-center gap-3">
								<span>Language:</span>
								<Avatar className="rounded-none h-7 w-7">
									<AvatarImage
										src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
										alt="@shadcn"
									/>
									<AvatarFallback>React</AvatarFallback>
								</Avatar>
							</div>
							<div className="flex items-center justify-center gap-3">
								<span>Type:</span>
								<Code className="text-muted-foreground h-7 w-7" />
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="flex">
				<div className="w-full">
					{/* <div className="p-4 flex items-center gap-2 font-bold text-lg">
						<Pin className="h-5 w-5" />
						Pinned
					</div>
					<ScrollArea className="h-[58vh] w-full">
						<div className="px-4">
							{recent.map((item) => (
								<TableRowRecent key={item.key} item={item}></TableRowRecent>
							))}
						</div>
					</ScrollArea> */}
				</div>
				{/* <div className="w-1/2">
					<h3 className="p-4 flex items-center gap-2 font-bold text-lg">
						<Star className="h-5 w-5" />
						Favorites
					</h3>
					<ScrollArea className="h-[55vh] w-full">
						<div className="px-4 w-full">
							{recent.map((item) => (
								<TableRowRecent item={item}></TableRowRecent>
							))}
						</div>
					</ScrollArea>
				</div> */}
			</div>
		</div>
	);
}
