import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user 
    const updateUserInfo = (name) => {
        setLoading(true)
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => { }).catch(() => { })
    }
    // log in user 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // continue with google 
    const googleProvider = new GoogleAuthProvider()
    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // user log out 
    const userLogOut = () => {
        setLoading(true)
        signOut(auth).then(() => { }).catch(() => { })
    }
    useEffect(() => {
        const unSubscribes = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribes()
        }
    }, [])

    const authInfo = { user, loading, createUser, updateUserInfo, loginUser, continueWithGoogle, userLogOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;