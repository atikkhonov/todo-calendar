import { createSlice } from "@reduxjs/toolkit";

interface AuthSlice {
  isAuth: boolean;
}

const initialState: AuthSlice = {
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    signIn(state) {
      state.isAuth = true;
    },
    signOut(state) {
      state.isAuth = false;
    }
  }
})

export const { signIn, signOut } = authSlice.actions; 

export default authSlice.reducer
