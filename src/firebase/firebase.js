import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import firebaseConfig from './config'

const myFirebase = firebase.initializeApp(firebaseConfig)

// console.log(myFirebase)

// const firebase = {
//     firebase,
//     firebaseStorage: firebase.storage(),
//     firebaseFunctions: firebase.functions(),
//     firebaseDatabase: firebase.firestore(),
// }

export default myFirebase