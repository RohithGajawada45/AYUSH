import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import 'firebase/auth'; // Ensure you import the authentication module

const firebaseConfig = {
  // Your Firebase configuration from the Firebase Console
  apiKey: "AIzaSyDsADVIfr0j8XI5QbAwTcH-Q9weyM7q1Ps",
  authDomain: "react-auth-b3aaa.firebaseapp.com",
  projectId: "react-auth-b3aaa",
  storageBucket: "react-auth-b3aaa.appspot.com",
  messagingSenderId: "1037241301128",
  appId: "1:1037241301128:web:4d0d3d26172fe8e42c073d"
};

initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
