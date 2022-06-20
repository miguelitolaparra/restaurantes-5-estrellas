import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDhavk0vlj_GPUr5HIE7UzRE5zDsgtXk2s",
  authDomain: "restaurantes-7b498.firebaseapp.com",
  projectId: "restaurantes-7b498",
  storageBucket: "restaurantes-7b498.appspot.com",
  messagingSenderId: "5272060899",
  appId: "1:5272060899:web:4821530f24a8ba99f696d6"
}

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig)
export const db = getFirestore(initFirebase)
