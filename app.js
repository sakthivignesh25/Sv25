// Firebase Config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Fetch Products
db.collection("products").get().then((snapshot) => {
    let productList = document.getElementById("products");
    snapshot.docs.forEach(doc => {
        let data = doc.data();
        let productDiv = document.createElement("div");
        productDiv.innerHTML = `<h2>${data.name}</h2><p>Price: $${data.price}</p>`;
        productList.appendChild(productDiv);
    });
});// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhQR5fI6ifNzafPaEfdD_Ij4lA62AOXdU",
  authDomain: "sakthi-afda6.firebaseapp.com",
  projectId: "sakthi-afda6",
  storageBucket: "sakthi-afda6.firebasestorage.app",
  messagingSenderId: "201937718923",
  appId: "1:201937718923:web:cc875018b4bfab70948e8e",
  measurementId: "G-FLC6TDZGF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

