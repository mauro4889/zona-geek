import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import {ChakraProvider} from '@chakra-ui/react'
import { Recommended } from "./components/Recommended/Recommended";
import { Products } from "./components/Products/Products";

function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <Recommended/>
      <Products/>
    </ChakraProvider>
  );
}

export default App;
