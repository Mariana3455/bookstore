import React, {createContext, useEffect, useState} from "react";
import  app from '../firebase/firebase.config.js'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup,onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext= createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthorisationProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password)=>{
       setLoading(true);
       return createUserWithEmailAndPassword(auth, email,password)
    }
    const loginGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const login =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }
    const logOut = () =>{
        return signOut(auth)
    }

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
       setUser(currentUser)
       setLoading(false)
   });
    return ()=>{
        return unsubscribe();
    }
},[])
    const authInfo={
        user,
        createUser,
        loginGoogle,
        loading,
        login,
        logOut
    }
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthorisationProvider