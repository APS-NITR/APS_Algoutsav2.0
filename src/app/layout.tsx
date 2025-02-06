
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import Bg from "@/components/nupur/background";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ` } >
       <Bg/>   
    <div className="">{children}</div>
      </body>
    </html>
  );
}
//