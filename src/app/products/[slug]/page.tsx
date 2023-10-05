import SearchBar from "@/components/SearchBar";

type props ={
    params:{slug:string}
}

export default function Products({ params }:props) {
    return <main className='h-full min-h-screen w-full rounded-[2rem]  bg-primary p-10'>
        <SearchBar />
        {params.slug}
        </main>;
  }
  