import firebase  from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyASgE6mDV3lg1fI978b9ZWM8SU29pekGmI",
  authDomain: "planes-ecf19.firebaseapp.com",
  databaseURL: "https://planes-ecf19-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "planes-ecf19",
  storageBucket: "planes-ecf19.appspot.com",
  messagingSenderId: "530113525107",
  appId: "1:530113525107:web:f03d4463b5c1ab8abfc106",
  measurementId: "G-TXMBP1NHHH"
}

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;