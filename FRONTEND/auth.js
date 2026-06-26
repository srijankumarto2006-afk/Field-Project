window.addEventListener("DOMContentLoaded", () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {

        document.getElementById("loginBox").classList.add("hidden");
        document.getElementById("signupBox").classList.add("hidden");
        document.getElementById("userBox").classList.remove("hidden");

        document.getElementById("welcomeUser").textContent = user.name;

    }

});