import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
	Clock,
	Code,
	Ellipsis,
	MoveUpRight,
	Notebook,
	Pen,
	Pin,
	Trash2,
} from "lucide-react";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Item = {
	key: string;
	languageIcon: string;
	language: string;
	title: string;
	description: string;
};

export default function TableRowRecent({ item }: { item: Item }) {
	return (
		// <div key={item.key} className="w-full text-center bg-primary-100">
		// 	<TableCell className="w-full flex items-center justify-between">
		// 		<div className="w-full flex items-center gap-4">
		// 			<Avatar className="rounded-none h-8 w-8">
		// 				<AvatarImage src={item.languageIcon} alt="@shadcn" />
		// 				<AvatarFallback>{item.language}</AvatarFallback>
		// 			</Avatar>
		// 			<div className="flex flex-col items-start w-56">
		// 				<p className="max-w-full text-lg font-medium overflow-hidden overflow-ellipsis">
		// 					{item.title}
		// 				</p>
		// 				<p className="text-xs text-muted-foreground max-w-[90%] overflow-hidden overflow-ellipsis">
		// 					{item.description}
		// 				</p>
		// 			</div>
		// 		</div>
		// 		<Button variant="outline">
		// 			<MoveUpRight className="h-5 w-5 float-right" />
		// 		</Button>
		// 	</TableCell>
		// </div>
		<div className="w-full">
			<div className="w-full flex justify-between items-center px-6 py-4 bg-muted/30 mb-3 rounded-lg hover:shadow-lg">
				<div className="max-w-1/3 flex gap-4 items-center">
					<Avatar className="rounded-none h-5 w-5">
						<AvatarImage src={item.languageIcon} alt="@shadcn" />
						<AvatarFallback>{item.language}</AvatarFallback>
					</Avatar>
					<h4 className="font-medium line-clamp-1">{item.title}</h4>
					<div className="flex items-center gap-2 text-xs font-bold text-primary/50 ml-5">
						<Notebook className="h-4 w-4" />
						<span>Note</span>
					</div>
				</div>
				<div className="flex gap-4 items-center">
					<div className="flex gap-2">
						<Badge variant="secondary">HTML</Badge>
						<Badge variant="secondary">CSS</Badge>
					</div>
					<div className="flex gap-2 items-center">
						<Clock className="h-4 w-4 text-primary/50" />
						<span className="text-sm text-primary/50">1d ago</span>
					</div>
				</div>
				<div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Ellipsis className="h-5 w-5 hover:text-muted-foreground hover:cursor-pointer" />
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56">
							<DropdownMenuItem>
								<Pin />
								Remove from pinned
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Pen />
								View/Edit
							</DropdownMenuItem>
							<DropdownMenuItem variant="destructive">
								<Trash2 />
								Delete
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
}
