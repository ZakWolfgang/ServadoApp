// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBATqd12HWAYEIyblDN9As-hhJsCEMLN6g",
  authDomain: "project-4921f.firebaseapp.com",
  projectId: "project-4921f",
  storageBucket: "project-4921f.appspot.com",
  messagingSenderId: "720796949025",
  appId: "1:720796949025:web:f3dcc95d03d85c79632160"
};

// Initialize Firebase
let app; 
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()


export { auth }