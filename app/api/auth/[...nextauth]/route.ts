import nextAuth, {NextAuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/prisma";
import bcrypt from "bcrypt";



export const authOptions:NextAuthOptions = {
    session:{
        strategy:"jwt"
    },
    cookies: {
        sessionToken: {
          name: `next-auth.session-token`,
          options: {
            httpOnly: true, // Make cookie httpOnly for security
            sameSite: "lax", // 'Strict' or 'None' depending on your requirements
            secure: process.env.NODE_ENV === "production", // Cookies should be secure in production
            path: "/",
          },
        },
      },
    providers:[
        Credentials({
            name:"Credentials",
            credentials:{
                email:{label:"Email", type:"text"},
                password:{label:"Password", type:"password"},
            },
            async authorize(credentials:any){
                const user = await db.user.findUnique({
                    where:{
                        email:credentials.email
                    }
                });
                if(user){
                    const isValid = await bcrypt.compare(credentials.password,user.password as string);
                    return {id:user.id, email:user.email}
                }else {
                    return null;
                }

             
            }
        })
    ], 
   
    callbacks: {
        async jwt({token, user, account, profile}){
           
            if(profile){
                const user = await db.user.findUnique({
                    where:{
                        email:profile.email
                    },
                });
                if(!user){
                    throw new Error("User not found");
                    
                }
                token.id = user.id;
            }else if(token){
                const user = await db.user.findUnique({
                    where:{
                        email:token?.email as string
                    }
                })
                if(!user){
                    throw new Error("User not found");
                }
                token.id = user.id;
            }
            return token;
        },
        // async jwt({ token, user }) {
        //   if (user) {
        //     token.id = user.id;
        //   }
        //   return token;
        // },
        async session({ session, token }) {
            
          if (token) {
            session.user.id = token.id;
          }
          return session;
        },
      },
}



const handler = nextAuth(authOptions);
export {handler as GET, handler as POST};
