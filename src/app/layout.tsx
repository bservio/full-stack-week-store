import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { AuthProvider } from "../providers/auth";
import Footer from "@/components/ui/footer";
import CartContextProvider from "../providers/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <CartContextProvider>
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </CartContextProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
