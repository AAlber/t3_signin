import NextAuth, { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";


export const authOptions: NextAuthOptions = {
  // Include user.id on session
  // callbacks: {
  //   session({ session, user }) {
  //     if (session.user) {
  //       session.user.id = user.id;
  //     }
  //     return session;
  //   },
  // },
  // secret: process.env.SECRET,
  // jwt:{
  //   encode: process.env.JWT_SIGNING_PRIVATE_KEY!,
  // }
  // jwt:{
  //   signingKey:process.env.JWT_SIGNING_PRIVATE_KEY!,
  // },
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
