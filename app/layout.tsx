import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChatProvider } from "@/components/chat-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Autoelektrika Berdik | Dijagnostika i autoelektrika — Velika Gorica",
  description:
    "Precizna autoelektrika i dijagnostika u Velikoj Gorici. Ne nagađamo — dijagnosticiramo. Digitalni pomoćnik prima upit dok je majstor fokusiran na vozilo.",
  keywords: [
    "autoelektrika",
    "autodijagnostika",
    "Velika Gorica",
    "anlaser",
    "alternator",
    "auto elektrika",
  ],
  openGraph: {
    title: "Autoelektrika Berdik — Velika Gorica",
    description:
      "Precizna autoelektrika i dijagnostika. Servis po dogovoru.",
    locale: "hr_HR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-graphite text-foreground">
        <ChatProvider>{children}</ChatProvider>
      </body>
    </html>
  );
}
