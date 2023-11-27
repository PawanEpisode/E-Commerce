import type {NextAuthOptions} from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions= {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!, // exclamation (!) act as implicit type string
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Enter Your username",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter Your password",
                },
            },
            async authorize(credentials) {
                const user = {id:'1001', name: 'pawan', password: 'kumar'};
                if(
                    credentials?.username === user.name && 
                    credentials?.password === user.password
                    ) {
                        return user;
                    } else {
                        return null;
                    }
            }
        })
    ]
}