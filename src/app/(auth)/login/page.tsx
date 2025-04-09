"use client";
import { githubSignIn } from "@/auth-server";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Github, Loader, LoaderCircle, LoaderPinwheel } from "lucide-react";
import { useTransition } from "react";

export default function LoginPage() {
	const [pending, startTransition] = useTransition();
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
			<div className="flex max-w-sm flex-col gap-6">
				<div className="flex items-center gap-2 self-center font-medium">
					<svg
						width="22"
						height="22"
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
					Vaultify
				</div>
				{/* <LoginForm type="login" /> */}
				<div className={cn("flex flex-col gap-6")}>
					<Card>
						<CardHeader className="text-center">
							<CardTitle className="text-xl">Welcome back</CardTitle>
							<CardDescription>
								Login with your GitHub or Google account
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form>
								<div className="grid gap-6">
									<div className="flex flex-col gap-4">
										<Button
											variant="outline"
											className="w-full"
											onClick={() => {
												startTransition(() => {
													githubSignIn();
												});
											}}
											disabled={pending}
										>
											{pending ? <Loader className="animate-spin"/>  : <Github className="size-4" />}
											<span>
												{pending ? "Redirecting..." : "Sign in with GitHub"}
											</span>
											
										</Button>
										{/* <Button
											type="submit"
											variant="outline"
											className="w-full"
											disabled={pending}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
											>
												<path
													d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
													fill="currentColor"
												/>
											</svg>
											{pending && <Github className="animate-spin h-4 w-4" />}
											<span>
												{pending ? "Redirecting..." : "Sign in with GitHub"}
											</span>
										</Button> */}
									</div>
								</div>
							</form>
						</CardContent>
					</Card>
					<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
						By clicking continue, you agree to our{" "}
						<a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
					</div>
				</div>
				{/* <form
					action={async () => {
						"use server";
						await signIn("github");
					}}
				>
					<button type="submit">Signin with GitHub</button>
				</form> */}
			</div>
		</div>
	);
}
