// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
    //   apiKey: "AIzaSyDoOcTP-RNWEF9xl6vTt6BEd6h00Jtb5Ec",
    //   authDomain: "library-management-c939f.firebaseapp.com",
    //   projectId: "library-management-c939f",
    //   storageBucket: "library-management-c939f.appspot.com",
    //   messagingSenderId: "757798725884",
    //   appId: "1:757798725884:web:9a086e02d37af3abee4f79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;