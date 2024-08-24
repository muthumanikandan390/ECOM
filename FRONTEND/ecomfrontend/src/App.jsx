
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home-folder/Home";
import Login from "./pages/Login-folder/Login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path="login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
