import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const APIKEY = process.env.REACT_APP_APIKEY;
const AUTHDOMAIN = process.env.REACT_APP_AUTHDOMAIN;
const PROJECTID = process.env.REACT_APP_PROJECTID;
const STORAGEBUCKET = process.env.REACT_APP_STORAGEBUCKET;
const MESSAGINGSENDERID = process.env.REACT_APP_MESSAGINGSENDERID;
const APPID = process.env.REACT_APP_APPID;
console.log(APIKEY)
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINGSENDERID,
    appId: APPID,
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
); 
