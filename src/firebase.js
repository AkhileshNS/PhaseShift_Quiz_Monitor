import firebase from 'firebase/app';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyA_1pWhcYJ3-29XIpeeYvVkIw2LHJKQa0k",
    authDomain: "phaseshift-44bbc.firebaseapp.com",
    databaseURL: "https://phaseshift-44bbc.firebaseio.com",
    projectId: "phaseshift-44bbc",
    storageBucket: "phaseshift-44bbc.appspot.com",
    messagingSenderId: "267151394963"
};

firebase.initializeApp(config);
export default firebase;