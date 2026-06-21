console.log("JS LOADED");
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    window.location.href = card.getAttribute("data-link");
  });
});

// Close Login Modal
document.getElementById("loginclose").addEventListener("click", () => {
   document.getElementById("lay").classList.add("hidden");
});

// Close Signup Modal
document.getElementById("signclose").addEventListener("click", () => {
   document.getElementById("overfull").classList.add("hidden");
});

// Open Login Modal
document.getElementById("login").addEventListener("click", () => {
   document.getElementById("lay").classList.remove("hidden");
});

// Open Signup Modal
document.getElementById("sign").addEventListener("click", () => {
   document.getElementById("overfull").classList.remove("hidden");
});

// Switch from Login Modal to Signup Modal
// Replace "create" with the actual ID of your "Create account" button text link
document.getElementById("create").addEventListener("click", () => {
   document.getElementById("lay").classList.add("hidden");      // Hides login safely
   document.getElementById("overfull").classList.remove("hidden"); // Shows signup
});

document.getElementById("newlogin").addEventListener("click", () => {
   document.getElementById("overfull").classList.add("hidden");      // Hides login safely
   document.getElementById("lay").classList.remove("hidden"); // Shows signup
});