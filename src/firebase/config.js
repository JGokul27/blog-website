import {initializeApp} from 'firebase/app'
import{ getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCa4DyhrEG8nToCrBjDPC22pHkzPCyX0fc",
    authDomain: "blog-517f3.firebaseapp.com",
    projectId: "blog-517f3",
    storageBucket: "blog-517f3.appspot.com",
    messagingSenderId: "778164656693",
    appId: "1:778164656693:web:f0fd8bd6c1e677f0af6f7c"
  };

  initializeApp(firebaseConfig)

  const db = getFirestore()

  const auth = getAuth()

  export{db, auth}