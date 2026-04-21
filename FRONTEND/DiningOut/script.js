console.log("JS LOADED");
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    window.location.href = card.getAttribute("data-link");
  });
});

function openLogin() {
    document.getElementById("overlay").style.display = "flex";
}

function closeLogin() {
    document.getElementById("overlay").style.display = "none";
}

function openSignup() {
    document.getElementById("over").style.display = "flex";
}

function closeSignup() {
    document.getElementById("over").style.display = "none";
}