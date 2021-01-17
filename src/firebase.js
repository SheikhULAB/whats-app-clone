import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAt0zPBiZnOFy86sXFX62wj4di3OB0qPIA",
    authDomain: "whats-app-clone-5b004.firebaseapp.com",
    projectId: "whats-app-clone-5b004",
    storageBucket: "whats-app-clone-5b004.appspot.com",
    messagingSenderId: "530250973603",
    appId: "1:530250973603:web:ce070b87db1da6c6e61a16"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;

