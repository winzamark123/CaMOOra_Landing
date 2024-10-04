import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ui/theme-provider';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'CaMOOra',
  description: 'Student Photoshoot Marketplace',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className="flex flex-col items-center justify-center overflow-x-hidden">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
