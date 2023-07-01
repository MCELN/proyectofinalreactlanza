import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB22NlBWVZY0yVONqvyYQ00a_uOWSln47U",
    authDomain: "fragrancias-de-nicho.firebaseapp.com",
    projectId: "fragrancias-de-nicho",
    storageBucket: "fragrancias-de-nicho.appspot.com",
    messagingSenderId: "336528393636",
    appId: "1:336528393636:web:68858a1754773c1eb32d31"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
