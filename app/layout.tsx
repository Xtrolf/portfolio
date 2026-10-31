import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Adi Singh — Building Xtrosys",
  description: "Adi Singh is building Xtrosys, an independent technology venture focused on useful digital products, software and interactive experiences.",
  metadataBase: new URL("https://adi-singh-portfolio.vercel.app"),
  openGraph: { title: "Adi Singh — Building Xtrosys", description: "Building useful digital products and experiences under Xtrosys.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}
