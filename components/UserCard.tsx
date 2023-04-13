import React from "react";

type User = {
  firstName: string;
  lastName: string;
  image: string;
};

const UserCard = ({ firstName, lastName, image }: User) => {
  return (
    <div className="w-full h-14 rounded-xl hover:bg-gray-200 cursor-pointer p-3 flex items-center space-x-2">
      {/* image */}
      <div className="flex">
        <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
          <img alt="profile" src={image} />
        </div>
        <div className="w-4 h-4 flex items-center justify-center bg-white rounded-full mt-7 -ml-4">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* name */}
      <div>
        <h3 className="font-semibold">
          {firstName} {lastName}
        </h3>
      </div>
    </div>
  );
};

export default UserCard;
