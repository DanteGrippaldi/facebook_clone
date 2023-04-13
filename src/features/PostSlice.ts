import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
  img?: string;
}

export interface IPosts {
  value: IPost[];
}

const initialState: IPosts = {
  value: [
    {
      id: 0,
      title: "",
      body: "",
      userId: 0,
      tags: [],
      reactions: 0,
      img: "",
    },
  ],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setFeed: (state, action) => {
      state.value = action.payload;
    },
    addPost: (state, action) => {
      state.value.unshift(action.payload);
    },
    deletePost: (state, action) => {
      state.value = state.value.filter(
        (item) => item.id !== action.payload.postId
      );
    },
  },
});

export const { setFeed, addPost, deletePost } = postSlice.actions;

export const selectFeed = (state: RootState) => state.post.value;

export default postSlice.reducer;
