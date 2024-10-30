"use client";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import 'react-tooltip/dist/react-tooltip.css';
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === '/checkout' || pathname.startsWith('/admin');

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {
          hideHeaderFooter ? (
            <div className="w-full max-w-screen">
              {children}
            </div>
          ) : (
            <>
              <Header />
              {children}
              <FloatingWhatsApp   phoneNumber="+923360398419" accountName="PHRO" statusMessage="Online" chatMessage="Asalam o alekum, how can we help you?" avatar="/logo.svg" />
              <Footer />
            </>
          )
        }
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClicka
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
         /> {/* Moved ToastContainer here to ensure it renders on all pages */}
      </body>
    </html>
  );
}
