import type { Metadata } from "next";
import { Pirata_One, Oswald, Golos_Text } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

// Дисплей/логотип — готический blackletter (только латиница).
const display = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--ff-display",
  display: "swap",
});

// Заголовки/навигация — узкий гротеск (латиница + кириллица).
const head = Oswald({
  subsets: ["latin", "cyrillic"],
  variable: "--ff-head",
  display: "swap",
});

// Текст/UI — гротеск с нативной кириллицей.
const sans = Golos_Text({
  subsets: ["latin", "cyrillic"],
  variable: "--ff-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Softi — кастомні oversize-футболки",
    template: "%s · Softi",
  },
  description:
    "Softi — кастомні oversize-футболки: washed black, vintage, арт-принти. Кожна річ унікальна. Замовлення в Direct.",
  openGraph: {
    title: "Softi",
    description: "Кастомні oversize-футболки. Кожна річ унікальна.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="uk"
      className={`${display.variable} ${head.variable} ${sans.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <AnnouncementBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
