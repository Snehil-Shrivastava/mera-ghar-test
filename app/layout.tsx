import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-openSans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mera Ghar",
  description:
    "Mera Ghar specialises in providing cutomized home interior solutions including wardrobes, kitchens, doors and windows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${openSans.variable} antialiased relative`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
