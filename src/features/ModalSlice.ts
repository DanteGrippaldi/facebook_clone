import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

interface IModal {
  value: boolean;
}

const initialState: IModal = {
  value: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal.value;

export default modalSlice.reducer;
