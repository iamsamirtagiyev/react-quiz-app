import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, getFirestore, onSnapshot } from "firebase/firestore";
import toast from "react-hot-toast";
import { store } from './stores/index'
import { loginUser, logoutUser } from "./stores/auth";
import { closeModal } from "./stores/modal";
import { setQuiz } from "./stores/quiz";

const firebaseConfig = {
  apiKey: "AIzaSyDCpL6yo9mgD93lWD5FxjsWxO_DEgpySNU",
  authDomain: "quiz-app-ba4ba.firebaseapp.com",
  projectId: "quiz-app-ba4ba",
  storageBucket: "quiz-app-ba4ba.appspot.com",
  messagingSenderId: "146982739443",
  appId: "1:146982739443:web:d50e2694c6452d138f8686",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();
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
    await signOut(auth)
    return true
  } catch (error) {
    // toast.error(error.code)
  }
}

export const update = async data =>{
  try {
    await updateProfile(auth.currentUser, data)
    toast.success('Your profile has been successfully updated')
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

export const sendEmail = async(email) => {
  try{
    await sendPasswordResetEmail(auth, email)
    toast.success('The email was sent successfully. Please check')
    return true
  }
  catch(error){
    toast.error(error.code)
  }
}

onAuthStateChanged(auth, user => {
  if(user){
    store.dispatch(loginUser({
      displayName: user.displayName,
      email: user.email,
      uid: user.uid
    }))
  }
  else{
    store.dispatch(logoutUser())
  }
})

export const addData = async (data, name) => {
  try {
    await addDoc(collection(db, name), data)
  } catch (error) {
    toast.error(error)
  }
}

onSnapshot(collection(db, "quiz"), (doc) => {
  store.dispatch(setQuiz(doc.docs.reduce((allQuiz, quiz) => [...allQuiz, quiz.data()], [])))
});

