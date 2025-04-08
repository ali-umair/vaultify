import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/schema";

export const authOptions: NextAuthConfig  = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  adapter: DrizzleAdapter(db), // Ensure the adapter is passed properly
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'database' },
};

// export const { handlers, auth, signIn } = NextAuth({
//   providers: [GitHub],
//   adapter: DrizzleAdapter(db),
// })

export const { handlers, auth, signIn } = NextAuth(authOptions);