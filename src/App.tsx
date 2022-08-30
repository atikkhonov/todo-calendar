import { Navigate, Route, Routes } from "react-router-dom";
import PrivateAuth from "./hoc/PrivateAuth";
import Layout from "./layout/Layout";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="login" element={<LoginPage/>}/>
          <Route index element={<Navigate to="/login" replace/>}/>
          <Route path="main" element={
            <PrivateAuth>
              <MainPage/>
            </PrivateAuth>
          }/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
