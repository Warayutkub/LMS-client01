import type { Metadata } from "next";
import { Geist, Geist_Mono, Niramit, Itim,Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import SideBar from "@/components/SideBar/SideBar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const niramit = Niramit({
  variable: "--font-niramit",
  weight: ["400"], // Ensure weight is passed as an array
  subsets: ["latin"],
});

const itim = Itim({
  variable: "--font-itim",
  weight: ["400"], // Ensure weight is passed as an array
  subsets: ["latin"],
});

const bai_Jamjuree = Bai_Jamjuree({
  variable: "--font-bai_kamjuree",
  weight: ["400"], // Ensure weight is passed as an array
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "SK Totur",
  description: "Sk tutor admin management ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden overflow-y-hidden cursor-default" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/sk_logo.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${niramit.variable} ${itim.variable} antialiased font-bai_jamjuree`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-row">
            <div className="w-2/12 h-fit">
              <SideBar />
            </div>
            <div className="w-full h-screen flex flex-col">
              <Navbar />
              {children}
              <Toaster />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
