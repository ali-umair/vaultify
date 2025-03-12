"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Copy, Trash, Pin, PinOff, Pencil, Star, Trash2 } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
// import { toast } from "@/components/ui/use-toast";

export function SnippetCard({
	snippet,
}: {
	snippet: {
		id: number;
		title: string;
		language: string;
		code: string;
	};
}) {
	const [pinned, setPinned] = useState(false);
	const [starred, setStarred] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(snippet.code);
		// setCopied(true);
		// toast({
		// 	title: "Copied!",
		// 	description: "Snippet copied to clipboard.",
		// });
		// setTimeout(() => setCopied(false), 2000);
	};

	const togglePin = () => {
		// setIsPinned(!isPinned);
		// toast({
		// 	title: isPinned ? "Unpinned" : "Pinned",
		// 	description: isPinned
		// 		? "Snippet removed from pinned items."
		// 		: "Snippet added to pinned items.",
		// });
	};

	function togglePinned() {
		setPinned(!pinned);
	}
	function toggleStarred() {
		setStarred(!starred);
	}

	return (
		<Card className="w-sm h-fit bg-slate-200 hover:border-gray-50">
			<CardHeader>
				<div className="flex items-center justify-between mb-2 -mt-2">
					<div className="flex gap-2 h-fit flex-wrap mr-5">
						{/* <Badge className="bg-[#E34F26]">HTML</Badge>
						<Badge className="bg-[#1572B6]">CSS</Badge>
						<Badge className="bg-[#F7DF1E] text-black">JS</Badge> */}
						<Badge className="bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400 rounded-full px-3 py-1 ">HTML</Badge>
						<Badge className="bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400 rounded-full px-3 py-1 ">CSS</Badge>
					</div>
					<div className="flex gap-2">
						<Button
							onClick={toggleStarred}
							variant={starred ? "default" : "outline"}
							className="rounded-full"
						>
							<Star />
						</Button>
						<Button
							variant={pinned ? "default" : "outline"}
							onClick={togglePinned}
							className="rounded-full"
						>
							<Pin />
						</Button>
					</div>
				</div>
				<CardTitle className="text-xl">{snippet.title}</CardTitle>
				<CardDescription className="text-sm">
					We need to develop website for the store that sells flowers and
					decorations.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex justify-between items-center -mb-3">
				<div className="flex gap-2">
					<Avatar className="rounded-none h-5 w-5">
						<AvatarImage
							src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
							alt="@shadcn"
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Avatar className="rounded-none h-5 w-5">
						<AvatarImage
							src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
							alt="@shadcn"
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
				<div className="flex gap-2">
					<Button variant="destructive" className="rounded-full">
						<Trash2 />
					</Button>
					<Button className="rounded-full">
						<Pencil />
					</Button>
				</div>
			</CardContent>
			{/* <CardFooter className="flex justify-between">
						<Button variant="destructive">Delete</Button>
						<Button>Edit</Button>
					</CardFooter> */}
		</Card>
	);
}
