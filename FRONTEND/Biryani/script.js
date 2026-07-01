// Hardcoded Backend Base URL
const BACKEND_URL = "http://127.0.0.1:5051/api/auth";

document.addEventListener("DOMContentLoaded", () => {
    // ========================================================
    // 1. Dynamic URL Token Extraction & Persistent Session Sync
    // ========================================================
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const userDataString = urlParams.get('user');

    let user = null;

    if (userDataString) {
        try {
            // Extract the user object sent via Google redirect callback loop
            user = JSON.parse(decodeURIComponent(userDataString));
            
            // Save the active session configuration variables securely in localStorage
            localStorage.setItem("user", JSON.stringify(user));
            if (token) localStorage.setItem("token", token);
            
            // Instantly clean up the browser address bar to hide sensitive token paths
            window.history.replaceState({}, document.title, window.location.pathname);
        } catch (e) {
            console.error("Error parsing Google redirect user object data payload:", e);
        }
    } else {
        // Fallback: Read regular or existing active login session parameters from localStorage
        user = JSON.parse(localStorage.getItem("user"));
    }
    
    // 2. Fetch DOM elements safely
    const loginBox = document.getElementById("loginBox");
    const signupBox = document.getElementById("signupBox");
    const userBox = document.getElementById("userBox");
    const welcomeUser = document.getElementById("welcomeUser");
    const profileMenu = document.getElementById("profileMenu");
    const logoutBtn = document.getElementById("logoutBtn");
    const profBtn = document.getElementById("prof");

    // ========================================================
    // 3. UI State Updates Based on Authentication
    // ========================================================
    if (user) {
        if (loginBox) loginBox.style.display = "none";
        if (signupBox) signupBox.style.display = "none";
        
        if (userBox) {
            userBox.classList.remove("hidden");
            userBox.style.setProperty("display", "flex", "important"); 
        }
        
        // Sync the Google user profile name in the welcome message header
        if (welcomeUser && user.name) {
            welcomeUser.textContent = user.name;
        }

        // ✅ FIX: Find the standard layout profile icon and update it with the Google image!
        if (user.picture) {
            const navAvatar = document.querySelector(".user-icon");
            if (navAvatar) {
                navAvatar.src = user.picture;
                navAvatar.style.borderRadius = "50%"; // Keeps the image round
                navAvatar.style.objectFit = "cover";   // Prevents picture squishing
            }
        }
    } else {
        // If no user is logged in, reset back to login states
        if (userBox) userBox.style.display = "none";
        if (loginBox) loginBox.style.display = "flex";
        if (signupBox) signupBox.style.display = "flex";
    }

    // 4. Profile Dropdown Menu Toggling
    if (userBox && profileMenu) {
        userBox.addEventListener("click", function (e) {
            e.stopPropagation();
            profileMenu.style.display = profileMenu.style.display === "block" ? "none" : "block";
        });

        // Close menu clicking anywhere else on document
        document.addEventListener("click", function () {
            profileMenu.style.display = "none";
        });
    }

    // 5. Profile Redirection Handler
    if (profBtn) {
        profBtn.addEventListener("click", () => {
            window.location.href = "/FRONTEND/Delivery/profile.html";
        });
    }

    // 6. Logout Execution & Redirect to Delivery Home
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            // Clear user data completely from browser storage
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            // Redirect smoothly back to the main delivery index page
            window.location.href = "/FRONTEND/Delivery/index.html";
        });
    }
});

// ========================================================
// Modal Controls & Form Event Listeners
// ========================================================

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
document.getElementById("create").addEventListener("click", () => {
   document.getElementById("lay").classList.add("hidden");      // Hides login safely
   document.getElementById("overfull").classList.remove("hidden"); // Shows signup
});

document.getElementById("newlogin").addEventListener("click", () => {
   document.getElementById("overfull").classList.add("hidden");      // Hides signup safely
   document.getElementById("lay").classList.remove("hidden"); // Shows login
});

// Setup dynamic button triggers for Google Redirect
const googleLoginBtn = document.getElementById("googleLoginBtn");
const googleSignupBtn = document.getElementById("googleSignupBtn");

function redirectToGoogle() {
    const currentPath = window.location.pathname; 
    // Securely routes backend context with path state markers appended
    window.location.href = `http://localhost:5051/api/auth/google?state=${encodeURIComponent(currentPath)}`;
}

if (googleLoginBtn) googleLoginBtn.addEventListener("click", redirectToGoogle);
if (googleSignupBtn) googleSignupBtn.addEventListener("click", redirectToGoogle);

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
            document.getElementById("overfull").classList.add("hidden");
            document.getElementById("lay").classList.remove("hidden");
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
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if(data.success){
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            location.reload();
        } else {
            alert(data.message);
        }
    } catch(err){
        console.log(err);
        alert("Server Error");
    }
}

const checkbox = document.getElementById("agreeTerms");
const createBtn = document.getElementById("createBtn");

if (checkbox && createBtn) {
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            createBtn.classList.add("active");
            createBtn.disabled = false;
        } else {
            createBtn.classList.remove("active");
            createBtn.disabled = true;
        }
    });
}

// Get DOM elements for Validation
const passwordInput = document.getElementById('signupPassword');
const agreeCheckbox = document.getElementById('agreeTerms');
const createButton = document.getElementById('createBtn');

if (passwordInput && agreeCheckbox && createButton) {
    passwordInput.addEventListener('input', validateForm);
    agreeCheckbox.addEventListener('change', validateForm);
}

function isPasswordStrong(password) {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
}

function validateForm() {
    if (!passwordInput || !agreeCheckbox || !createButton) return;
    
    const password = passwordInput.value;
    const isPasswordValid = isPasswordStrong(password);
    const isCheckboxChecked = agreeCheckbox.checked;
    const reqMessage = document.getElementById('password-requirements');

    if (password === "") {
        if (reqMessage) reqMessage.textContent = "";
    } else if (!isPasswordValid) {
        if (reqMessage) {
            reqMessage.textContent = "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
            reqMessage.style.color = "#ff4d4d";
        }
    } else {
        if (reqMessage) {
            reqMessage.textContent = "Strong password! ✓";
            reqMessage.style.color = "#2ecc71";
        }
    }

    createButton.disabled = !(isPasswordValid && isCheckboxChecked);
}