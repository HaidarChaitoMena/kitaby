import Image from 'next/image';
import Link from 'next/link';

export default function BookCard() {
  return (
    <div className='card card-side mb-4 w-full md:w-[49%]'>
      <figure className='m-0 my-auto h-fit w-60 self-start'>
        <Image height={150} width={150} src={'/static/images/space-book.png'} alt='Movie' />
      </figure>
      <div className='card-body p-0 pl-4'>
        <h2 className='card-title text-neutral-content'>New movie is released!</h2>
        <p className='mb-0 max-w-prose'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, optio assumenda sint
          doloremque placeat
        </p>
        <div className='rating gap-1'>
          <span className='mask mask-heart my-auto h-4 w-4 bg-accent'></span>
          <span className='mask mask-heart my-auto h-4 w-4 bg-accent'></span>
          <span className='mask mask-heart my-auto h-4 w-4 bg-accent'></span>
          <span className='mask mask-heart my-auto h-4 w-4 bg-accent'></span>
          <span className='mask mask-heart my-auto h-4 w-4 bg-accent'></span>
          <span> (20)</span>
        </div>
      </div>
    </div>
  );
}
