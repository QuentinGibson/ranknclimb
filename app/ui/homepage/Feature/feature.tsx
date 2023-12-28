import Image from 'next/image';
import clsx from 'clsx';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  altText: string;
  flip?: boolean;
}

export function Feature({
  title,
  description,
  image,
  altText,
  flip = false,
}: FeatureProps) {
  return (
    <div className="grid max-w-6xl gap-10 md:grid-cols-2 ">
      <div className={clsx([{ 'md:order-2': flip }, `flex flex-col`])}>
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="max-w-xs text-lg">{description}</p>
      </div>
      <div className={clsx([{ 'md:order-1': flip }, `relative h-40`])}>
        <Image src={image} alt={altText} fill={true} />
      </div>
    </div>
  );
}
