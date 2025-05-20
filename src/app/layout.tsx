import type { Metadata } from "next";
import { Poppins, Playfair } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../lib/zustand/themeProvider";

export const metadata: Metadata = {
  title: "Molutions",
  description: "Solutions begin with letter M.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add the weights you want
  variable: "--font-poppins", // Optional: use as CSS variable
  display: "swap",
});

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add the weights you want
  variable: "--font-playfair", // Optional: use as CSS variable
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/src/app/molution-logo.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={` ${playfair.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
