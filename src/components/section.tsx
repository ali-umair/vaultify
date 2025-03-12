import { MoveUpRight, Pin } from "lucide-react";
import { SnippetCard } from "./snippets/SnippetCard";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function Section() {
	const snippet = {
		id: 1,
		title: "Share media plan",
		language: "TypeScript",
		code: "null",
	};
	return (
		<div
			id="section"
			className="flex flex-col flex-wrap gap-5 mb-10"
		>
			<div id="section-heading" className="flex items-center gap-3">
				<h2 className="text-xl flex items-center gap-2">
					{" "}
					<Pin size="18" color="gray" />{" "}
					<span className="font-bold text-sm text-gray-500">PINNED</span>
				</h2>
				<div className="bg-gray-700 h-1 w-1 rounded-full"></div>
				<Badge className="bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400 rounded-full px-3 py-1">7 Snippets</Badge>
			</div>
			<div id="section-cards" className="flex flex-wrap items-center gap-3">
				<SnippetCard snippet={snippet} />
				<SnippetCard snippet={snippet} />
				<SnippetCard snippet={snippet} />
				<SnippetCard snippet={snippet} />
				<Button size={"icon"} variant={"outline"} className="rounded-full h-16 w-16">
					<MoveUpRight className="h-10 w-10" />
				</Button>
				{/* <SnippetCard snippet={snippet} />
				<SnippetCard snippet={snippet} />
				<SnippetCard snippet={snippet} /> */}
			</div>
		</div>
	);
}
