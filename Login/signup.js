// Script for Show Password
let password = document.getElementById("password");
      let checkbox = document.getElementById("checkbox");
      let showPassword = document.getElementById("getPassword");

      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          password.type = "text";
          showPassword.textContent = "Hide Password";
        } else {
          password.type = "password";
          showPassword.textContent = "Show Password";
        }
      });