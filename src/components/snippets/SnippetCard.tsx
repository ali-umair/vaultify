"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
		<Card className="w-sm h-fit">
					<CardHeader>
						<div className="flex items-center justify-between mb-2">
							<div className="flex gap-2 h-fit">
								<Badge className="bg-[#E34F26]">HTML</Badge>
								<Badge className="bg-[#1572B6]">CSS</Badge>
								<Badge className="bg-[#F7DF1E] text-black">JS</Badge>
							</div>
							<div className="flex gap-2">
								<Button
									onClick={toggleStarred}
									variant={starred ? "default" : "outline"}
								>
									<Star />
								</Button>
								<Button
									variant={pinned ? "default" : "outline"}
									onClick={togglePinned}
								>
									<Pin />
								</Button>
							</div>
						</div>
						<CardTitle className="text-2xl mb-2">
							{snippet.title}
						</CardTitle>
						<CardDescription className="text-base">
							We need to develop website for the store that sells flowers and
							decorations.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex justify-between items-center">
						<div className="flex gap-2">
							<Avatar className="rounded-none h-6 w-6">
								<AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="@shadcn" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<Avatar className="rounded-none h-6 w-6">
								<AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="@shadcn"/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<Avatar className="rounded-none h-6 w-6">
								<AvatarImage
									src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<Avatar className="rounded-none h-6 w-6">
								<AvatarImage
									src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
						<div className="flex gap-2">
							<Button variant="destructive">
								<Trash2 />
							</Button>
							<Button>
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