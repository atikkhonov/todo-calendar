import { Navigate, Route, Routes } from "react-router-dom";
import MyModal from "./components/elements/modal/Modal";
import PrivateAuth from "./hoc/PrivateAuth";
import useTypedSelector from "./hooks/useTypedSelector";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import PublicPage from "./pages/PublicPage";

function App() {
  const isOpen = useTypedSelector(state => state.modalReducer.isOpen)
  
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
        isOpen ? <MyModal/> : <></> 
      }
    </>
  )
}

export default App;
