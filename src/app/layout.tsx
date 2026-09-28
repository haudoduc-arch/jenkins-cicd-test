import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jenkins CI/CD Lab",
  description: "A small Next.js application for testing a Jenkins pipeline.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <SiteHeader />
        {children}
        <footer>Built with Next.js, pnpm and Jenkins.</footer>
      </body>
    </html>
  );
}
