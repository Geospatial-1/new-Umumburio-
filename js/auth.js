import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from "./firebase.js";


export async function login(email, password) {
return signInWithEmailAndPassword(auth, email, password);
}
