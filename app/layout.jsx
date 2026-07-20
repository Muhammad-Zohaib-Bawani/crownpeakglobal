import "./globals.css";

export const metadata = {
  title: "Crown Peak Global | A Full Service Digital Agency",
  description: "Digital Solutions for Business Growth.",
  icons: { icon: "/favicon.png" },
};

// Original stylesheet order preserved from the source page. Served statically
// from /public so the browser parses the legacy CSS (build never touches it).
const styles = [
  "/asset/css/custom.css",
  "/owl-carousel/owl.carousel.css",
  "/owl-carousel/owl.theme.css",
  "/asset/js/google-code-prettify/prettify.css",
  "https://fonts.googleapis.com/css?family=Lato:300,400,400i,700i,900,900i",
  "/assets/css/style.css",
  "/assets/css/style-web.css",
  "/assets/css/style-responsive.css",
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {styles.map((href) => (
          <link key={href} href={href} rel="stylesheet" />
        ))}
      </head>
      <body className="home-page">{children}</body>
    </html>
  );
}
