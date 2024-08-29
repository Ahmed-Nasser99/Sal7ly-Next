import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/Imgs/Logo.png"
          width="30"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="-PvRBDpzOv6C3TyToejrkmpSg-q6TN2J8yo7ofEE2A0"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Arabic" />
        <title>صيانة شارب - خدمات الصيانة الموثوقة لأجهزة شارب في مصر</title>
        <meta
          name="description"
          content="خدمات صيانة موثوقة لجميع أجهزة شارب في مصر. نقدم صيانة للثلاجات والتكييفات والغسالات بأيدي خبراء متخصصين. اتصل بنا على 01102941029."
        />
        <meta
          name="keywords"
          content="صيانة شارب, صيانة ثلاجات شارب, صيانة تكييف شارب, صيانة غسالات شارب, رقم صيانة شارب"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
