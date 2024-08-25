
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home-folder/Home";
import Login from "./pages/Login-folder/Login";
import NavBar from "./components/navbar-folder/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route index element={<Home />} />
    <Route path="login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
