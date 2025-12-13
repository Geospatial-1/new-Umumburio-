btn.addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    document.getElementById("error").textContent = "Email and password required";
    return;
  }

  try {
    await login(email, password);
    window.location.href = "dashboard.html";
  } catch (e) {
    console.error(e.code);
    document.getElementById("error").textContent =
      e.code === "auth/invalid-login-credentials"
        ? "Wrong email or password"
        : e.message;
    import { logout } from "./auth.js";

window.logoutUser = logout
  ;
  }
});
