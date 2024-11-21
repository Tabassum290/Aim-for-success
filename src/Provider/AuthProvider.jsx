import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { signOut, updateProfile, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

// Create the context
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        setLoading(true);
        return auth.createUserWithEmailAndPassword(auth, email, password);
    };

    // Log in user with email and password
    const userLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log out user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Update profile information
    const updateProfileData = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogIn,
        loading,
        updateProfileData,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
