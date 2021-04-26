import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyBg3CzZF2S2yYIHwcXXX1kn52OnOfUzcMc",
  authDomain: "commercewebsite-78f60.firebaseapp.com",
  projectId: "commercewebsite-78f60",
  storageBucket: "commercewebsite-78f60.appspot.com",
  messagingSenderId: "628756833330",
  appId: "1:628756833330:web:c6b11f41c853da7a51082b",
  measurementId: "G-J6S6772153",
};

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt :"select_account"});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export const createUserProfileDocument= async (userAuth,additionalDeta)=>{
    if(!userAuth) return;
    else {
      const userRef=firestore.doc(`users/${userAuth.uid}`)
      const snapShot= await userRef.get();
      if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalDeta
          })
        } catch (error) {
          console.log(error.message)
        }
      }
      return userRef;
    }
  }

  export default firebase;