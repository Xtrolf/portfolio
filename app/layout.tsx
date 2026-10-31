import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Adi Singh — Digital Architect & Developer",
  description: "Adi Singh builds thoughtful digital products, modern web experiences and AI-powered tools.",
  metadataBase: new URL("https://adi-singh-portfolio.vercel.app"),
  openGraph: { title: "Adi Singh — Digital Architect", description: "Ideas engineered into digital experiences.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}
