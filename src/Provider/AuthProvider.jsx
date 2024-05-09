import React, { createContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth/cordova';


 export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(null);
    const provider = new GoogleAuthProvider();


    const createuser = (email,password) => {

        setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password);
    }
//google login

const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth,provider);
}





    // signout
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // user observe
    useEffect( () =>{
     
    const unsubscribe =    onAuthStateChanged(auth,currentUser =>{

            setUser(currentUser);
            console.log('current user', currentUser)
            setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }

    },[])

    // This is for signin...
    const signin = (email,password) =>{
     setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authinfo ={
        user,
        loading,
        createuser,
        signin,
        googleSignIn,
        logOut,
        



    }
    return (
        <AuthContext.Provider value={authinfo}>
             {children}

         </AuthContext.Provider>
    );
};

export default AuthProvider;