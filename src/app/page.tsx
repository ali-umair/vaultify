"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();
	const isAuthenticated = true;

	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/login"); // Redirect to login
		} else if (isAuthenticated) {
			router.push("/home"); // Redirect to app
		}
	}, [isAuthenticated, router]);
	return <></>;
}
