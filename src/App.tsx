import React from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import MyModal from "./components/elements/Modal/Modal";
import LoginForm from "./components/UI/LoginForm/LoginForm";
import PrivateAuth from "./hoc/PrivateAuth";
import useTypedDispatch from "./hooks/useTypedDispatch";
import useTypedSelector from "./hooks/useTypedSelector";
import Layout from "./layout/Layout";
import { IUser } from "./models/IUser";
import MainPage from "./pages/MainPage";
import PublicPage from "./pages/PublicPage";
import { login } from "./redux/slices/AuthSlice";

function App() {
  const isOpenForm = useTypedSelector(state => state.modalReducer.isOpenForm)
  const dispatch = useTypedDispatch()
  
  React.useEffect(() => {
    if (window.localStorage.getItem('auth')) {
      dispatch(login(
        { 
          username: window.localStorage.getItem('username' || '')
        } as IUser)
      )
    }
  }, [])
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="public" element={<PublicPage/>}/>
          <Route index element={<Navigate to="/public" replace/>}/>
          <Route path="main" element={
            <PrivateAuth>
              <MainPage/>
            </PrivateAuth>
          }/>
        </Route>
      </Routes>
      {
        isOpenForm
        ? <MyModal>
          <h1>Sign in</h1>
          <LoginForm/>
        </MyModal> 
        : <></> 
      }
    </>
  )
}

export default App;
