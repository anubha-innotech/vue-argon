import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import {
  getFirestore
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB7hVQKfXjKm1DrwSe7GCuhhxNR0kEVrWc",
  authDomain: "vue-argon-18d22.firebaseapp.com",
  projectId: "vue-argon-18d22",
  storageBucket: "vue-argon-18d22.appspot.com",
  messagingSenderId: "1030748009044",
  appId: "1:1030748009044:web:f3a0fec4f4741e0d5e33c1",
  measurementId: "G-JVX72Z953L"
};

initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export { auth };
const db  = getFirestore();
export { db }

// const specialOfTheDay = doc(db, 'dailySpecial/2021-09-14')
// function writeDailySpecial() {
//   const docData = {
//     description : "A delicious vanilla latte",
//     price : 3.99
//   };
//   setDoc(specialOfTheDay,docData)
// }
// console.log("firestore");
// writeDailySpecial();

// try {
//   const docRef = addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// const querySnapshot = getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// })