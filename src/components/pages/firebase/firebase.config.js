import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAGj_lKJPF2CWIfLMeuGCYgkFGUTPbeHjw",
    authDomain: "spicyworld1912.firebaseapp.com",
    projectId: "spicyworld1912",
    storageBucket: "spicyworld1912.appspot.com",
    messagingSenderId: "354673492841",
    appId: "1:354673492841:web:4a9b5aed841e74eca933f8",
    measurementId: "G-LTVV7R3DVT"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const store = getFirestore(app)
