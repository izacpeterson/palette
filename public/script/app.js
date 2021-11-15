import { Palette } from "./palette.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyA0meHFHWVWEBrQRfwwVbRGVwcLfMJQhS8",
  authDomain: "color-palette-4676b.firebaseapp.com",
  projectId: "color-palette-4676b",
  storageBucket: "color-palette-4676b.appspot.com",
  messagingSenderId: "538321883912",
  appId: "1:538321883912:web:31a42df2308ed25f0392bd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.querySelector("#signIn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
});

let paletteArray = [];

paletteArray.push(
  new Palette("Dune", ["#34495E", "#715A68", "#F6C29A", "#F5AD92", "#F18985"]),
  new Palette("UI", ["#363537", "#9BC53D", "#3F7CAC", "#D62246", "#E7E6F7"])
);

paletteArray[0].renderEditor();
