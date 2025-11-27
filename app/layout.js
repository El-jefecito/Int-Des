import { Bricolage_Grotesque, Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "InteriorDeco",
  description: "InteriorDeco Properties Listing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${jost.variable} ${bricolage.variable}`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
