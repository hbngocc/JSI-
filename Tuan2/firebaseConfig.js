import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js'
const firebaseConfig = {
    apiKey: "AIzaSyAyECIXVyjuNeaNWW7rsJyVULpiWeCHseE",
    authDomain: "jsituan2.firebaseapp.com",
    projectId: "jsituan2",
    storageBucket: "jsituan2.appspot.com",
    messagingSenderId: "37672379816",
    appId: "1:37672379816:web:faadf05d6cb33fcbf2299d",
    measurementId: "G-X5T0X316FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const dangky = async (auth, email, pass) => {
    let isSuccess;
    let infoMessage;
    try {
        const user = await createUserWithEmailAndPassword(auth, email, pass);
        isSuccess=true;
    } catch (error) {
        isSuccess=false;
        infoMessage= error.code;
        
    }

    return {
        isSuccess,
        infoMessage,
    };
};

export const dangnhap = async (auth, email, pass) => {
    let isSuccess;
    let infoMessage;
    try {
        const user = await signInWithEmailAndPassword(auth, email, pass);
        isSuccess=true;
    } catch (error) {
        isSuccess=false;
        infoMessage= error.code;
    }

    return {
        isSuccess,
        infoMessage,
    };
};