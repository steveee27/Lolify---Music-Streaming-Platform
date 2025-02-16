document
  .getElementById("signupButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern

    if (!username || !email || !password || !confirmPassword) {
      alert(
        "Please fill in all fields: username, email, password, and confirm password."
      );
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    document.cookie = `username=${username}`;
    document.cookie = `password=${password}`;

    // Perform any other validation or form submission here
    alert("Form submitted successfully.");
    location.replace("home.html");
  });
