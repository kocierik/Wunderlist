// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "wunderlist-a1.firebaseapp.com",
  projectId: "wunderlist-a1",
  storageBucket: "wunderlist-a1.appspot.com",
  messagingSenderId: "56750767945",
  appId: "1:56750767945:web:c6fce555993350095be498",
  measurementId: "G-F7JXNQ5WSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()

// export const provider = new firebase.auth.GoogleAuthProvider()
// export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()
firestore.settings({ timestampsInSnapshots: true })

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return
  // get the reference where the data can might be
  const userRef = firestore.doc(`users/${user.uid}`)

  // fetch document location
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { displayName, email, photoURL, uid } = user
    const createAt = new Date()
    try {
      await userRef.set({
        uid,
        displayName,
        email,
        createAt,
        photoURL,
        ...additionalData,
      })
    } catch (error) {
      console.error("errore nella creazione", error)
    }
  }
  return getUserDocument(user.uid)
}
export const getUserDocument = async (uid) => {
  if (!uid) return null
  try {
    return firestore.collection("users").doc(uid)
  } catch (error) {
    console.error("error fetching the data ", error.message)
  }
}

window.firebase = firebase
export default firebase