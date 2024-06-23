import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";


const firebaseConfig = {
  
  };

  firebase.initializeApp(firebaseConfig);
  export const db = firebase.database()
  export const auth = firebase.auth();
  export const store = firebase.firestore();
  export default firebase
  
