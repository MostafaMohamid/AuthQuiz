import CredentialsProvider from "next-auth/providers/credentials"
import { pages } from "next/dist/build/templates/app-page"
import NextAuth, { NextAuthOptions } from "next-auth"
import { json } from "stream/consumers";
import { log } from 'node:console';
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import TwitterProvider from "next-auth/providers/twitter";
const options: NextAuthOptions = {
    pages: {
        signIn: '/login',

    }
    ,
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user }) {
            console.log("data", user);
            return { ...token, ...user }
        },
        async session({ session, token }) {
            return { ...session, ...token }
        },
        async redirect({ url, baseUrl }) {
            console.log('Redirecting to:', '/home');
            return '/home';
        }

    },
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID as string,
            clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
            version: "2.0",
        }),
        AppleProvider({
            clientId: process.env.APPLE_ID as string,
            clientSecret: process.env.APPLE_SECRET as string,
        })
        ,
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
        ,
        CredentialsProvider({

            async authorize(credentials, req) {
                console.log('credentials', credentials);

                const res = await fetch('https://exam.elevateegy.com/api/v1/auth/signin',
                    {
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password
                        }),
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },

                    }
                )
                const user = await res.json();
                console.log('user', user);
                if (credentials?.email == user?.user?.email) return user

                return null;

            },

            credentials: {
                email: { label: "Username", type: "text", placeholder: "Username" },
                password: { label: "Password", type: "password" }
            },

        })
    ]
}
const handler = NextAuth(options)

export { handler as GET, handler as POST }




