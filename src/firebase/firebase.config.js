// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBps8z8vXtrhzXvV091EkaVM9BeKDYGUqE",
    authDomain: "dragon-news-cac3c.firebaseapp.com",
    projectId: "dragon-news-cac3c",
    storageBucket: "dragon-news-cac3c.appspot.com",
    messagingSenderId: "851924697224",
    appId: "1:851924697224:web:b254ec40357659d42bdf3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;