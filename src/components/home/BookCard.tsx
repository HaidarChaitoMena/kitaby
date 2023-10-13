'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

type props = {
  id: number;
  label: string;
  description: string;
  rating: number;
  ratingCount: number;
  image: string;
};

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: { opacity: 0 },
};
export default function BookCard({ id, label, description, image, rating, ratingCount }: props) {
  return (
    <motion.div
      variants={variants}
      custom={id}
      animate='visible'
      initial='hidden'
      className='card card-side mb-4 w-full md:w-[49%]'
    >
      <figure className='m-0 my-auto w-60 self-start'>
        <Image height={150} width={150} src={'/static/images/space-book.png'} alt='Movie' />
      </figure>
      <div className='card-body p-0 pl-4'>
        <h2 className='card-title text-neutral-content'>{label}</h2>
        <p className='mb-0 max-w-prose'>{description}</p>
        <div className='rating gap-1'>
          {Array.from(Array(5).keys()).map((i) => {
            return (
              <span
                key={i}
                className={`mask mask-heart my-auto h-4 w-4 ${
                  i < rating ? 'bg-accent' : 'bg-accent-content'
                }`}
              ></span>
            );
          })}
          <span> ({ratingCount})</span>
        </div>
      </div>
    </motion.div>
  );
}
