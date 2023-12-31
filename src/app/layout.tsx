import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/utility/Navigation";
import Footer from "./components/utility/Footer";
import GoogleTranslate from "../GoogleTranslate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Support Palestine",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-[90px]">{children}</div>
        <Footer />
        <script
          src="//code.tidio.co/hhqgzbeuldkevhznpknxpgf5bs8y3mfy.js"
          async
        ></script>
      </body>
    </html>
  );
}
