import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyDMMidHRCvtAb25JE-WyAeG0W6PvZmRtNc",
    authDomain: "angula-4308e.firebaseapp.com",
    databaseURL: "https://angula-4308e.firebaseio.com",
    projectId: "angula-4308e",
    storageBucket: "angula-4308e.appspot.com",
    messagingSenderId: "536634131867"
};
const fire = firebase.initializeApp(config);
export default fire.database().ref('react-riot-score');