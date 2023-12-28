import Image from 'next/image';
import clsx from 'clsx';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  altText: string;
  flip?: boolean;
}

export function Feature({ title, description, image, altText, flip = false }: FeatureProps) {
  return (
    <div className="grid grid-cols-2">
      <div className={clsx([{ 'order-2': flip }, `flex flex-col`])}>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      <div className={clsx([{ "order-1": flip }])}>
        <Image src={image} alt={altText} width={100} height={100} />
      </div>
    </div>
  )
}