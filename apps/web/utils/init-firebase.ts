import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "calendoo-abde5.firebaseapp.com",
  projectId: "calendoo-abde5",
  storageBucket: "calendoo-abde5.appspot.com",
  messagingSenderId: "421661295459",
  appId: "1:421661295459:web:0823c00e835c082e698956",
  measurementId: "G-3TQ80B8MVP",
};

export const initFirebase = () => {
  console.log("inititializing firebase");

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  connectAuthEmulator(
    auth,
    process.env.NEXT_PUBLIC_AUTH_EMULATOR_HOST as string
  );
};
