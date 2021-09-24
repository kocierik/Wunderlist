/* eslint-disable no-console */
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "wunderlist-a1.firebaseapp.com",
  projectId: "wunderlist-a1",
  storageBucket: "wunderlist-a1.appspot.com",
  messagingSenderId: "56750767945",
  appId: "1:56750767945:web:c6fce555993350095be498",
  measurementId: "G-F7JXNQ5WSQ",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()

// eslint-disable-next-line consistent-return
export const getUserDocument = async (uid) => {
  if (!uid) return null
  try {
    return await firestore.collection("users").doc(uid)
  } catch (error) {
    console.log("error fetching the data ", error.message)
  }
}

export const signOut = () => auth.signOut()
firestore.settings({ timestampsInSnapshots: true })

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return
  console.log(user)
  // get the reference where the data can might be
  const userRef = firestore.doc(`users/${user.id}`)

  // fetch document location
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { id, email, country } = user
    const createAt = new Date()
    try {
      await userRef.set({
        id,
        email,
        country,
        createAt,
        // photoURL,
        ...additionalData,
      })
    } catch (error) {
      console.log("errore nella creazione", error)
    }
  }
  // eslint-disable-next-line consistent-return
  return getUserDocument(user.uid)
}

// eslint-disable-next-line no-undef
window.firebase = firebase
export default firebase
