// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCj1UF8SuAtSx4HhQZ2yMuwIO3rd2PnFmM',
  authDomain: 'ema-john-simple-9855d.firebaseapp.com',
  projectId: 'ema-john-simple-9855d',
  storageBucket: 'ema-john-simple-9855d.appspot.com',
  messagingSenderId: '916745479322',
  appId: '1:916745479322:web:636365e7719850d3e6eb23',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
