import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage"



const firebaseConfig = {
    apiKey: "AIzaSyDPQnG2EzKHwFOSF4lgrdZa9Yn8OlMWt34",
    authDomain: "vidapet-7e346.firebaseapp.com",  
    projectId: "vidapet-7e346",  
    storageBucket: "vidapet-7e346.appspot.com",  
    messagingSenderId: "808353244872",  
    appId: "1:808353244872:web:d3c52423d9a980d03a67fd",  
    measurementId: "G-D1WHDGM33D"
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
