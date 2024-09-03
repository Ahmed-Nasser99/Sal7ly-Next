import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html ml lang="en">
      <Head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}