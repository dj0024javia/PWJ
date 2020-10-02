import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxWB80DhHMTI768Pl7Pyu7bhwUjb9LoRs",
    authDomain: "api-test-b307b.firebaseapp.com",
    databaseURL: "https://api-test-b307b.firebaseio.com",
    projectId: "api-test-b307b",
    storageBucket: "api-test-b307b.appspot.com",
    messagingSenderId: "667914983512",
    appId: "1:667914983512:web:d96f85d44a6ced7872922d",
    measurementId: "G-75YMP5JTS9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
