import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA5Ph64-K8_a4l-oAUVw1ZbTDBh5rmi2js',
  authDomain: 'react-firebase-crud-718c2.firebaseapp.com',
  projectId: 'react-firebase-crud-718c2',
  storageBucket: 'react-firebase-crud-718c2.appspot.com',
  messagingSenderId: '682495490299',
  appId: '1:682495490299:web:2c1df08e28969f7358985e',
}

const app = initializeApp(firebaseConfig) // Initialize Firebase

export const db = getFirestore(app)
