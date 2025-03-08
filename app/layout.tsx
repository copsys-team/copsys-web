import type { Metadata } from "next";
import { Poppins, Roboto, Montserrat } from "next/font/google";
import "./globals.css";

/* Load Fonts */
const poppins = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const montserrat = Montserrat({
  variable: "--font-tertiary",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "CopSys",
  description: "COPSYS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${montserrat.variable} antialiased bg-background text-text`}
      >
        {children}
      </body>
    </html>
  );
}
