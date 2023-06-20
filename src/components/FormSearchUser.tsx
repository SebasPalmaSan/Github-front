import SearchIcons from "@/components/icons/SearchIcons";

interface Props {
  getUser: (username: string) => Promise<void>;
}

const FormSearchUser = ({getUser} : Props) => {
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    if (!username) return;
    await getUser(username);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 bg-gray-800 p-4 items-center rounded-xl mb-6">
        <span className="min-w-[20px]">
          <SearchIcons  className="fill-sky-500" />
        </span>
        <input 
          name="username"
          type="text" 
          placeholder="Search Github username..." 
          className="h-14 flex-1 rounded-lg bg-transparent p-2 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button className="bg-sky-500 rounded-lg py-4 px-4 text-white font-bold">Search</button>
      </form>
  )
}

export default FormSearchUser
