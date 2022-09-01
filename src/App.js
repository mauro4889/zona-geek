import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import {ChakraProvider} from '@chakra-ui/react'
import { Recommended } from "./components/Recommended/Recommended";

function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <Recommended/>
    </ChakraProvider>
  );
}

export default App;
