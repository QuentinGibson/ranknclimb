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
    <div className="grid max-w-4xl grid-cols-2 gap-10">
      <div className={clsx([{ 'order-2': flip }, `flex flex-col`])}>
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="max-w-xs text-lg">{description}</p>
      </div>
      <div className={clsx([{ 'order-1': flip }, `relative`])}>
        <Image src={image} alt={altText} fill={true} />
      </div>
    </div>
  );
}
