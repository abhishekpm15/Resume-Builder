import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  // const [results2,setResults2] = useState()
  const [results3,setResults3] = useState()
  // const [results4,setResults4] = useState()


  function SignUp() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  }

  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(user) => {
        setUser(user);
      });
      return unsubscribe;
    }, []);

  const value = {
    user,
    setUser,
    SignUp,
    // results2,
    // setResults2,
    results3,
    setResults3,
    // results4,
    // setResults4
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
