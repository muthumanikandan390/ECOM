
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from "./pages/Home-folder/Home";
import Login from "./pages/Login-folder/Login";
import NavBar from "./components/navbar-folder/NavBar";
import Collection from "./pages/Collection-folder/Collection";
import Contact from "./pages/Contact-folder/Contact";
import About from "./pages/About-folder/About";
import Footer from "./components/footer-folder/Footer";
import Cart from "./pages/Cart-folder/Cart";


const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient} >
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route index element={<Home />} />
    <Route path="/collection" element={<Collection/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  </QueryClientProvider>
  )
}

export default App
