// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
