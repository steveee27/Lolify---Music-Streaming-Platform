document
  .getElementById("signinButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (!username || !password) {
      alert("Please fill in both username and password.");
      return;
    }

    // Perform any other validation or form submission here
    console.log(document.cookie);
    const cookie = document.cookie.split(";");
    const id = cookie[0].split("=")[1];
    const pass = cookie[1].split("=")[1];
    if (username != id) {
      alert("Username Wrong");
      return;
    }
    if (password != pass) {
      alert("Password Wrong");
    }
    alert("Form submitted successfully.");
    location.replace("home.html");
  });
