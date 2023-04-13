import React, { useState, useEffect } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import UserCard from "./UserCard";
const Users = () => {
  const [users, setUsers] = useState({});
  const fakeList = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchUsers = async () => {
    const url = "https://dummyjson.com/users";
    const response = await fetch(url);
    const responseJson = await response.json();
    setUsers(responseJson);
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
        {users?.users?.map((user: any, i: number) => (
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
