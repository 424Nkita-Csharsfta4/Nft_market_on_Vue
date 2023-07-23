import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/main.css';

// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB_TkrcU0KQIemHrcX5rZlcPEPIZWITRcY",
//   authDomain: "vuelogin-2fe32.firebaseapp.com",
//   projectId: "vuelogin-2fe32",
//   storageBucket: "vuelogin-2fe32.appspot.com",
//   messagingSenderId: "355959677018",
//   appId: "1:355959677018:web:6270fd2c6e38fe2709f863",
//   measurementId: "G-QZMEEY9P90"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app');
