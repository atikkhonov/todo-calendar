import { NavigateFunction } from "react-router-dom";
import { AppDispath } from "..";
import UserService from "../../api/UserService";
import { IUser } from "../../models/IUser";
import { login, logout, setError, setIsLoading } from "../slices/AuthSlice";
import { modalFormClose } from "../slices/ModalSlice";


export const AuthActionCreator = {
  login: (values: {username: string, password: string}, navigate?: NavigateFunction) => async (dispatch: AppDispath) => {
    try {
      dispatch(setIsLoading(true));
      setTimeout(async () => {
        const responce = await UserService.getUsers();
        const mockUser = responce.data.find((item: IUser) => item.username === values.username && item.password === values.password);
        
        if (mockUser) {
          window.localStorage.setItem('auth', 'true');
          window.localStorage.setItem('username', mockUser.username);
          
          if (navigate) {
            navigate("/main")
          }
          
          dispatch(login(mockUser));
          dispatch(modalFormClose());
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