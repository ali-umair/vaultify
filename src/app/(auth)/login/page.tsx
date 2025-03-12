// import { signIn } from "next-auth/react";
import { LoginForm } from "@/components/login-form"
// import { Github, Google } from "lucide-react";
import { FolderKey } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <FolderKey className="size-4" />
          </div>
          Vaultify
        </a>
        <LoginForm type="login" />
      </div>
    </div>
  );
}
