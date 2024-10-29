
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyDqk1mfjc4PObGKdxI05Ir0iRrhIsRhYoM",
    authDomain: "e-commers-react-ced21.firebaseapp.com",
    projectId: "e-commers-react-ced21",
    storageBucket: "e-commers-react-ced21.appspot.com",
    messagingSenderId: "216462200530",
    appId: "1:216462200530:web:8d450c26e337c4f1e4e70b",
    measurementId: "G-19EYRWKZZX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); 

export default db;