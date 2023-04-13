import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/PostSlice";
import modalReducer from "../features/ModalSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
