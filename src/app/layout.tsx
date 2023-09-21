import NavBar from '@/components/NavBar';
import '../../public/static/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SideBar from '@/components/SideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kitaby',
  description: 'Online book store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} prose flex max-w-none flex-col prose-headings:m-0 prose-a:no-underline sm:flex-row`}
      >
        <NavBar />
        {children}
        <SideBar />
      </body>
    </html>
  );
}
