import firebase from 'firebase'
const firebaseApp = firebaseinitializeApp( {
    apiKey: "AIzaSyDl0qsWiN_h_ZpIOfEtct2USxfPlpJLJIc",
    authDomain: "clone-510c3.firebaseapp.com",
    projectId: "clone-510c3",
    storageBucket: "clone-510c3.appspot.com",
    messagingSenderId: "173511533070",
    appId: "1:173511533070:web:d4278aa7febd0b55a7525f",
    measurementId: "G-9T809SJRJF"
  });
  
  const auth = firebase.auth()
  export { auth }