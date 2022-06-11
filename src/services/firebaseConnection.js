import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyA1_flkBjHIjqryD98YsRRmIx1g1ut8x_o",
  authDomain: "tarefasrjs.firebaseapp.com",
  projectId: "tarefasrjs",
  storageBucket: "tarefasrjs.appspot.com",
  messagingSenderId: "910220691023",
  appId: "1:910220691023:web:163d9f7abba361fdee0c3a",
  measurementId: "G-FXPLTKFHJ6"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;