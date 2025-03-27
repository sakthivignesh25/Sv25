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
});
