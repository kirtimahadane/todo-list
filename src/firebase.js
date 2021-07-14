
import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyA9Xi0iUnMGMzg7XwhT_VaIvFywxuhz0n4",
  authDomain: "my-todos-96e37.firebaseapp.com",
  projectId: "my-todos-96e37",
  storageBucket: "my-todos-96e37.appspot.com",
  messagingSenderId: "410049377900",
  appId: "1:410049377900:web:9f314f61c7e54ed795ca49"
});
const db= firebaseApp.firestore();

export  default db ; 