import "./globals.css";

export const metadata = {
  title: "CrownPeak Global — Software Agency",
  description:
    "CrownPeak Global builds high-performance web, mobile, cloud and AI products for ambitious teams worldwide.",
  keywords: ["software agency", "web development", "mobile apps", "cloud", "AI", "CrownPeak Global"],
  openGraph: {
    title: "CrownPeak Global — Software Agency",
    description: "We design & engineer products that scale.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
