import {
  UserIcon,
  UsersIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  ClockIcon,
  PlayIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid";
const Sidebar = () => {
  return (
    <div className="hidden xl:inline fixed top-16 left-0 w-[350px] h-screen p-5 m-2">
      <div className="space-y-5">
        {/* card */}
        <div className="flex items-center space-x-5 cursor-pointer transition transform ease-in duration-100 hover:bg-gray-200 p-2 rounded-xl">
          <div className="w-8 h-8 text-blue-500">
            <UserIcon />
          </div>
          <h3 className="font-semibold text-lg">Dante Grippaldi</h3>
        </div>

        <div className="flex items-center space-x-5 cursor-not-allowed transition transform ease-in duration-100 hover:bg-gray-200 p-2 rounded-xl">
          <div className="w-8 h-8 text-blue-500">
            <UsersIcon />
          </div>
          <h3 className="text-lg">Friends</h3>
        </div>

        <div className="flex items-center space-x-5 cursor-not-allowed transition transform ease-in duration-100 hover:bg-gray-200 p-2 rounded-xl">
          <div className="w-8 h-8 text-blue-500">
            <ClockIcon />
          </div>
          <h3 className="text-lg">Most Recent</h3>
        </div>

        <div className="flex items-center space-x-5 cursor-not-allowed transition transform ease-in duration-100 hover:bg-gray-200 p-2 rounded-xl">
          <div className="w-8 h-8 text-blue-500">
            <UserGroupIcon />
          </div>
          <h3 className="text-lg">Groups</h3>
        </div>

        <div className="flex items-center space-x-5 cursor-not-allowed transition transform ease-in duration-100 hover:bg-gray-200 p-2 rounded-xl">
          <div className="w-8 h-8 text-blue-400">
            <BuildingStorefrontIcon />
          </div>
          <h3 className=" text-lg">Marketplace</h3>
        </div>

        <div className="flex items-center space-x-5 cursor-not-allowed transition transform ease-in duration-100 hover:bg-gray-200 p-2 rounded-xl">
          <div className="w-8 h-8 text-red-500">
            <PlayIcon />
          </div>
          <h3 className="text-lg">Watch</h3>
        </div>

        <div className="flex items-center space-x-5 cursor-not-allowed transition transform ease-in duration-100 hover:bg-gray-200 p-2 rounded-xl">
          <div className="w-8 h-8 text-purple-500">
            <BookmarkIcon />
          </div>
          <h3 className="text-lg">Saved</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
