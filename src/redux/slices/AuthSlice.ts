import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface AuthSlice {
  isAuth: boolean;
  user: IUser
}

const initialState: AuthSlice = {
  isAuth: false,
  user: {} as IUser,
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IUser>) {
      state.isAuth = true;
      state.user.username = action.payload.username;
      state.user.password = action.payload.password;
    },
    logout(state) {
      state.isAuth = false;
      state.user = {} as IUser;
    }
  }
})

export const { login, logout } = authSlice.actions; 

export default authSlice.reducer
