"use client";

// import { SearchInput } from "@/components/ui/SearchInput";
import { SnippetList } from "@/components/snippets/SnippetList";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Pin, PinOff, Star, StarOff, Trash2 } from "lucide-react";
import { useState } from "react";
import { SnippetCard } from "@/components/snippets/SnippetCard";

export default function DashboardPage() {
	const snippet = {
		id: 1,
		title: "Share media plan",
		language: "TypeScript",
		code: "null",
	};
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
		<div className="flex gap-10">
			{/* <div className="">
				<Sidebar />
			</div>
			<div className="p-6"> */}
			{/* <h1 className="text-2xl font-bold">Dashboard</h1> */}
			{/* <SearchInput placeholder="Search snippets..." className="mt-4" /> */}

			{/* <section className="mt-6">
					<h2 className="text-lg font-semibold">📌 Pinned Snippets</h2>
					<SnippetList filter="pinned" />
				</section>

				<section className="mt-6">
					<h2 className="text-lg font-semibold">📝 Recent Snippets</h2>
					<SnippetList filter="recent" />
				</section>
			</div> */}
			<div className="">
				<Sidebar />
			</div>
			<div className="pt-5">
				<h1 className="text-3xl font-medium mb-5">Home</h1>
				<div className="flex flex-wrap gap-3">
					<SnippetCard snippet={snippet} />
					<SnippetCard snippet={snippet} />
					<SnippetCard snippet={snippet} />
				</div>
			</div>
		</div>
	);
}
