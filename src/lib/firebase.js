import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCruUbQsrVQ3hx6wKUFd-FJIxH7L0wBZx0",
    authDomain: "eli-nstagram.firebaseapp.com",
    projectId: "eli-nstagram",
    storageBucket: "eli-nstagram.appspot.com",
    messagingSenderId: "391739955637",
    appId: "1:391739955637:web:075b2e3d16083439c4e1fc",
    measurementId: "G-HC8RKZBX9F"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
