import { login } from "./auth.js";


const btn = document.getElementById("loginBtn");


btn.addEventListener("click", async () => {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;


try {
await login(email, password);
window.location.href = "dashboard.html";
} catch (e) {
document.getElementById("error").textContent = e.message;
}
});
