// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";
import { getRemoteConfig } from "firebase/remote-config";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// const firebaseConfig = {
//   apiKey: "AIzaSyAnyQmkgw7z8_CbptRairOxsJc0iYz7H1k",
//   authDomain: "vanz-proj.firebaseapp.com",
//   projectId: "vanz-proj",
//   storageBucket: "vanz-proj.appspot.com",
//   messagingSenderId: "533489042999",
//   appId: "1:533489042999:web:ddd448f1fa673d472e21b2",
//   measurementId: "G-W16N2LRZD5"
// };


// const firebaseConfig = {
//   apiKey: "AIzaSyDjHC0Jdsbt7YU6w_zYyjDMA-i9PUMU5bQ",
//   authDomain: "logifix-app.firebaseapp.com",
//   projectId: "logifix-app",
//   storageBucket: "logifix-app.appspot.com",
//   messagingSenderId: "343389962798",
//   appId: "1:343389962798:web:ba77f998674439a74895bf",
//   measurementId: "G-1TR22NDCBK"
// };



const firebaseConfig = {
  apiKey: "AIzaSyDb-hXJHq2FOvMlicw_vTypEb-S3JKWI5k",
  authDomain: "logifyx-app.firebaseapp.com",
  projectId: "logifyx-app",
  storageBucket: "logifyx-app.appspot.com",
  messagingSenderId: "538672252947",
  appId: "1:538672252947:web:511b31aecf0362fa6d57e6",
  measurementId: "G-JSH0X23CRS"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const remoteConfig = getRemoteConfig(app);

