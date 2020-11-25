import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDRL0lDS3_0P40b1_qMcC4R2rfBl0iiJI8",
    authDomain: "chatapp-70069.firebaseapp.com",
    databaseURL: "https://chatapp-70069.firebaseio.com",
    projectId: "chatapp-70069",
    storageBucket: "chatapp-70069.appspot.com",
    messagingSenderId: "814440736301",
    appId: "1:814440736301:web:5b60d1cc999d5a41a27aa4"
  };
 
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};