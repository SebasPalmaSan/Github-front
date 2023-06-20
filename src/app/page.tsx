"use client"

import FormSearchUser from "@/components/FormSearchUser";
import UserCardInfo from "@/components/UserCardInfo";
import { useState } from "react";
import { User } from "@/interfaces/user";
import { log } from "console";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const getUser =async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    console.log(response);
    if(!response.ok) {
      setUser(null);
      setError('User not found');
      return;
    }
    setUser(await response.json());
    setError(null);
  };

  return (
    <>
      <FormSearchUser getUser={getUser} />
      {user && <UserCardInfo user={user} />}
      {error && (
        <div className="rounded-xl bg-red-500 p-6 text-white">{error}</div>
      )}
    </>
  )
}

export default Home;