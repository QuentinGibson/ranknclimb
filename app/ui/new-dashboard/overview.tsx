import { matchUp } from '@/app/lib/definitions';
import { inter } from '@/app/ui/fonts';

interface OverviewProps {
  masteredCards: number;
  completionRate: number;
  toughestMatchups: matchUp[];
}

export default function Overview({
  masteredCards,
  completionRate,
  toughestMatchups,
}: OverviewProps) {
  return (
    <section className={`p-3 ${inter.className}`}>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-start gap-4">
          <div className="w-4 h-8 rounded bg-secondary" />
          <h1 className="text-base font-bold">Overview</h1>
        </div>
      </div>
    </section>
  );
}
