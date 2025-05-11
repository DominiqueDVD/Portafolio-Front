import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyACrsr_yju8IL8OFW_eU9rsOu86aPxSY6o",
  authDomain: "portafolio-7318f.firebaseapp.com",
  projectId: "portafolio-7318f",
  storageBucket: "portafolio-7318f.firebasestorage.app",
  messagingSenderId: "401628753323",
  appId: "1:401628753323:web:4a269b75d3ed111b7d76ee",
  measurementId: "G-ZEVNC0B0D6"
};


const app = initializeApp(firebaseConfig);

let analytics: ReturnType<typeof getAnalytics> | null = null;

isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
    console.log("Analytics enabled");
  } else {
    console.warn("Analytics no soportado en este entorno");
  }
});

export { app, analytics };
