import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/navigation/top-nav";
import Footer from "@/components/section/footer";
import AOSInitializer from "@/components/AOSinitializer";

export const metadata: Metadata = {
  title: "The LEAD Foundation",
  description:
    "Championing literacy as a pathway to self-expression and opportunity. Join our mission to empower communities through reading, writing, and confident communication skills.",
  icons: {
    icon: "/logo.jpg",
  },
  openGraph: {
    title: "The LEAD foundation",
    description:
      "Championing literacy as a pathway to self-expression and opportunity. Join our mission to empower communities through reading, writing, and confident communication skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased bg-white overflow-y-auto overflow-x-clip`}>
        <TopNav />
        <AOSInitializer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
