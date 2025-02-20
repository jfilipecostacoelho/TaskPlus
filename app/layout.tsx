"use client";
import "./globals.css";
import { Header } from "../src/components/header/index";
import SessionProvider from "../src/components/session/SessionProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
