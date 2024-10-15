import "../globals.scss";
import "./layout.scss";
import { ReactNode } from "react";
import AboutArchiveContactHeader from "@/components/about-archive-contact-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <div className="container">
          <AboutArchiveContactHeader />
          <main className="main">{children}</main>
        </div>
        <div id="portal" />
        <div id="artworkPortal" />
      </body>
    </html>
  );
}
