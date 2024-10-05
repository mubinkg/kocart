import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GraphqlProvider from '../graphql/GraphqlProvider'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kocart - Buy product from anywhere.",
  description: "An ecommerce website for bying product from any country.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GraphqlProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </GraphqlProvider>
      </body>
    </html>
  );
}
