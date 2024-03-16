import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {authConfig} from "@/app/auth.config";
import {connectToDatabase} from "@/app/lib/mongoose";
import {User} from "@/app/lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
 try {
   connectToDatabase();
   const user = await User.findOne({ username: credentials.username });


   if (!user || !user.isAdmin) throw new Error("Wrong credentials!");


   const isPasswordCorrect = await bcrypt.compare(
     credentials.password,
     user.password
   );


   if (!isPasswordCorrect) throw new Error("Wrong credentials!");


   return user;
 } catch (err) {
   console.log(err);
   throw new Error("Failed to login!");
 }
};


export const { signIn, signOut, auth } = NextAuth({
 ...authConfig,
 providers: [
   CredentialsProvider({
     async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
   }),
 ],
})
