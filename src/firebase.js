import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBnACHKx4gxDC-M4cOgCDVnRUv6_U0gU5U",
    authDomain: "tripplustesting.firebaseapp.com",
    projectId: "tripplustesting",
    storageBucket: "tripplustesting.appspot.com",
    messagingSenderId: "197072021856",
    appId: "1:197072021856:web:2e82049a3563ff81e41605"
};
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
