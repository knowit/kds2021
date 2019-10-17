import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import config from './config'

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const app = firebase.apps[0] || null;

const functions = app.functions('europe-west1');

const auth = firebase.auth();

const firestore = firebase.firestore();

export {
    auth,
    firebase,
    firestore,
    functions
}
