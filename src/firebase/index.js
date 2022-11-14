// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7hVQKfXjKm1DrwSe7GCuhhxNR0kEVrWc",
  authDomain: "vue-argon-18d22.firebaseapp.com",
  projectId: "vue-argon-18d22",
  storageBucket: "vue-argon-18d22.appspot.com",
  messagingSenderId: "1030748009044",
  appId: "1:1030748009044:web:f3a0fec4f4741e0d5e33c1",
  measurementId: "G-JVX72Z953L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };
// export const auth = firebase.auth();