import firebase from 'firebase';

/*eslint-disable*/

const config = {
  apiKey: "AIzaSyCnxkfDebv87e6lOfEeAi8Ny6FJrTrjK58",
  authDomain: "capstone-76dfb.firebaseapp.com",
  databaseURL: "https://capstone-76dfb.firebaseio.com",
  projectId: "capstone-76dfb",
  storageBucket: "capstone-76dfb.appspot.com",
  messagingSenderId: "569158019460"
};
const fire = firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;