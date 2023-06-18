// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.APIKEY,
	authDomain: process.env.AUTHDOMAIN,
	storageBucket: process.env.STORAGEBUCKET,
	messagingSenderId: process.env.MESSAGINGSENDERID,
	appId: process.env.APPID,
	// projectId: process.env.PID,

	// apiKey: "AIzaSyB0gX01lN2Igcg655t2yeGTsBrFOtSVHc0",
	// authDomain: "lineoa-de21f.firebaseapp.com",
	projectId: "lineoa-de21f",
	// storageBucket: "lineoa-de21f.appspot.com",
	// messagingSenderId: "1011967970015",
	// appId: "1:1011967970015:web:f0d935ad7556edb163376a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
