import type { Metadata } from 'next'
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ToasterProvider from "@/components/providers/ToasterProvider";
import SocketProvider from "@/components/providers/SocketProvider";
import ModalProvider from "@/components/providers/ModalProvider";

const fonts = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fonts.className, "bg-white bg-[##262E35]")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="dosti-theme"
        >
          <ToasterProvider />
          <SocketProvider>
            <ModalProvider />
            {children}
          </SocketProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
