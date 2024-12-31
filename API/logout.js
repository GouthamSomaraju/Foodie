
    import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

    // Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyA4MvrK7a2o-UZ2yIvhzfpEJKtUcIJVF2E",
      authDomain: "food-recipe-e3888.firebaseapp.com",
      projectId: "food-recipe-e3888",
      storageBucket: "food-recipe-e3888.appspot.com",
      messagingSenderId: "479682801897",
      appId: "1:479682801897:web:de37363b938d7bfb800078",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      document.getElementById("userName").textContent = `${userData.firstName} ${userData.lastName}`;
    //   document.getElementById("userEmail").textContent = userData.email;
    } else {
      alert("No user data found. Please log in again.");
      window.location.href = "../index.html";
    }

    // Logout function
    const logoutBtn = document.getElementById("logout-button");
    logoutBtn.addEventListener("click", async () => {
      try {
        // Sign out from Firebase
        await signOut(auth);
        
        // Clear localStorage
        localStorage.removeItem("userData");
        
        // Redirect to Main page
        window.location.href = "../index.html";
      } catch (error) {
        console.error("Error logging out:", error.message);
        // Redirect to Main page
        window.location.href = "../index.html";
      }
    });
