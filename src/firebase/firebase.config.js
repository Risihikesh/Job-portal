import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDP4k3NMK229LmdWExuDmTree-JjDKbyCY",
  authDomain: "jobfinder-512c5.firebaseapp.com",
  projectId: "jobfinder-512c5",
  storageBucket: "jobfinder-512c5.appspot.com",
  messagingSenderId: "932260957656",
  appId: "1:932260957656:web:d2b3382a8405584f4a76ad"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)