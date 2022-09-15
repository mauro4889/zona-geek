import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ChakraProvider } from '@chakra-ui/react'
import { Products } from './components/Products/Products'
import { Navigate, Route, Routes } from "react-router-dom";
import { CheckOut } from "./components/CheckOut/CheckOut";
import { Login } from "./components/Login/Login";
import { CreateAcount } from "./components/CreateAcount/CreateAcount";
import { Contact } from "./components/Contact/Contact";





function App() {
  return (
    <ChakraProvider>
      <CreateAcount/>
      <Routes>
        <Route path="/" element={<Navigate to='index' />}></Route>
        <Route path="index" element={<Products />}></Route>
        <Route path="checkout" element={<CheckOut />}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path="createacount" element={<CreateAcount/>} ></Route>
        <Route path="contact" element={<Contact/>}></Route>
      </Routes>
    </ChakraProvider>
  );
}


export default App;
