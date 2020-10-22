import firebase from "firebase/app"

import 'firebase/firestore'

import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB_aAa9gXQKtfbu6z3_p54o1Vdzi3oeqTk",
    authDomain: "clothes-db-81725.firebaseapp.com",
    databaseURL: "https://clothes-db-81725.firebaseio.com",
    projectId: "clothes-db-81725",
    storageBucket: "clothes-db-81725.appspot.com",
    messagingSenderId: "559284541867",
    appId: "1:559284541867:web:4139f8cd100048ba68daee",
    measurementId: "G-EZDTKN6WLD"
  }

  firebase.initializeApp(config);

export const auth = firebase.auth()

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider).catch((error) => {console.log(`${error.code} ${error.message}`)})

export default firebase;