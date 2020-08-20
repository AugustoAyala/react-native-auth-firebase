import * as firebase from "firebase";
import "firebase/firebase-firestore";

const firebaseConf = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConf);
    this.auth = firebase.auth();
  }
  getUser = () => {
    return this.auth.currentUser.displayName;
  };
  login = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };
  createAccount = async (name, email, password) => {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  };
}

const firebaseService = new Firebase();

export default firebaseService;
