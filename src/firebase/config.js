  import * as firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBTdrOkf49eAvUOcJjG6yT1a3yHtAm1_2k",
    authDomain: "cat-firegram.firebaseapp.com",
    databaseURL: "https://cat-firegram.firebaseio.com",
    projectId: "cat-firegram",
    storageBucket: "cat-firegram.appspot.com",
    messagingSenderId: "185350376148",
    appId: "1:185350376148:web:98810e1e953370d2358941"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };