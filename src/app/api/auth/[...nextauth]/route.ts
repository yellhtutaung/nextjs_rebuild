import type { NextAuthOptions} from "next-auth";
import NextAuth from "next-auth/next";
import {CredentialsProvider} from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";

// @ts-ignore
let authOptions: AuthOptions;
authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "jsmith"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = {id: "1", name: "J Smith", email: "jsmith@example.com"}
            }
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        //     authorization: {
        //         params: {
        //             prompt: "consent",
        //             access_type: "offline",
        //             response_type: "code"
        //         }
        //     }
        // })

    ],

};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
