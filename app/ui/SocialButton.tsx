import Image from 'next/image';

interface SocialButtonProps {
  image: string;
  altText: string;
  brand: string;
}

export default function SocialButton({
  image,
  altText,
  brand,
}: SocialButtonProps) {
  return (
    <button className="flex items-center justify-between btn btn-outline">
      <Image alt={altText} src={image} width={24} height={24} />
      <p className="text-xs font-bold leading-normal md:text-base">{brand}</p>
    </button>
  );
}
