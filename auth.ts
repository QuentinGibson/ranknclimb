import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import { authConfig } from './auth.config';
import GoogleProvider from 'next-auth/providers/google';
import TwitchProvider from 'next-auth/providers/twitch';
import DiscordProvider from 'next-auth/providers/discord';

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log(`Google profile email:`, profile.email);
        return {
          id: profile.sub,
          email: profile.email,
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    DiscordProvider({
      profile(profile) {
        console.log(`Discord profile email:`, profile.email);
        return {
          id: profile.id,
          email: profile.email,
        };
      },
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    TwitchProvider({
      profile(profile) {
        console.log(`Twitch profile email:`, profile.email);
        return {
          id: profile.sub,
          email: profile.email,
        };
      },
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUser(email);
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
    //TODO: Add Riot Games provider

    // {
    //   id: 'riot',
    //   name: 'Riot',
    //   type: 'oauth',
    //   issuer: 'https://auth.riotgames.com',
    //   clientId: process.env.RIOT_CLIENT_ID,
    //   clientSecret: process.env.RIOT_CLIENT_SECRET,
    //   wellKnown: 'https://auth.riotgames.com/.well-known/openid-configuration',
    //   authorization: { params: { scope: 'openid cpid offline_access' } },
    //   profile(profile) {
    //     console.log(`Riot entire profile: `, profile);
    //     return {
    //       id: profile.sub,
    //       name: profile.name,
    //       email: profile.email,
    //       image: profile.picture,
    //     };
    //   },
    // },
  ],
});
