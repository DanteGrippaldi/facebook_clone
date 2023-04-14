import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "@/features/PostSlice";
import { useAppSelector } from "@/store/hooks";

import {
  UserCircleIcon,
  Bars2Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

interface Data {
  title: string;
  body: string;
  reactions: number;
  tags: string[];
  userId: number;
  postId: number;
  img?: string;
}

interface User {
  username: string;
  image: string;
}

const Post = ({ title, body, reactions, tags, userId, postId, img }: Data) => {
  const [user, setUser] = useState<User>({
    username: "",
    image: "",
  });
  const [like, setLike] = useState(false);
  const feed = useAppSelector((state) => state.post.value);
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const url = `https://dummyjson.com/users/${userId}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setUser(responseJson);
  };

  useEffect(() => {
    fetchUser();
  }, [feed]);

  return (
    <div className=" md:w-[600px] w-full h-[600px] bg-white rounded-xl shadow-md p-5">
      {/* top section */}
      <div className="w-full h-10 flex justify-between items-center">
        {/* left */}
        <div className="flex space-x-2">
          <div className="flex items-center rounded-full bg-gray-100">
            {user?.image ? (
              <img alt="profile" src={user.image} className="w-10 h-10" />
            ) : (
              <UserCircleIcon className="w-10 h-10 text-gray-300" />
            )}
          </div>
          <div>
            <h2 className="font-semibold text-md">{user?.username}</h2>
            <div className="flex space-x-1">
              {tags?.map((tag, i) => (
                <div key={i}>
                  <p className="italic text-xs">#{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex space-x-2 pr-2">
          <Bars2Icon className="h-10 w-10 text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2" />
          <XMarkIcon
            onClick={() => dispatch(deletePost({ postId }))}
            className="h-10 w-10 text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-2"
          />
        </div>
      </div>

      {/* title section */}
      <div className="px-2 py-5">
        <h2 className="text-md font-normal">{title}</h2>
      </div>

      {/* content area */}
      <div className="w-full h-[60%] bg-gray-100 rounded-xl flex items-center justify-center text-center italic p-4">
        {img ? <img src={img} alt={img} /> : <h5>{body}</h5>}
      </div>

      {/* reactions */}
      <div className="w-full h-10 flex items-center">
        <div className="flex items-center space-x-1 text-gray-500">
          {reactions ? (
            <div className="flex items-center space-x-1 text-gray-500 py-5 pl-1">
              <div className="bg-blue-400 p-1 rounded-full text-white">
                <HandThumbUpIcon className="h-4 w-4" />
              </div>
              <p className="text-sm">{like ? reactions + 1 : reactions}</p>
            </div>
          ) : null}
        </div>
      </div>

      {/* like, comment, share */}
      <div className="flex justify-around items-center py-5">
        {/* like */}
        <div
          onClick={() => setLike(!like)}
          className="flex space-x-2 items-center hover:bg-gray-100 cursor-pointer md:px-10 py-2 rounded-xl"
        >
          <HandThumbUpIcon
            className={`h-7 w-7 ${like ? "text-blue-400" : "text-gray-400"}`}
          />
          <p className={`${like ? "text-blue-400" : "text-gray-400"}`}>Like</p>
        </div>

        {/* comment */}
        <div className="flex space-x-2 items-center hover:bg-gray-100 cursor-pointer md:px-10 py-2 rounded-xl">
          <ChatBubbleLeftIcon className="h-7 w-7 text-gray-400" />
          <p className="text-gray-400">Comment</p>
        </div>

        {/* share */}
        <div className="flex space-x-2 items-center hover:bg-gray-100 cursor-pointer md:px-10 py-2 rounded-xl">
          <ShareIcon className="h-7 w-7 text-gray-400" />
          <p className="text-gray-400">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
