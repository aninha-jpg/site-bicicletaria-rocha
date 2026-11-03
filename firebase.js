
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC1_x1VAwssLWTgmpHvpfBeCWsMqWZ9PZc",
  authDomain: "bicicletaria-rocha.firebaseapp.com",
  projectId: "bicicletaria-rocha",
  storageBucket: "bicicletaria-rocha.firebasestorage.app",
  messagingSenderId: "573230263841",
  appId: "1:573230263841:web:b3e57db567f4c62d1e3d60",
  measurementId: "G-SCEBC1W6LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);