import React, { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import {
  UserCircleIcon,
  VideoCameraIcon,
  PhotoIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";
import Post from "./Post";

import { useDispatch } from "react-redux";
import { setFeed } from "@/features/PostSlice";
import { setModal } from "@/features/ModalSlice";
import PostModal from "./PostModal";

const Feed = () => {
  const feed = useAppSelector((state) => state.post.value);
  const modal = useAppSelector((state) => state.modal.value);
  const dispatch = useDispatch();

  const fetchPosts = async () => {
    const url = `https://dummyjson.com/posts`;
    const response = await fetch(url);
    const responseJson = await response.json();
    dispatch(setFeed(responseJson.posts));
    console.log(feed);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="lg:p-5 py-5 flex flex-col items-center bg-gray-100 overflow-x-hidden">
      {/* post bar */}
      <div className="max-w-[95%] md:w-[600px] w-full h-[150px] bg-white rounded-xl shadow-md p-2">
        {/* input */}
        <div className="flex items-center p-2 space-x-2 border-b-2">
          <div className="w-12 h-12 rounded-full">
            <UserCircleIcon className="w-12 h-12 text-gray-400" />
          </div>
          <div className="bg-gray-100 rounded-full flex-grow">
            <input
              onClick={() => dispatch(setModal())}
              type="text"
              placeholder="Whats on your mind?"
              className="cursor-pointer outline-none bg-transparent pl-2 py-2 w-full placeholder:text-gray-600"
            />
          </div>
        </div>

        {/* buttons */}
        <div className="flex items-center py-5 justify-around">
          <div
            onClick={() => dispatch(setModal())}
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-xl"
          >
            <VideoCameraIcon className="h-5 w-5 lg:h-8 lg:w-8 text-red-400" />
            <p className="hidden sm:inline-flex text-gray-500 font-semibold text-xs md:text-sm lg:text-lg">
              Live video
            </p>
          </div>

          <div
            onClick={() => dispatch(setModal())}
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-xl"
          >
            <PhotoIcon className="h-5 w-5 lg:h-8 lg:w-8 text-green-400" />
            <p className="hidden sm:inline-flex text-gray-500 font-semibold text-xs md:text-sm lg:text-lg">
              Photo/Video
            </p>
          </div>

          <div
            onClick={() => dispatch(setModal())}
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-xl"
          >
            <FaceSmileIcon className="h-5 w-5 lg:h-8 lg:w-8 text-yellow-400" />
            <p className="hidden sm:inline-flex text-gray-500 font-semibold text-xs md:text-sm lg:text-lg">
              Feeling/Activity
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${
          modal ? "flex" : "hidden"
        } absolute top-0 left-0 w-full h-screen flex items-center justify-center`}
      >
        <PostModal />
      </div>

      {/* posts */}
      <div className="py-5 mx-auto p-2">
        {feed?.map((post, i) => (
          <div key={i} className="py-2">
            <Post
              title={post.title}
              body={post.body}
              reactions={post.reactions}
              tags={post.tags}
              userId={post.userId}
              postId={post.id}
              img={post?.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
