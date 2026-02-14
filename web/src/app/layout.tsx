// app/layout.tsx
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

export const metadata = {
  title: "Lawnsly",
  description: "A better way to care for your lawn.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-neutral-background font-body text-neutral-text-primary">
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
