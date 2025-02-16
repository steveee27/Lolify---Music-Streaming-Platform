document
  .getElementById("confirmButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (!username || !password || !confirmPassword) {
      alert(
        "Please fill in all fields: username, password, and confirm password."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // Perform any other validation or form submission here
    alert("Password reset successfully.");
    location.replace("profile.html");
  });
