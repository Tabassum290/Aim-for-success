import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
 console.log(user);
 const [loading,setLoading] = useState (true);
const createNewUser = (email,password)=> {
    setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password);
}
const userLogIn =(email,password)=> {
 setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}
const logOut = () => {
    setLoading(true);
    return signOut(auth);
}
useEffect(()=> {
 const unSubscribe = onAuthStateChanged(auth,currentUser=> {
        setUser(currentUser);
        setLoading(false);
    })
    return () => {
unSubscribe();
    }
},[])
const authInfo = {
        user,
        setUser,
      createNewUser ,
      logOut,
     userLogIn,
     loading,
 }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;