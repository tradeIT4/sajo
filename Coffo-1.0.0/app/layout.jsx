import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/page-loader";

export const metadata = {
  title: "Sajo Trading PLC",
  description:
    "Sajo Trading PLC is a diversified Ethiopian company exporting premium Arabica coffee and supplying high-quality elevator solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageLoader>
          <Header />
          <main>{children}</main>
          <Footer />
        </PageLoader>
      </body>
    </html>
  );
}
