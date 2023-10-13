import BookCard from '@/components/home/BookCard';
import Hero from '@/components/home/Hero';

export default function Home() {
  return (
    <>
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
        <BookCard
          label='test'
          rating={3}
          id={0}
          description='test'
          ratingCount={10}
          image='space-book.png'
        />
        <BookCard
          label='test'
          rating={2}
          id={1}
          description='test'
          ratingCount={3}
          image='space-book.png'
        />
      </div>
    </>
  );
}
