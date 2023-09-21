'use client';
import {
  AiOutlineAccountBook,
  AiOutlineBook,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineSearch,
} from 'react-icons/ai';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type props = {};

export default function NavBar({}: props) {
  const pathname = usePathname();

  return (
    <div className='w-full p-4 pr-0 sm:w-1/6'>
      <div className='sm:mb-8 sm:ml-2'>
        <Link className='font-extrabold' href={'/'}>
          <h2 className='text-center sm:text-start'>Kitaby</h2>
        </Link>
      </div>
      <div className='flex flex-row justify-start sm:flex-col'>
        <Link
          href={'/'}
          className={`mb-2  flex h-14 w-full items-center justify-center p-5 pl-0 text-start sm:justify-start sm:rounded-l-3xl ${
            pathname == '/' ? 'bg-primary' : ''
          }`}
        >
          <AiOutlineHome className='mx-2 fill-base-200 text-2xl' />
          <span className='mx-2 hidden md:block'>Home</span>
        </Link>
        <Link
          href={'/discover'}
          className={`mb-2  flex h-14 w-full items-center justify-center text-start sm:justify-start sm:rounded-l-3xl sm:p-5 sm:pl-0 ${
            pathname == '/discover' ? 'bg-primary' : ''
          }`}
        >
          <AiOutlineSearch className='mx-2 fill-base-200 text-2xl' />
          <span className='mx-2 hidden md:block'>Discover</span>
        </Link>
        <Link
          href={'/categories'}
          className={`mb-2  flex h-14 w-full items-center justify-center p-5 pl-0 text-start sm:justify-start sm:rounded-l-3xl ${
            pathname == '/categories' ? 'bg-primary' : ''
          }`}
        >
          <AiOutlineBook className='mx-2 fill-base-200 text-2xl' />
          <span className='mx-2 hidden md:block'>Categories</span>
        </Link>
        <Link
          href={'/favorites'}
          className={`mb-2  flex h-14 w-full items-center justify-center p-5 pl-0 text-start sm:justify-start sm:rounded-l-3xl ${
            pathname == '/favorites' ? 'bg-primary' : ''
          }`}
        >
          <AiOutlineHeart className='mx-2 fill-base-200 text-2xl' />
          <span className='mx-2 hidden md:block'>Favorites</span>
        </Link>
      </div>
    </div>
  );
}
