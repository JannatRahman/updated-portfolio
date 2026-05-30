
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Amila Rahman — Web Developer Portfolio",
  description: "Portfolio of Jannat Amila Rahman, web developer building modern, interactive web experiences with React, Next.js, and JavaScript ES6, ExpressJs.",
  openGraph: {
    title: "Amila Rahman — Web Developer",
    description: "Modern, animated portfolio of a full web developer.",
    type: "website",
  },
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
