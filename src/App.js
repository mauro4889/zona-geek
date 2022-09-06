import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import {ChakraProvider} from '@chakra-ui/react'
import {Products} from './components/Products/Products'

function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <Products/>
    </ChakraProvider>
  );
}


export default App;
