import Hero from '@/components/home/Hero';
import SearchBar from '@/components/home/SearchBar';

export default function Home() {
  return (
    <main className='h-full min-h-screen w-full rounded-[2rem]  bg-primary p-10 px-6 md:px-14'>
      <SearchBar />
      <Hero />
    </main>
  );
}
