import { Champion, matchUp } from '@/app/lib/definitions';
import { inter } from '@/app/ui/fonts';
import {
  ArrowRightCircleIcon,
  RectangleStackIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

type ChampionSubset = Pick<Champion, 'name' | 'icon'>;
interface OverviewProps {
  masteredCards: number;
  completionRate: number;
  toughestMatchups: matchUp[];
  main?: ChampionSubset;
}

export default function Overview({
  masteredCards,
  completionRate,
  toughestMatchups,
  main,
}: OverviewProps) {
  return (
    <section className={`p-6 ${inter.className} w-full rounded-lg bg-base-100`}>
      <div className="flex flex-col gap-8">
        {/* Overview Title */}
        <div className="flex items-center justify-start gap-4">
          <div className="h-8 w-4 rounded bg-primary" />
          <h1 className="text-xl font-semibold">
            {main ? `${main.name} Overview` : 'Overview'}
          </h1>
        </div>
        {main && (
          <div className="h-20 w-20">
            <Image
              unoptimized={true}
              width={80}
              height={80}
              src={main.icon}
              alt={main.name}
            />
          </div>
        )}
        {/* Cards for Stats Overview */}
        <div className="grid grid-rows-2 rounded-3xl bg-base-300 p-2 md:grid-cols-2 md:grid-rows-none">
          <div className="rounded-xl bg-base-100 p-2">
            <div className="flex gap-2 py-3 pl-1 md:gap-4 md:pl-3 ">
              <div className="avatar placeholder">
                <div className="h-10 w-10 rounded-full bg-info">
                  <RectangleStackIcon width={24} height={24} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <p className="text-sm font-semibold tracking-tight text-neutral">
                    Cards Mastered
                  </p>
                  <button
                    className="tooltip hidden md:block"
                    data-tip="Number of cards mastered above a threshold"
                  >
                    <InformationCircleIcon width={16} height={16} />
                  </button>
                </div>
                <p className="text-5xl font-semibold tracking-tight">
                  {masteredCards}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-base-300 p-2">
            <div className="flex grow gap-1 py-1 pl-1 md:gap-4 md:py-3 md:pl-3">
              <div className="avatar placeholder">
                <div className="h-10 w-10 rounded-full bg-primary">
                  <TrophyIcon className="text-white" width={24} height={24} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <p className="text-sm font-semibold tracking-tight text-neutral">
                    Completion
                  </p>
                  <button
                    className="tooltip hidden md:block"
                    data-tip="Percentage of total cards completed"
                  >
                    <InformationCircleIcon width={16} height={16} />
                  </button>
                </div>
                <p className="text-5xl font-semibold tracking-tight">
                  {completionRate}%
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Toughest Matchups */}
        <div className="flex flex-col gap-6">
          <p className="pl-4 text-base font-semibold">
            {main ? 'Counters' : 'Toughest Matchups'}
          </p>
          <div className="grid place-items-center md:grid-cols-5">
            {toughestMatchups.map((matchup, index) => (
              <div className="flex flex-col gap-3" key={index}>
                <Link href={`/dashboard/champion/${matchup.championName}`}>
                  <div className="avatar placeholder">
                    <div className="h-20 w-20">
                      <Image
                        unoptimized={true}
                        width={80}
                        height={80}
                        src={matchup.championIcon}
                        alt={matchup.championName}
                      />
                    </div>
                  </div>
                  <p className="text-center text-xs font-semibold text-neutral">
                    {matchup.championName}
                  </p>
                  <p className="text-center text-xs text-neutral">
                    {matchup.winRate}%
                  </p>
                </Link>
              </div>
            ))}
            <Link
              href="/dashboard/statistics"
              className="flex flex-col justify-around gap-3"
            >
              <div className="avatar placeholder">
                <div className="h-10 w-10 rounded-full bg-base-300">
                  <ArrowRightCircleIcon width={24} height={24} />
                </div>
              </div>
              <span className="link-hover link font-bold">More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
