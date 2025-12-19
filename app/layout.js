import { Inter } from "next/font/google";
import "./globals.css";
import ClientNavbar from "@/components/ClientNavbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FundCup",
  description: "This website is a crowdfunding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
        <SessionWrapper>
          <ClientNavbar />

          <div className="min-h-screen">
            {children}
          </div>

          <Footer />

          {/* ✅ ONLY ONE ToastContainer */}
          <ToastContainer
            position="top-right"
            autoClose={4000}
            theme="light"
          />
        </SessionWrapper>
      </body>
    </html>
  );
}