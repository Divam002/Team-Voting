import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDDcKvidQ_IGNe1DTf6c0zd8DTfnfdMzMw",
    authDomain: "project-67-f30f6.firebaseapp.com",
    projectId: "project-67-f30f6",
    storageBucket: "project-67-f30f6.appspot.com",
    messagingSenderId: "899167275012",
    appId: "1:899167275012:web:fb459d4033af7ef0cc0d51"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// exporting firebase
export default firebase.database();