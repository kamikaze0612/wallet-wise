import type { Metadata } from "next";
import "ui/styles/globals.css";

export const metadata: Metadata = {
  title: "Wallet Wise",
  description:
    "Wallet Wise is individual finance management application helps you prevent unnecessary spending",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
