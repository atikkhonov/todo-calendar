import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface AuthSlice {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string; 
}

const initialState: AuthSlice = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: '',
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IUser>) {
      state.isAuth = true;
      state.user = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    logout(state) {
      state.isAuth = false;
      state.user = {} as IUser;
    },
  }
})

export const { login, logout, setError, setIsLoading } = authSlice.actions; 

export default authSlice.reducer
