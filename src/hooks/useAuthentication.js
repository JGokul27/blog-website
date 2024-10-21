import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase/config";
import { useAuthcontext } from "./useAuthContext";

export const useAuthentication = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthcontext()

  const signup = ({ email, password, firstname, lastname }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;

        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, { firstname, lastname });
        dispatch({type:'LOGIN',payload:user})
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const login = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        console.log(user.uid)
        dispatch({type:'LOGIN',payload:user})
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const logout = () => {
    signOut(auth)
    .then((response) => {
        console.log("Successfully logout")
        dispatch({type:'LOGOUT'})
    })
    .catch((error) => {
        console.log(error.message)
    })
    }
  return { signup, error, login, logout };
};
