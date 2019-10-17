import admin from 'firebase-admin';

if (!admin.apps.length) {
    admin.initializeApp();
}
export default admin.firestore();
