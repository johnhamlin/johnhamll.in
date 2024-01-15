import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ActiveSectionContextProvider from '@/context/ActiveSectionContextProvider';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "John Hamlin's Portfolio",
  description: 'John Hamlin is a full-stack developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} sm:pt-38 relative bg-gray-50 pt-28 text-gray-950`}
      >
        {/* Display two subtle pops of color to the top of the page to add some visual interest */}
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="xl:left=[-15rem] absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] 2xl:left-[-5rem] "></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleTagManager gtmId="G-ZBSG8Z4YBH" />
    </html>
  );
}
