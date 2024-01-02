import { Champion, matchUp } from '@/app/lib/definitions';
import { inter } from '@/app/ui/fonts';
import { ArrowRightCircleIcon, RectangleStackIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

type ChampionSubset = Pick<Champion, 'name' | 'icon'>;
interface OverviewProps {
  masteredCards: number;
  completionRate: number;
  toughestMatchups: matchUp[];
  main?: ChampionSubset
}

export default function Overview({
  masteredCards,
  completionRate,
  toughestMatchups,
  main
}: OverviewProps) {
  return (
    <section className={`p-6 ${inter.className} bg-base-100 rounded-lg w-full`}>
      <div className="flex flex-col gap-8">
        {/* Overview Title */}
        <div className="flex items-center justify-start gap-4">
          <div className="w-4 h-8 rounded bg-primary" />
          <h1 className="text-xl font-semibold">{main ? `${main.name} Overview` : "Overview"}</h1>
        </div>
        {main && (
          <div className='w-20 h-20'>
            <Image unoptimized={true} width={80} height={80} src={main.icon} alt={main.name} />
          </div>
        )}
        {/* Cards for Stats Overview */}
        <div className="p-2 rounded-3xl bg-base-300 grid grid-cols-2">
          <div className='rounded-xl p-2 bg-base-100'>
            <div className='flex py-3 pl-3 gap-4 '>
              <div className='avatar placeholder'>
                <div className='w-10 h-10 rounded-full bg-info'>
                  <RectangleStackIcon width={24} height={24} />
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <div className="flex gap-1 items-center">
                  <p className='text-neutral font-semibold text-sm tracking-tight'>Cards Mastered</p>
                  <button className='tooltip' data-tip="Number of cards mastered above a threshold">
                    <InformationCircleIcon width={16} height={16} />
                  </button>
                </div>
                <p className="text-5xl font-semibold tracking-tight">{masteredCards}</p>
              </div>
            </div>
          </div>
          <div className='rounded-xl p-2 bg-base-300'>
            <div className='flex py-3 pl-3 gap-4 grow'>
              <div className='avatar placeholder'>
                <div className='w-10 h-10 rounded-full bg-primary'>
                  <TrophyIcon className='text-white' width={24} height={24} />
                </div>
              </div>
              <div className='flex flex-col gap-1 grow'>
                <div className="flex gap-1 items-center">
                  <p className='text-neutral font-semibold text-sm tracking-tight'>
                    Completion Percentage
                  </p>
                  <button className='tooltip' data-tip="Percentage of total cards completed">
                    <InformationCircleIcon width={16} height={16} />
                  </button>
                </div>
                <p className="text-5xl font-semibold tracking-tight">{completionRate}%</p>
              </div>
            </div>
          </div>
        </div>
        {/* Toughest Matchups */}
        <div className='flex flex-col gap-6'>
          <p className='text-base font-semibold pl-4'>{main ? "Counters" : "Toughest Matchups"}</p>
          <div className='grid grid-cols-5 place-items-center'>
            {toughestMatchups.map((matchup, index) => (
              <div className='flex flex-col gap-3' key={index}>
                <Link href={`/dashboard/champion/${matchup.championName}`}>
                  <div className='avatar placeholder'>
                    <div className='w-20 h-20'>
                      <Image unoptimized={true} width={80} height={80} src={matchup.championIcon} alt={matchup.championName} />
                    </div>
                  </div>
                  <p className='text-center text-xs text-neutral'>{matchup.championName}</p>
                  <p className='text-center text-xs text-neutral'>{matchup.winRate}%</p>
                </Link>
              </div>
            ))
            }
            <Link href="/dashboard/statistics" className="flex flex-col justify-around gap-3">
              <div className="avatar placeholder">
                <div className="w-10 h-10 rounded-full bg-base-300">
                  <ArrowRightCircleIcon width={24} height={24} />
                </div>
              </div>
              <span className='font-bold link link-hover'>More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
