import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/app/components/Footer";
import NavigationBar from "@/app/components/NavigationBar";

import "@/global.css";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-[#0d0c11] text-white">
        <body>
          <NavigationBar />
          <main>{children}</main>
          {modal}
          <Footer />
          <div id="modal-root"></div>
        </body>
        <PrismicPreview repositoryName={repositoryName} />
      </html>
    </ClerkProvider>
  );
}
