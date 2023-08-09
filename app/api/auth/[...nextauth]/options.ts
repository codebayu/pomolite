import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/common/libs/prisma';

export const options: any = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
    //     password: { label: 'Password', type: 'password' },
    //   },
    //   async authorize(credentials, req) {
    //     const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };

    //     if (user) {
    //       return user;
    //     }
    //     return null;
    //   },
    // }),
  ],
  session: {
    strategy: 'jwt',
  },
};
