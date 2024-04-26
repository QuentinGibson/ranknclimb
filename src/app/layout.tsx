import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { ClerkProvider } from "@clerk/nextjs";
import NavigationBar from "./components/NavigationBar";

import "@/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-[#0d0c11] text-white">
        <body>
          <NavigationBar />
          {children}
        </body>
        <PrismicPreview repositoryName={repositoryName} />
      </html>
    </ClerkProvider>
  );
}
