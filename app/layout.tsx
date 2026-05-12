import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammed Sinan T P | Digital Marketer & Creative Web Developer",
  description: "I Build Brands, Websites & Digital Systems That Drive Growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.className} bg-[#0d0d0d] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
