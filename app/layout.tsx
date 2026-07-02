import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Mizan — AI Legal Practice Management",
  description:
    "AI-native, bilingual (EN/AR) legal practice management for the UAE, GCC and Middle East.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <LanguageProvider>
          <Shell>{children}</Shell>
        </LanguageProvider>
      </body>
    </html>
  );
}
