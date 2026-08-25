import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "EU Health Platform",
  description: "A modern EU healthcare system."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: "80vh", padding: "20px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
