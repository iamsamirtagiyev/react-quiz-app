import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyDCpL6yo9mgD93lWD5FxjsWxO_DEgpySNU",
  authDomain: "quiz-app-ba4ba.firebaseapp.com",
  projectId: "quiz-app-ba4ba",
  storageBucket: "quiz-app-ba4ba.appspot.com",
  messagingSenderId: "146982739443",
  appId: "1:146982739443:web:d50e2694c6452d138f8686",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider()

export const signup = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.code)
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    toast.error(error.code)
  }
}

export const logout = async () => {
  try {
    const { user } = await signOut(auth)
    return true
  } catch (error) {
    toast.error(error.code)
  }
}

export const update = async data =>{
  try {
    await updateProfile(auth.currentUser, data)
    return true
  } catch (error) {
    toast.error(error.code)
  }
}

export const googleAuth = async() => {
  try{
    const { user } = await signInWithPopup(auth, provider)
    return user
  }
  catch(error){
    toast.error(error.code)
  }
}

