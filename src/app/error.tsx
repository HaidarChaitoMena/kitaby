'use client' // Error components must be Client Components
 
import Image from 'next/image'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
       <main className='h-full text-center flex flex-col justify-center align-middle min-h-screen w-full rounded-[2rem]  bg-primary p-10 px-6 md:px-14'>
       <div className='text-error text-8xl'>500</div>
       <Image className='mx-auto h-24' width={130} height={150} alt='404' src={'/static/images/404.png'}  />
       <div className='text-3xl text-error'>A Dog Ate this Page</div>
       <div className='max-w-lg mx-auto'>
 Your dog is cute but honestly a menace. Where are my shoes? Where is my graduation certificate? Where is the chocolate cake I baked for my Aunt’s birthday? And why did you take your dog to the vet on that same Thursday?!</div>
 <button className='btn btn-secondary max-w-sm mx-auto'
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
     </main>
  )
}