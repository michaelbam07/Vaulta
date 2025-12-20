import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { NotificationProvider } from "@/context/NotificationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vaulta Bank",
  description: "Modern Digital banking platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <a
        href="#main"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-white dark:bg-zinc-900 px-3 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50  antialiased`}
      >
        <ThemeProvider>
          <AuthProvider>
            <NotificationProvider>
              <main id="main" role="main">
                {children}
              </main>
            </NotificationProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
