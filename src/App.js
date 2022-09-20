import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ChakraProvider, Stack } from '@chakra-ui/react'
import { Products } from './components/Products/Products'
import { Navigate, Route, Routes } from "react-router-dom";
import { CheckOut } from "./components/CheckOut/CheckOut";
import { Login } from "./components/Login/Login";
import { CreateAcount } from "./components/CreateAcount/CreateAcount";
import { Contact } from "./components/Contact/Contact";
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from "react";
import { auth, createUserProfile } from "./firebase/firebase-utils";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/actionUser";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { ForgotPassword } from "./components/ForgotPassword/ForgotPassword";
import { FinishCheckout } from "./components/FinishCheckout/FinishCheckout";
import { Resumen } from "./pages/Resumen/Resumen";
import bgimage from './assets/img/bgimage.jpg'


const onChange = (dispatch, action) => {
  return onAuthStateChanged(auth, async user => {
    if (user) {
      const snapshot = await createUserProfile(user);
      dispatch(action({ id: snapshot.id, ...snapshot.data() }));
    } else {
      dispatch(action(null));
    }
  });
};

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsuscribe = onChange(dispatch, setCurrentUser)
    return () => unsuscribe()
  }, [dispatch])


  return (
    <ChakraProvider>
      <Stack bgimage="url('/assets/img/bgimage.jpg')" 
      >
        <NavBar />
      </Stack>
      <Routes>
        <Route path="/" element={<Navigate to='index' />}></Route>
        <Route path="index" element={<Products />}></Route>
        <Route
          path='/checkout'
          element={
            <ProtectedRoute
              to='/login'
              state={{
                checkout: true,
              }}
            >
              <CheckOut />
            </ProtectedRoute>
          }
        />
        <Route path='login' element={<Login />}></Route>
        <Route path="createacount" element={<CreateAcount />} ></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path='forgotpassword' element={<ForgotPassword />}></Route>
        <Route path='finishorder' element={<FinishCheckout />}></Route>
        <Route path='resumen' element={<Resumen />}></Route>
      </Routes>
    </ChakraProvider>
  );
}


export default App;
