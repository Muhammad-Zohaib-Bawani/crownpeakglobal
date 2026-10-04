import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata = {
  title: {
    default: "Crown Peak Global | Digital Solutions for Business Growth",
    template: "%s | Crown Peak Global",
  },
  description:
    "Crown Peak Global is a full-service digital studio: branding, web and app development, content, SEO and paid growth — delivered by one team.",
  openGraph: {
    title: "Crown Peak Global | Digital Solutions for Business Growth",
    description: "Branding, web and app development, content, SEO and paid growth — delivered by one team.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-bold focus:text-black"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="pt-[74px]">
          {children}
        </main>
        <Footer />
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-105"
        >
          <Icon name="whatsapp" size={28} />
        </a>
      </body>
    </html>
  );
}
