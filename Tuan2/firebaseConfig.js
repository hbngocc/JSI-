import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js'
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

export const dangky = async (auth, email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error.code)
    }
};