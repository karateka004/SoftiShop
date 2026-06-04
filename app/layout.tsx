import type { Metadata } from "next";
import { Pirata_One, Oswald, Golos_Text } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { CartProvider } from "@/components/cart/cart-context";
import { CartDrawer } from "@/components/cart/cart-drawer";

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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Softi — кастомні oversize-футболки",
    template: "%s · Softi",
  },
  description:
    "Softi — кастомні oversize-футболки: washed black, vintage, арт-принти. Кожна річ унікальна. Замовлення в Direct.",
  openGraph: {
    title: "Softi — кастомні oversize-футболки",
    description: "Кастомні oversize-футболки. Кожна річ унікальна.",
    type: "website",
    locale: "uk_UA",
    siteName: "Softi",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Softi — кастомні oversize-футболки",
    description: "Кастомні oversize-футболки. Кожна річ унікальна.",
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
        <CartProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:font-head focus:text-sm focus:uppercase focus:tracking-wide focus:text-bone"
          >
            До основного вмісту
          </a>
          <AnnouncementBar />
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
