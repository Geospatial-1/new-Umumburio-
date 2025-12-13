import { watchAuth, getUserRole } from "./auth.js";

export function protectPage(requiredRole) {
  watchAuth(async (user) => {
    if (!user) {
      window.location.href = "login.html";
      return;
    }

    const role = await getUserRole(user.uid);

    if (role !== requiredRole) {
      alert("Access denied");
      window.location.href = "index.html";
    }
  });
}
