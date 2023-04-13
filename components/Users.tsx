import React, { useState, useEffect } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import UserCard from "./UserCard";

interface User {
  firstName: string;
  lastName: string;
  image: string;
}

type Users = User[];

const Users = () => {
  const [users, setUsers] = useState<Users>([
    {
      firstName: "",
      lastName: "",
      image: "",
    },
  ]);

  const fetchUsers = async () => {
    const url = "https://dummyjson.com/users";
    const response = await fetch(url);
    const responseJson = await response.json();
    setUsers(responseJson.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="hidden xl:inline fixed top-16 right-0 w-[350px] h-screen p-5 m-2 overflow-y-scroll">
      <div className="w-full p-1 border-b-2 flex items-center justify-between">
        <h3 className="text-gray-500 font-semibold text-xl">Contacts</h3>
        <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-400" />
      </div>

      {/* users */}
      <div className="space-y-2 pt-2">
        {users?.map((user: User, i: number) => (
          <UserCard
            key={i}
            firstName={user.firstName}
            lastName={user.lastName}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
