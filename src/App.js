import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import {ChakraProvider} from '@chakra-ui/react'
import { Login } from "./components/Login/Login";

function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <Login/>
    </ChakraProvider>
  );
}

export default App;
