import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNfEp-VWJPbUSeualfKjI9O7K6CpLNZ6E",
  authDomain: "facebook-clone-21df6.firebaseapp.com",
  projectId: "facebook-clone-21df6",
  storageBucket: "facebook-clone-21df6.appspot.com",
  messagingSenderId: "438799331630",
  appId: "1:438799331630:web:c332a63313c3e524ea4abf",
  measurementId: "G-9BKC1W9XWQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
