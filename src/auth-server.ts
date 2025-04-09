"use server";

import { signIn, signOut } from "@/auth"; // import from the file above

export async function githubSignIn() {
  await signIn("github", { redirectTo: "/home" });
}

export async function sessionSignOut() {
  await signOut({ redirectTo: "/home" });
}