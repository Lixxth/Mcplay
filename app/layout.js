import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  ...getSEOTags(),
  icons: {
    icon: "/icon-192x192.png",
    apple: "/icon-192x192.png",
  },
  manifest: "/manifest.json",
  themeColor: "#FFE062",
  description: "McPlay & Talk 🎮🗣️🍟",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      <head>
        {/* Esto se inyectará correctamente por Next, pero Plausible requiere estar manualmente en <head> */}
        {config.domainName && <PlausibleProvider domain={config.domainName} />}
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
