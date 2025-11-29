import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "3A-AI | حلول تقنية متكاملة",
  description: "نقدم حلول الذكاء الاصطناعي، تطوير البرمجيات، وتجارب المستخدم الحديثة.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} font-cairo bg-black text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
