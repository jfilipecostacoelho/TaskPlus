import "./globals.css";
import {Header} from "../src/components/header/index"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <>
          <Header/>
        </>
        {children}
      </body>
    </html>
  );
}
