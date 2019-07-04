import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDLPu0rVo9dAOxuoMvx997J5ViR_ZRN90w",
    authDomain: "react-chat-app-831be.firebaseapp.com",
    databaseURL: "https://react-chat-app-831be.firebaseio.com",
    projectId: "react-chat-app-831be",
    storageBucket: "react-chat-app-831be.appspot.com",
    messagingSenderId: "757106979021",
    appId: "1:757106979021:web:c3eadc3e3591f1db"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase;