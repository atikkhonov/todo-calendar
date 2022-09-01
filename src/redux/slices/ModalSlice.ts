import { createSlice } from "@reduxjs/toolkit";

interface ModalSlice {
  isOpen: boolean;
}

const initialState: ModalSlice = {
  isOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpen(state) {
      state.isOpen = true;
    },
    modalClose(state) {
      state.isOpen = false;
    }
  }
})

export const { modalOpen, modalClose } = modalSlice.actions;

export default modalSlice.reducer;