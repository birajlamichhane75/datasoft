"use client"
import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "../../components/SessionWrapper";
import Header from "../../components/Header";
import Sidemenu from "../../components/Sidemenu";
import Footer from "../../components/Footer";



export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
 

  return (
    <html lang="en">
      <head>
        <title>Data - Data Dashboard</title>
      </head>
      <body>
        <SessionWrapper>
          <Sidemenu />
          <div className="w-[100%] fixed z-10"><Header /></div>
          <div className="page px-10 pl-28 pt-[9rem]">
            {children}
          </div>
          <div>
            <Footer />
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
