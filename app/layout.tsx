import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Abdul Rozaq",
  description:
    "Frontend-Focused Full Stack Developer yang membangun aplikasi web modern dan scalable.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}