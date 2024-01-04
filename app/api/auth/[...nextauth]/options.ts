import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import TwitchProvider from 'next-auth/providers/twitch';
import FacebookProvider from 'next-auth/providers/facebook';
import { NextAuthConfig } from 'next-auth';

export const options: NextAuthConfig = {
  providers: [
    GoogleProvider({}),
    DiscordProvider({}),
    TwitchProvider({}),
    FacebookProvider({}),
  ],
};
