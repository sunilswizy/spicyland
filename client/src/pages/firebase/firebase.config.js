import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
	getFirestore,
	setDoc,
	doc,
	getDoc,
	collection,
	addDoc,
	serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAGj_lKJPF2CWIfLMeuGCYgkFGUTPbeHjw",
	authDomain: "spicyworld1912.firebaseapp.com",
	projectId: "spicyworld1912",
	storageBucket: "spicyworld1912.appspot.com",
	messagingSenderId: "354673492841",
	appId: "1:354673492841:web:4a9b5aed841e74eca933f8",
	measurementId: "G-LTVV7R3DVT",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const store = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	await signInWithPopup(auth, provider);
};

export const createUserProfileDocument = async (userAuth, Additionaldata) => {
	if (!userAuth) return;

	const userRef = doc(store, `users/${userAuth.uid}`);

	const snapShot = await getDoc(userRef);

	if (!snapShot.exists()) {
		const { displayName, email, photoURL } = userAuth;
		const createdAt = serverTimestamp();

		try {
			await setDoc(userRef, {
				displayName,
				email,
				photoURL,
				createdAt,
				...Additionaldata,
			});
		} catch (e) {
			console.log("Error", e.message);
		}
	}
	return userRef;
};

export const sendAMessage = async message => {
	const messageRef = collection(store, "messages");
	await addDoc(messageRef, message);
};

export const sendAQuery = async query => {
	const queryRef = collection(store, "query");
	await addDoc(queryRef, query);
};
