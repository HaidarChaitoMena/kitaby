import BookCard from '@/components/home/BookCard';
import Hero from '@/components/home/Hero';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className='h-full min-h-screen w-full rounded-[2rem]  bg-primary p-10 px-6 md:px-14'>
      <SearchBar />
      <Hero />
      <div className='mb-1 flex flex-row justify-between md:px-8'>
        <h3 className='self-center text-base-300 brightness-125'>Categories</h3>
        <div>
          <select className='select select-ghost w-full max-w-xs bg-primary focus:outline-0 active:bg-primary'>
            <option>Newest</option>
            <option>Hot</option>
            <option>Top</option>
          </select>
        </div>
      </div>
      <div className='flex flex-row flex-wrap gap-3 md:px-8'>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </main>
  );
}
