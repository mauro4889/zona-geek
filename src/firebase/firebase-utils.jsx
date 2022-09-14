import {initializeApp} from 'firebase/app'
import { firebaseConfig } from './firebase-config'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, sendEmailVerification, sendPasswordResetEmail, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from 'firebase/storage'
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc } from 'firebase/firestore'


export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app) //Trae todos los servicios de autenticacion de app
export const db = getFirestore(app)
export const storage = getStorage(app)

console.log(db)

//Crear usuario
export const createUser = async (email, password) =>{
    const newUser = await createUserWithEmailAndPassword(auth, email, password)

    await sendEmailVerification(newUser.user,{
        url:'http///localhost:3000'
    })

    alert(`Se envio un correo de verificacion a ${email}`)
    localStorage.setItem(newUser.user)
}

//Iniciar sesion con correo y contraseña
export const signIn = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
}

//Reiniciar contraseña
export const resetPassword = async email =>{
    await sendPasswordResetEmail(auth, email, {
        url:'http://localhost:3000/login'
    })
    alert(`Se envio un correo de recuperacion de contraseña a ${email}`)
}

//Iniciar con Google
const providerGoogle = new GoogleAuthProvider()
export const signInGoogle = () => signInWithPopup(auth, providerGoogle)