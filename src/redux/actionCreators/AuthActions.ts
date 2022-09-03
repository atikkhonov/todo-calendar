import axios from "axios";
import { AppDispath } from "..";
import { IUser } from "../../models/IUser";
import { login, logout, setError, setIsLoading } from "../slices/AuthSlice";
import { modalClose } from "../slices/ModalSlice";


export const AuthActionCreator = {
  login: (values: {username: string, password: string}) => async (dispatch: AppDispath) => {
    try {
      dispatch(setIsLoading(true));
      setTimeout(async () => {
        const responce = await axios.get<IUser[]>(`./users.json`);
        const mockUser = responce.data.find((item: IUser) => item.username === values.username && item.password === values.password);
        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          
          dispatch(login(mockUser));
          dispatch(modalClose());
        } else {
          dispatch(setError('Incorrect username or password !'));
        }
        dispatch(setIsLoading(false));
      }, 1000)
    } catch (error: any) {
      dispatch(setError('Something went wrong...'));
    }
  },
  logout: () => async (dispatch: AppDispath) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username')
    dispatch(logout())
  }
}  