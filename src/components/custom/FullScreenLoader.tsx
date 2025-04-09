// components/ui/FullScreenLoader.tsx
"use client";

import { Loader } from "lucide-react";

export default function FullScreenLoader() {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<Loader className="w-8 h-8 animate-spin" />
		</div>
	);
}
