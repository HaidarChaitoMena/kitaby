import NavBar from '@/components/NavBar';
import '../../public/static/styles/globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import SideBar from '@/components/SideBar';
import SearchBar from '@/components/SearchBar';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kitaby',
  description: 'Online book store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${nunito.className} prose flex max-w-none flex-col prose-headings:m-0 prose-a:no-underline md:flex-row`}
      >
        <NavBar />
        <main className='h-full min-h-screen w-full rounded-[2rem]  bg-primary p-10 px-6 md:px-14'>
          <SearchBar />
          {children}
        </main>
        <SideBar />
      </body>
    </html>
  );
}
