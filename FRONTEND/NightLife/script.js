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

// // ---------------------------------------------------------------backend  code------------------------------------------

    // Hardcoded to port 6000 so it NEVER looks for port 5051 again
    const BACKEND_URL = "http://127.0.0.1:5051/api/auth";

    async function signupUser() {
        if (window.event) window.event.preventDefault();

        const nameEl = document.getElementById("signupName");
        const emailEl = document.getElementById("signupEmail");
        const passwordEl = document.getElementById("signupPassword");

        if (!nameEl || !emailEl || !passwordEl) {
            alert("❌ Frontend Error: Input fields missing in HTML.");
            return;
        }

        const name = nameEl.value.trim();
        const email = emailEl.value.trim();
        const password = passwordEl.value.trim();

        if (!name || !email || !password) {
            alert("⚠️ Please fill out all fields.");
            return;
        }

        try {
            const response = await fetch(`${BACKEND_URL}/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (data.success) {
                alert("🎉 Account Created Successfully! Please login.");
                nameEl.value = "";
                emailEl.value = "";
                passwordEl.value = "";
                if (typeof closeSignup === "function") closeSignup();
                if (typeof openLogin === "function") openLogin();
            } else {
                alert("❌ Signup Failed: " + data.message);
            }
        } catch (error) {
            console.error(error);
            alert("🌐 Network Error: Browser cannot talk to port 5051. Make sure your terminal is active!");
        }
    }

   

async function loginUser() {

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    try {

        const response = await fetch(`${BACKEND_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();

        if(data.success){

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            // alert(`Welcome ${data.user.name} 🎉`);

            location.reload();

        }else{

            alert(data.message);

        }

    } catch(err){

        console.log(err);
        alert("Server Error");

    }

}




window.addEventListener("DOMContentLoaded", () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if(user){

        document.getElementById("loginBox").classList.add("hidden");
        document.getElementById("signupBox").classList.add("hidden");
        document.getElementById("userBox").classList.remove("hidden");

        document.getElementById("welcomeUser").textContent = user.name;

    }

});
const userBox = document.getElementById("userBox");
const profileMenu = document.getElementById("profileMenu");

userBox.addEventListener("click", function (e) {

    e.stopPropagation();

    profileMenu.style.display =
        profileMenu.style.display === "block" ? "none" : "block";

});


document.addEventListener("click", function () {

    profileMenu.style.display = "none";

});
document.getElementById("logoutBtn").addEventListener("click", logout);

function logout(){

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    location.reload();

}

  const checkbox = document.getElementById("agreeTerms");
const createBtn = document.getElementById("createBtn");

checkbox.addEventListener("change", function () {

    if (this.checked) {
        createBtn.classList.add("active");
        createBtn.disabled = false;
    } else {
        createBtn.classList.remove("active");
        createBtn.disabled = true;
    }

});

document.getElementById("prof").addEventListener("click",()=>{
      window.location.href = "../Delivery/profile.html";
})
// Get DOM elements
const passwordInput = document.getElementById('signupPassword');
const agreeCheckbox = document.getElementById('agreeTerms');
const createButton = document.getElementById('createBtn');

// Add event listeners to validate in real-time
passwordInput.addEventListener('input', validateForm);
agreeCheckbox.addEventListener('change', validateForm);

function isPasswordStrong(password) {
    // Criteria: Min 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
}

function validateForm() {
    const password = passwordInput.value;
    const isPasswordValid = isPasswordStrong(password);
    const isCheckboxChecked = agreeCheckbox.checked;
    const reqMessage = document.getElementById('password-requirements');

    // Provide visual feedback for the password
    if (password === "") {
        reqMessage.textContent = "";
    } else if (!isPasswordValid) {
        reqMessage.textContent = "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
        reqMessage.style.color = "#ff4d4d";
    } else {
        reqMessage.textContent = "Strong password! ✓";
        reqMessage.style.color = "#2ecc71";
    }

    // Toggle button
    createButton.disabled = !(isPasswordValid && isCheckboxChecked);
}