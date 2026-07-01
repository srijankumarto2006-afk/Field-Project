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

// === PROFILE DROPDOWN MENU INTERACTION ===
const userBox = document.getElementById("userBox");
const profileMenu = document.getElementById("profileMenu");

if (userBox && profileMenu) {
    userBox.addEventListener("click", function (e) {
        e.stopPropagation();
        profileMenu.style.display = profileMenu.style.display === "block" ? "none" : "block";
    });
}

document.addEventListener("click", function () {
    if (profileMenu) profileMenu.style.display = "none";
});

if (document.getElementById("logoutBtn")) {
    document.getElementById("logoutBtn").addEventListener("click", logout);
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.clear();
    // Clear out the URL parameters so it reloads parameter-free
    window.location.href = window.location.origin + window.location.pathname;
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

if (document.getElementById("prof")) {
    document.getElementById("prof").addEventListener("click", () => {
        window.location.href = "../Delivery/profile.html";
    });
}

// === REAL-TIME VALIDATION ===
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

    if (createButton) createButton.disabled = !(isPasswordValid && isCheckboxChecked);
}

document.addEventListener("DOMContentLoaded", () => {
    // Target the outer container which holds the overflow restriction
    const sliderContainer = document.querySelector(".sliderssss");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Scroll by roughly one or two item widths (adjust as needed)
    const scrollAmount = 250; 

    const updateButtons = () => {
        const scrollLeft = sliderContainer.scrollLeft;
        const maxScroll = sliderContainer.scrollWidth - sliderContainer.clientWidth;

        // Enable/Disable checking with a 2px buffer for subpixel rounding issues
        prevBtn.disabled = scrollLeft <= 2;
        nextBtn.disabled = scrollLeft >= maxScroll - 2;
    };

    nextBtn.addEventListener("click", () => {
        sliderContainer.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    prevBtn.addEventListener("click", () => {
        sliderContainer.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    // Monitor scroll events to toggle button states dynamically
    sliderContainer.addEventListener("scroll", updateButtons);

    // Initial run to configure the 'previous' button state on load
    updateButtons();

    // Recalculate if the browser window changes sizes
    window.addEventListener("resize", updateButtons);
});

// -----------------------------New Page Further----------------------------------------------------
function goToDetails(index) {
    window.location.href = `details.html?id=${index}`;
}

// ================== GOOGLE SIGN IN & DYNAMIC REDIRECTION ==================
function getGoogleAuthUrl() {
    let currentPath = window.location.pathname;
    if (!currentPath || currentPath === "/") {
        currentPath = "/FRONTEND/index.html";
    }
    return `http://localhost:5051/api/auth/google?state=${encodeURIComponent(currentPath)}`;
}

const googleLoginBtn = document.getElementById("googleLoginBtn");
const googleSignupBtn = document.getElementById("googleSignupBtn");

if (googleLoginBtn) {
    googleLoginBtn.addEventListener("click", () => {
        window.location.href = getGoogleAuthUrl();
    });
}

if (googleSignupBtn) {
    googleSignupBtn.addEventListener("click", () => {
        window.location.href = getGoogleAuthUrl();
    });
}

// ================= UNIFIED SESSION INITIALIZATION =================
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const userDataString = urlParams.get('user');

    let currentUser = null;

    if (userDataString) {
        try {
            currentUser = JSON.parse(decodeURIComponent(userDataString));
            localStorage.setItem("user", JSON.stringify(currentUser));
            if (token) localStorage.setItem("token", token);
        } catch (e) {
            console.error("Error parsing Google redirect user data:", e);
        }
    } else {
        currentUser = JSON.parse(localStorage.getItem("user"));
    }

    if (currentUser) {
        const loginBox = document.getElementById("loginBox");
        const signupBox = document.getElementById("signupBox");
        const userBox = document.getElementById("userBox");
        const welcomeUser = document.getElementById("welcomeUser");
        const userPic = document.getElementById("userPic");

        if (loginBox) loginBox.classList.add("hidden");
        if (signupBox) signupBox.classList.add("hidden");
        if (userBox) userBox.classList.remove("hidden");

        if (currentUser.name && welcomeUser) {
            const firstName = currentUser.name.trim().split(" ")[0];
            welcomeUser.textContent = `Hi, ${firstName}`;
        }

        if (currentUser.picture && userPic) {
            userPic.src = currentUser.picture;
        }
    }
});