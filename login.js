 /*document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

   if (user === "admin" && password === "1234") {
        alert("Login successful");
    } else {
        alert("Invalid credentials");
    }
});

document.querySelector('.change-password-btn').addEventListener('click', function() {
    alert("Change password functionality not implemented yet.");
});*/


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form submit default
    window.location.href = "https://eh-fiori-prd.ekahospital.com/fiori"; // Ganti dengan URL tujuan Anda
});