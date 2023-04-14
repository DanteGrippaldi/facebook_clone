import Image from "next/image";
import { facebook_clone } from "../assets/index";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  PlayIcon,
  UserCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

import { Bars3Icon, InboxIcon, BellIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-14 p-2 pl-4 bg-white shadow-md justify-between">
      {/* left */}
      <div className="flex items-center space-x-2">
        {/* logo */}
        <div className="relative h-10 w-10">
          <Image alt="logo" src={facebook_clone} objectFit="contain" fill />
        </div>
        {/* input */}
        <div className="flex items-center p-4 lg:p-0 lg:pl-2 bg-gray-100 rounded-full">
          <MagnifyingGlassIcon className="w-4 h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search facebook"
            className="hidden lg:inline p-2 outline-none bg-transparent placeholder:text-gray-600"
          />
        </div>
        <div className="md:hidden cursor-pointer">
          <Bars3Icon className="h-6 w-6" />
        </div>
      </div>

      {/* middle */}
      <div className="hidden lg:inline-flex items-center space-x-12">
        <div className="hover:bg-gray-200 py-1 px-3 rounded-lg cursor-pointer">
          <HomeIcon className="h-8 w-8 text-gray-400 flex-shrink-0" />
        </div>
        <div className="hover:bg-gray-200 py-1 px-3 rounded-lg cursor-not-allowed">
          <PlayIcon className="h-8 w-8 text-gray-400 flex-shrink-0" />
        </div>
        <div className="hover:bg-gray-200 py-1 px-3 rounded-lg cursor-not-allowed">
          <BuildingStorefrontIcon className="h-8 w-8 text-gray-400 flex-shrink-0" />
        </div>
        <div className="hover:bg-gray-200 py-1 px-3 rounded-lg cursor-not-allowed">
          <UserGroupIcon className="h-8 w-8 text-gray-400 flex-shrink-0" />
        </div>
      </div>

      {/* right */}
      <div className="hidden lg:inline-flex items-center space-x-5 pr-5">
        <div className="md:hidden bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300">
          <PlusIcon className="h-6 w-6" />
        </div>
        <div className="hidden md:inline bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300">
          <Bars3Icon className="h-6 w-6" />
        </div>

        <div className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300">
          <InboxIcon className="h-6 w-6" />
        </div>

        <div className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300">
          <BellIcon className="h-6 w-6" />
        </div>

        {/* user image */}
        <div className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300">
          <UserCircleIcon className="h-6 w-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
