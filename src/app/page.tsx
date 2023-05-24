import SearchIcons from "@/components/icons/SearchIcons";

const Home = () => {
  return (
    <>
      <form className="flex flex-wrap gap-2 bg-blue-900 p-2 items-center rounded-xl">
        <span className="min-w-[20px]">
          <SearchIcons  className="fill-sky-500" />
        </span>
        <input 
          type="text" 
          placeholder="Search Github username..." 
          className="h-14 flex-1 rounded-lg bg-transparent p-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button className="bg-sky-500 rounded-lg py-4 px-4 text-white font-bold">Search</button>
      </form>
      <article>bla bla bla</article>
    </>
  )
}

export default Home