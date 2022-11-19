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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
