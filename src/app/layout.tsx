import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import NavigationBar from "./components/NavigationBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationBar/>
        {children}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
