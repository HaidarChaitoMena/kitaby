import { Book } from '@/types/Book';

type props = {
  selectedBook: Book;
  featuredBooks: Book[];
};

export default function SideBar({ selectedBook, featuredBooks }: props) {
  return (
    <div className='w-1/4 p-8'>
      <section className='mb-4'>
        <div className='mx-auto rounded-xl bg-primary p-4'>
          <h3 className='text-primary-content'>Details</h3>
          <div className='grid grid-cols-2 gap-2'>
            <div>
              <div className='text-xs text-primary-content'>Language</div>
              <div className='font-bold text-neutral-content'>{selectedBook.language}</div>
            </div>
            <div>
              <div className='text-xs text-primary-content'>Paper Page</div>
              <div className='font-bold text-neutral-content'>{selectedBook.paperPage}</div>
            </div>
            <div>
              <div className='text-xs text-primary-content'>Auther</div>
              <div className='font-bold text-neutral-content'>{selectedBook.auther}</div>
            </div>
            <div>
              <div className='text-xs text-primary-content'>Publish Date</div>
              <div className='font-bold text-neutral-content'>{selectedBook.publishDate}</div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
}
