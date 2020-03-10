import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  var config = {
    apiKey: "AIzaSyBVqXm4aVRc99q-G01mNdcDCA0sD8TG-cE",
    authDomain: "news-feed-762c4.firebaseapp.com",
    databaseURL: "https://news-feed-762c4.firebaseio.com",
    projectId: "news-feed-762c4",
    storageBucket: "news-feed-762c4.appspot.com",
    messagingSenderId: "163784427828",
    appId: "1:163784427828:web:bc520973a4754593c53d61",
    measurementId: "G-6TZTBLJQ2V"
  };
  firebase.initializeApp(config);
  // firebase.firestore().settings({
  //   timestampsInSnapshots: true
  // });
}

const db = firebase.firestore();

export default db;
