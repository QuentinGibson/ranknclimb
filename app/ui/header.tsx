import Image from 'next/image';
import Link from 'next/link';
interface NavigationButtonProps {
  text: string;
  link: string;
}
function NavigationButton({ text, link }: NavigationButtonProps) {
  return (
    <Link className="flex bg-blue-600 p-4" href={link}>
      {text}
    </Link>
  );
}
export default function Header() {
  const navigationButtons = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
  ];
  return (
    <header>
      <div className="flex">
        <div className="flex">
          <h1 className="hidden">RankNClimb</h1>
          <Image
            src="/placeholder-logo.png"
            alt="Our logo with the brand's name"
            width={150}
            height={100}
          />
        </div>
        <div>
          <ul className="flex gap-4">
            {navigationButtons.map((button, key) => (
              <li key={key}>
                <NavigationButton text={button.text} link={button.link} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex">
          <Link href="login">Sign In</Link>
          <Link href="signup">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}
