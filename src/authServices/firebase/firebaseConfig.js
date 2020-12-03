import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCXhYAqg2PEjNe7LYEo4NHna88k627Q43s",
    authDomain: "benchmarkfitlab-db.firebaseapp.com",
    databaseURL: "https://benchmarkfitlab-db.firebaseio.com",
    projectId: "benchmarkfitlab-db",
    storageBucket: "benchmarkfitlab-db.appspot.com",
    messagingSenderId: "795083787904",
    appId: "1:795083787904:web:71f34fc3753b880063a065",
    measurementId: "G-GXXV5FGYH7"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;