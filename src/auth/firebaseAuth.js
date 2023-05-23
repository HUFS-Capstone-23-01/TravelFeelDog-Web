import firebase from 'firebase';
import 'firebase/auth';
import firebaseKey from '../config/firebaseKey.json';

// Initialize Firebase
firebase.initializeApp(firebaseKey);
export const auth = firebase.auth();

export const signInGoogle= () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
}

export const signOut = () => {
    console.log('signOut');
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("nickname");
    return auth.signOut();
}