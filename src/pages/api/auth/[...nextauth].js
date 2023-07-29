import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GithubProvider from "next-auth/providers/github";
import dbConnect from "../../../../backend/config/dbConnenct";
import User from "../../../../backend/models/user";

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    session: {
      strategy: "jwt",
    },
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),

      CredentialsProvider({
        async authorize(credentials, req) {
          dbConnect();
          const { email, password } = credentials;
          const user = await User.findOne({ email }).select("+password");

          if (!user) {
            throw new Error("User dose not exist");
          }

          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );

          if (!isPasswordMatched) {
            throw new Error("Password or Email is incorrect");
          }

          return user;
        },
      }),
    ],

    pages: {
      signIn: `${process.env.API_URL}/login`,
    },
    secret: process.env.NEXTAUTH_SECRET,
  });
}
