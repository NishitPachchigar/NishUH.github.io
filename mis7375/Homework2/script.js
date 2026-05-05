// function to review form information
function reviewForm() {
    let fname = document.getElementById("fname").value;
    let midname = document.getElementById("midname").value;
    let lname = document.getElementById("lname").value;
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value;
    let emergency = document.getElementById("emergency-contact").value;
    let add1 = document.getElementById("add1").value;
    let city = document.getElementById("city").value;
    let zipcode = document.getElementById("zipcode").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let insurance = document.querySelector('input[name="insurance"]:checked')?.value;
    let comments = document.getElementById("comments").value;
    let userId = document.getElementById("userId").value;
    let email = document.getElementById("email").value;

    let vaccinated = document.querySelector('input[name="vaccinated"]:checked')?.value;

    let diseases = [];
    document.querySelectorAll('input[name="disease"]:checked').forEach(el => {
        diseases.push(el.value);
    });

    let health = document.getElementById("health-scale").value;

    let reviewText = `
    <table border="1">
        <tr><td>First Name</td><td>${fname}</td></tr>
        <tr><td>Last Name</td><td>${lname}</td></tr>
        <tr><td>DOB</td><td>${dob}</td></tr>
        <tr><td>Phone</td><td>${phone}</td></tr>
        <tr><td>Email</td><td>${email}</td></tr>
        <tr><td>City</td><td>${city}</td></tr>
        <tr><td>State</td><td>${state}</td></tr>
        <tr><td>Address</td><td>${add1}</td></tr>
        <tr><td>Insurance</td><td>${insurance}</td></tr>
        <tr><td>Comments</td><td>${comments}</td></tr>
        <tr><td>User ID</td><td>${userId}</td></tr>
        <tr><td>Vaccinated</td><td>${vaccinated}</td></tr>
        <tr><td>Diseases</td><td>${diseases.join(", ")}</td></tr>
        <tr><td>Health</td><td>${health}</td></tr>
    </table>
    `;

    document.getElementById("reviewInformation").innerHTML = reviewText;
}
// password validation function
function validatePassword() {
    let pwd = document.getElementById("password").value;
    let confirm = document.getElementById("confirm-password").value;

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^&*()\-_=+]).{8,30}$/;

    if (!regex.test(pwd)) {
        alert("Password must include uppercase, lowercase, number, special character");
        return false;
    }

    if (pwd !== confirm) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}
// turns the userID into lower case
window.onload = function() {
    document.getElementById("userId").addEventListener("input", function() {
        this.value = this.value.toLowerCase();
    });
};