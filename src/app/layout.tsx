import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "naruto storm",
  description:
    "Our site is your go-to hub for all things Naruto! Dive into the world of ninja, from Shippuden to Boruto, with exclusive content on Kakashi, Sasuke, Pain, Obito, and more. Explore detailed guides, movie insights, and the pixel-based Naruto role-playing game (RPG). Whether you prefer classic Naruto adventures or a modern RPG experience, we have all the ninja info you need!",
  keywords:
    "ninja,naruto,shippuden,pixel,Role-Playing Game,RPG,Turn-Based Strategy,Kakashi,Sasuke,Uchiha Itachi,Card Game,CAG,boruto,Jiraiya,Tsunade,Namikaze Minato,Gaara,Orochimaru,Payne,Obito，Naruto: Ultimate Ninja Storm，",
};

import { Providers } from "./providers";
import { fonts } from "./fonts";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          <Header />
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
