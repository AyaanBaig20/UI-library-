
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "ui-library-e188d.firebaseapp.com",
  projectId: "ui-library-e188d",
  storageBucket: "ui-library-e188d.firebasestorage.app",
  messagingSenderId: "483830043054",
  appId: "1:483830043054:web:650c9d61683948e2af383f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}