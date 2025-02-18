import "./globals.css";
import {Header} from "../src/components/header/index";
import SessionProvider from "../src/components/session/SessionProvider";
import { Session } from "next-auth";

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <Header/>
        </SessionProvider>
        {children}
      </body>
    </html>
  );
}
