import { NextAuthProvider } from "@/providers/auth";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "../components/header";
import Footer from "@/components/Footer";
import ToastProvider from "@/providers/toast";
import { ThemeProvider } from "./theme-provider";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "WanderWise",
  description: "Sistema de Reserva de Viagens",
  favicon: '/favicon.ico',
};

export default function RootLayout({children}: { children: React.ReactNode}) {
  return (
      <html lang="en">
        <body className={poppins.className}>
          <NextAuthProvider>
            <ToastProvider>
              <ThemeProvider attribute="class" >
              <div className="flex flex-col h-screen">
                <div className="h-[94px]">
                  <Header />
                </div>
                <div className="flex-1">
                  {children}
                </div>
              <Footer />
              </div>
              </ThemeProvider>
            </ToastProvider>
          </NextAuthProvider>
        </body>
      </html>
    
  )
}