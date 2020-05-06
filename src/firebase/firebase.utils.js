import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCilcm6vGdI0t_4wyBV6_JhjEhrVN5tHz4",
  authDomain: "crwn-db-f1fb7.firebaseapp.com",
  databaseURL: "https://crwn-db-f1fb7.firebaseio.com",
  projectId: "crwn-db-f1fb7",
  storageBucket: "crwn-db-f1fb7.appspot.com",
  messagingSenderId: "1068044857802",
  appId: "1:1068044857802:web:e5ee58333cd5b298705f33",
  measurementId: "G-YD7DQZHL2L",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
