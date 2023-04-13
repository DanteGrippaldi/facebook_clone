import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "@/store/hooks";
import { addPost } from "@/features/PostSlice";
import { setModal } from "@/features/ModalSlice";
import { XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import {
  UsersIcon,
  ChevronDownIcon,
  PhoneIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

function PostModal({}) {
  const dispatch = useDispatch();
  const lastId =
    useAppSelector(
      (state) => state.post.value[state.post.value?.length - 1]?.id
    ) ?? 0;
  const [contentInInput, setContentInInput] = useState<string>("");
  const [img, setImg] = useState<string>("");

  const notify = () =>
    toast.success("Your post was successful!", {
      duration: 4000,
      position: "bottom-right",
      style: {
        backgroundColor: "#4267B2",
        color: "white",
      },
    });

  const handlePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContentInInput("");
    dispatch(setModal());
    dispatch(
      addPost({
        title: contentInInput,
        username: "Dante Grippaldi",
        id: lastId + 1,
        img: img,
      })
    );
    setImg("");

    notify();
  };

  return (
    <div>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-white opacity-80 z-40`}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="w-[500px] h-[400px] border-[1px] bg-white shadow-xl rounded-xl z-50">
          {/* top */}
          <div className="w-full h-16 border-b-[1px] p-8 flex items-center justify-center">
            <h5 className="text-xl font-bold flex-grow text-center">
              Create post
            </h5>
            <div
              onClick={() => dispatch(setModal())}
              className="flex items-center p-1 bg-gray-100 rounded-full cursor-pointer"
            >
              <XMarkIcon className="w-6 h-6 text-gray-500 " />
            </div>
          </div>

          {/* content */}
          <div className="w-full h-full p-2">
            <div className="w-full flex space-x-2 items-center">
              {/* profile picter */}
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-gray-500" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Dante Grippaldi</p>
                <div className="h-6 w-[100px] bg-gray-100 rounded-md flex items-center justify-between p-1">
                  <UsersIcon className="w-3 h-3" />
                  <p className="text-xs font-semibold">Friends</p>
                  <ChevronDownIcon className="w-3 h-3 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* input */}
            <form className="w-full p-5 h-[35%]">
              <input
                className="h-10 w-full outline-none placeholder:text-2xl text-2xl"
                type="text"
                value={contentInInput}
                placeholder="What's on your mind, Dante?"
                onChange={(e) => setContentInInput(e.target.value)}
              />
            </form>

            {/* add to post */}
            <div className="w-full p-4 h-14 border-2 shadow-sm rounded-xl flex items-center justify-between">
              <div>
                <input
                  type="file"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  className="text-sm font-semibold cursor-pointer file:bg-blue-200 file:border-0 file:p-2 file:cursor-pointer file:rounded-full file:text-blue-400 file:mx-1 text-gray-400"
                ></input>
              </div>
              {/* icons */}
              <div className="flex space-x-2">
                <div className="p-1 rounded-full">
                  <PhotoIcon className="w-8 h-8 text-green-500" />
                </div>
              </div>
            </div>

            {/* button */}
            <button
              onClick={handlePost}
              className={`mt-5 w-full h-10 cursor-pointer ${
                contentInInput ? "bg-blue-400" : "bg-gray-100"
              } rounded-xl flex items-center justify-center`}
            >
              <p className="text-white font-semibold cursor-pointer">Post</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
