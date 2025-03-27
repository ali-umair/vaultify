import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Code } from "lucide-react";
import React from "react";

type Props = {
	title: string;
	count: number;
	icon: React.ReactNode;
	subText: string;
}

export default function HomeCards({title, count, icon, subText}: Props) {
	return (
		<Card className="h-fit gap-2 lg:w-full">
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="w-fit">{title}</CardTitle>
				{icon}
			</CardHeader>
			<CardContent>
				<div className="flex flex-col">
					<p className="text-3xl font-bold">{count}</p>
					<p className="text-sm text-muted-foreground">{subText}</p>
				</div>
			</CardContent>
		</Card>
	);
}
