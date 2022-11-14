import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";

import firebase from "firebase/compat/app";
// require('firebase/auth');
// import "firebase/auth";

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

  
const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
firebase.initializeApp(firebaseConfig);
appInstance.mount("#app");
