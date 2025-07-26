// filepath: f:\WEB DEV\FUTURE_INTERNS_INTERNSHIP\shopease\app\api\auth\[...nextauth].ts
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
// };

// export default NextAuth(authOptions);

// filepath: f:\WEB DEV\FUTURE_INTERNS_INTERNSHIP\shopease\app\api\auth\[...nextauth].ts
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { Account, Profile, User } from "next-auth";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       authorization: {
//         params: {
//           prompt: "select_account", // This ensures account selection every time
//         },
//       },
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account, profile }) {
//       // You can add custom logic here if needed
//       // For example, save user to your database
//       console.log("User signed in:", user);
//       return true;
//     },
//     async session({ session, token }) {
//       // You can customize the session object here
//       return session;
//     },
//     async jwt({ token, user, account }) {
//       // You can customize the JWT token here
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//   },
//   pages: {
//     signIn: '/login', // Your custom login page
//     error: '/login', // Redirect to login page on error
//   },
//   session: {
//     strategy: "jwt" as const,
//   },
// };

// export default NextAuth(authOptions);

import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { Account, Profile, User } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }: {
      user: User;
      account: Account | null;
      profile?: Profile;
    }) {
      console.log("User signed in:", user);
      return true;
    },
    async session({ session, token }) {
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);

