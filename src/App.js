import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ChakraProvider } from '@chakra-ui/react'
import { Products } from './components/Products/Products'
import { Navigate, Route, Routes } from "react-router-dom";
import { CheckOut } from "./components/CheckOut/CheckOut";




function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to='index' />}></Route>
        <Route path="index" element={<Products />}></Route>
        <Route path="checkout" element={<CheckOut />}></Route>
      </Routes>
    </ChakraProvider>
  );
}


export default App;
