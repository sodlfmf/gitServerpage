import "../globals.scss";
import "./layout.scss";
import { ReactNode } from "react";
import MainHeader from "@/components/main-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <div className="container">
          <MainHeader />
          <main className="main">{children}</main>
        </div>
        <div id="portal" />
      </body>
    </html>
  );
}
