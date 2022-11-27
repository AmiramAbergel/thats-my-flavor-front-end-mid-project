// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configure Firebase.
const firebaseConfig = {
    apiKey: 'AIzaSyByPzK-UFFnLuZfpQKxpNXy5K7Bz3VODwM',
    authDomain: 'react-http-mid-project.firebaseapp.com',
    databaseURL: 'https://react-http-mid-project-default-rtdb.firebaseio.com',
    projectId: 'react-http-mid-project',
    storageBucket: 'react-http-mid-project.appspot.com',
    messagingSenderId: '740639358683',
    appId: '1:740639358683:web:b5eb59d89a5852b81556fe',
    measurementId: 'G-767F59E57H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
