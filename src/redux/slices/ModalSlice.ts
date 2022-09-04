import { createSlice } from "@reduxjs/toolkit";

interface ModalSlice {
  isOpenForm: boolean;
}

const initialState: ModalSlice = {
  isOpenForm: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalFormOpen(state) {
      state.isOpenForm = true;
    },
    modalFormClose(state) {
      state.isOpenForm = false;
    }
  }
})

export const { modalFormOpen, modalFormClose } = modalSlice.actions;

export default modalSlice.reducer;