import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCt0FiUzgcpS1dJ2xJDiWVXx0rL0UVGsiA",
    authDomain: "pinterest-clone-17472.firebaseapp.com",
    databaseURL: "https://pinterest-clone-17472.firebaseio.com",
    projectId: "pinterest-clone-17472",
    storageBucket: "",
    messagingSenderId: "148421383634"
};
var fire = firebase.initializeApp(config);
export default fire;