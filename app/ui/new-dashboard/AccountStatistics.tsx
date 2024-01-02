import { inter } from "@/app/ui/fonts";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface AccountStatisticsProps {
  accountName: string
  winRate: number;
  mainPlayRate: number;
  mainWinRate: number;
  currentRank: string;
}

export default function AccountStatistics({ accountName, winRate, mainPlayRate, mainWinRate, currentRank }: AccountStatisticsProps) {
  return (
    <div className={`bg-base-100 rounded-lg w-full max-w-[350px] ${inter.className}`}>
      <div className="flex flex-col gap-8 p-8">
        <div className="flex gap-4 items-center ">
          <div className="w-4 h-8 bg-info rounded" />
          <p className="text-sm font-semibold ">{accountName}</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex  h-16 items-center justify-between">
            <div className="h-16 w-16 bg-primary rounded flex justify-center items-center">
              <ArrowTrendingUpIcon width={24} height={24} className="-rotate-12 text-white" />
            </div>
            <p className="font-semibold text-sm">Win Rate</p>
            <p className="font-semibold">{winRate}%</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex  h-16 items-center justify-between">
            <div className="h-16 w-16 bg-primary rounded flex justify-center items-center">
              <Image unoptimized={true} src="/league-blank-icon.png" width={24} height={24} className="rotate-[15]" alt="League of Legend's L in a circle" />
            </div>
            <p className="font-semibold text-sm">Main Play Rate</p>
            <p className="font-semibold">{mainPlayRate}%</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex  h-16 items-center justify-between">
            <div className="h-16 w-16 bg-primary rounded flex justify-center items-center">
              <ArrowTrendingUpIcon width={24} height={24} className="-rotate-12 text-white" />
            </div>
            <p className="font-semibold text-sm">Main Win Rate</p>
            <p className="font-semibold">{mainWinRate}%</p>
          </div>
        </div>
        <div className="flex  h-16 items-center justify-between">
          <div className="h-16 w-16 bg-primary rounded flex justify-center items-center">
            <Image src="/rank/challenger-icon.png" alt="League of Legends challenger rank icon" width={48} height={48} className="" />
          </div>
          <p className="font-semibold text-sm">Current Rank</p>
          <Image fill={true} alt="Your current rank" src={currentRank} />
        </div>
      </div>
    </div>
  )
}