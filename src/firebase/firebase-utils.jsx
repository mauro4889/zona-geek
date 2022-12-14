import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase-config'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, sendEmailVerification, sendPasswordResetEmail, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore, collection, getDocs, doc, getDoc, setDoc, Firestore } from 'firebase/firestore'
import { ORDER_STATUS } from '../constants/constants'


export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app) //Trae todos los servicios de autenticacion de app
export const db = getFirestore(app)
export const storage = getStorage(app)

// INICIO FIRESTORE
export const createUserProfile = async userAutenticated => { //userAutenticated es la informacion que devuelve google del usuario
    const userReference = doc(db, `user/${userAutenticated.uid}`)

    const snapshot = await getDoc(userReference) //snapshot es el documento que se obtiene de firestore
    if (!snapshot.exists()) { //si snapshot no existe, se crea
        const { email, photoURL, displayName } = userAutenticated
        try {
            await setDoc(userReference, {
                name: displayName,
                email,
                photoURL,
                createdAt: new Date()
            })
        } catch (error) {
            console.log({ error })
        }
    }

    return snapshot
}

export const createOrderDocuments = async order => {
    const orderReference = doc(db, `orders/user/${order.user}/${order.id}`)
    const snapshot = await getDoc(orderReference)

    if (!snapshot.exists()) {
        try {
            await setDoc(orderReference, {
                ...order,
                createdOrderDate: new Date(),
                status: ORDER_STATUS.PENDING
            })
        } catch (error) {
            console.log(error)
        }
    }

    return snapshot
}

export const getFirebaseOrders = async userid => {
    const PATH = `orders/user/${userid}`

    const collectionReference = collection(db, PATH)
    const { docs } = await getDocs(collectionReference)
    return docs.map(snapshot => snapshot.data()) //se pasa a JSON las colleciones traidas de firebase
}

//FIN FIRESTORE

//Crear usuario
export const createUser = async (email, password, name) => {
        const newUser = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        await updateProfile(auth.currentUser, {displayName: name})
        await sendEmailVerification(newUser.user, {
            url: 'https://zona-geek.vercel.app/login'
        })

        alert(`Se envio un correo de verificacion a ${email}`)
        localStorage.setItem('username', newUser.user)

        return newUser

}

//Iniciar sesion con correo y contrase??a
export const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)



//Reiniciar contrase??a
export const resetPassword = async email => {
    await sendPasswordResetEmail(auth, email, {
        url: 'https://zona-geek.vercel.app/login'
    })
    alert(`Se envio un correo de recuperacion de contrase??a a ${email}`)
}

//Iniciar con Google
const providerGoogle = new GoogleAuthProvider()
export const signInGoogle = () => signInWithPopup(auth, providerGoogle)


