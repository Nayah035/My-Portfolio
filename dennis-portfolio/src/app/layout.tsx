import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dennis Muiruri Mbugua | Cybersecurity Professional · Web Developer · Designer",
  description:
    "Certified Cybersecurity Professional and Full-Stack Web Developer. React, Node.js, Express, MongoDB, Security in Depth. Projects: Smart Water Billing, POS, more.",
  keywords: [
    "Dennis Muiruri Mbugua",
    "Cybersecurity",
    "Web Developer",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Penetration Testing",
    "Vulnerability Assessment",
  ],
  authors: [{ name: "Dennis Muiruri Mbugua" }],
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Dennis Muiruri Mbugua | Portfolio",
    description:
      "Cybersecurity Professional · Web Developer · Designer. Secure systems, modern web apps, and security-first solutions.",
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dennis Muiruri Mbugua | Portfolio",
    description:
      "Cybersecurity Professional · Web Developer · Designer. Secure systems, modern web apps, and security-first solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
