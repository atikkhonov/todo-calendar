import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface AuthSlice {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  isError: string;
}

const initialState: AuthSlice = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  isError: '',
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
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.isAuth = true;
      state.user = action.payload;
    },
    removeUser() {

    }
  },
  extraReducers: {
    
  }
})

export const { signIn, signOut, setUser } = authSlice.actions; 

export default authSlice.reducer
