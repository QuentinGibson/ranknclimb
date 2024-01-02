import { inter } from '@/app/ui/fonts';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

interface AccountStatisticsProps {
  accountName: string;
  winRate: number;
  mainPlayRate: number;
  mainWinRate: number;
  currentRank: string;
}

interface StatRowProps {
  icon: React.ReactNode;
  label: string;
  value: string | React.ReactNode;
}

function StatRow({ icon, label, value }: StatRowProps) {
  return (
    <div className="grid h-16 grid-cols-[1fr_2fr_1fr] items-center justify-between">
      <div className="flex h-10 w-10 items-center justify-center rounded bg-primary md:h-16 md:w-16">
        {icon}
      </div>
      <p className="text-sm font-semibold">{label}</p>
      <p className="place-self-end self-center font-semibold">{value}</p>
    </div>
  );
}

export default function AccountStatistics({
  accountName,
  winRate,
  mainPlayRate,
  mainWinRate,
  currentRank,
}: AccountStatisticsProps) {
  return (
    <div
      className={`w-full max-w-[350px] rounded-lg bg-base-100 ${inter.className}`}
    >
      <div className="flex flex-col gap-8 p-8">
        <div className="flex items-center gap-4 ">
          <div className="h-8 w-4 rounded bg-info" />
          <p className="text-sm font-semibold ">{accountName}</p>
        </div>
        <StatRow
          icon={
            <ArrowTrendingUpIcon
              width={24}
              height={24}
              className="-rotate-12 text-white"
            />
          }
          label="Win Rate"
          value={`${winRate}%`}
        />

        <StatRow
          icon={
            <Image
              unoptimized
              src="/league-blank-icon.png"
              width={24}
              height={24}
              className="rotate-[15]"
              alt="League of Legend's L in a circle"
            />
          }
          label="Main Play Rate"
          value={`${mainPlayRate}%`}
        />

        <StatRow
          icon={
            <ArrowTrendingUpIcon
              width={24}
              height={24}
              className="-rotate-12 text-white"
            />
          }
          label="Main Win Rate"
          value={`${mainWinRate}%`}
        />

        <StatRow
          icon={
            <Image
              unoptimized
              src="/rank/challenger-icon.png"
              alt="League of Legends challenger rank icon"
              width={48}
              height={48}
              className=""
            />
          }
          label="Current Rank"
          value={
            <Image
              src={currentRank}
              width={48}
              height={48}
              unoptimized
              alt={'Your current rank'}
            />
          }
        />
      </div>
    </div>
  );
}
