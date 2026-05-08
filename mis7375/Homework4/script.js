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

// password field validation function
function validatePassword(){
    let pwd = document.getElementById("password").value;
    let error = document.getElementById("password-error");
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,30}$/;
    if(!regex.test(pwd)){
        error.textContent = "Must contain uppercase, lowercase, number, min 8 chars";
        return false;
    }
    error.textContent = "";
    return true;
}

// Confirm password field validation function 
function validateConfirmPassword(){
    let pwd = document.getElementById("password").value;
    let confirm = document.getElementById("confirm-password").value;
    let error = document.getElementById("confirm-error");
    if(pwd !== confirm){
        error.textContent = "Passwords do not match";
        return false;
    }
    error.textContent = "";
    return true;
}

// First name field validation function
function validateFirstName(){
    let fname = document.getElementById("fname").value;
    let error = document.getElementById("fname-error");
    let regex = /^[A-Za-z'-]{1,30}$/;
    if(!regex.test(fname)){
        error.textContent ="PLease enter valid First name. Maximum 30 characters including letters, apostrophes, and dashes allowed";
        return false;
    }
    error.textContent = "";
    return true;
}

// Last name field  validation function 
function validateLastName() {
    let lname = document.getElementById("lname").value;
    let error = document.getElementById("lname-error");
    let regex = /^[A-Za-z'-]{1,30}$/;
    if(!regex.test(lname)){
        error.textContent = "Please enter valid last name.";
        return false;
    }
    error.textContent = "";
    return true;
}

// Email filed validation function 
function validateEmail(){
    let email = document.getElementById("email");
    let error = document.getElementById("email-error");
    email.value = email.value.toLowerCase();
    let regex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
    if(!regex.test(email.value)){
        error.textContent = "Please enter valid email.";
        return false;
    }
    error.textContent = "";
    return true;
}

// Phone firled validation function 
function validatePhone(){
    let phone = document.getElementById("phone").value;
    let error = document.getElementById("phone-error");
    let regex = /^\d{3}-\d{3}-\d{4}$/;
    if(!regex.test(phone)){
        error.textContent = "Please enter phone number in the Format: 123-456-7890";
        return false;
    }
    error.textContent = "";
    return true;
}

// function to format SSN as input from user
function formatSSN(){
    let ssn = document.getElementById("ssn");
    let numbers = ssn.value.replace(/\D/g, "");
    if(numbers.length > 3 && numbers.length <= 5){
        numbers = numbers.slice(0,3) + "-" + numbers.slice(3);
    }
    else if(numbers.length > 5){
        numbers = numbers.slice(0,3) + "-" + numbers.slice(3,5) + "-" + numbers.slice(5,9);
    }
    ssn.value = numbers;
}

// turns the userID into lower case
window.onload = function() {
    document.getElementById("userId").addEventListener("input", function() {
        this.value = this.value.toLowerCase();
    });
};

// User ID field validation function 
function validateUserId(){
    let userId = document.getElementById("userId");
    let error = document.getElementById("userid-error");
    userId.value = userId.value.toLowerCase();
    let regex = /^[a-zA-Z][a-zA-Z0-9_-]{4,19}$/;
    if(!regex.test(userId.value)){
        error.textContent = "5-20 chars, start with letter";
        return false;
    }
    error.textContent = "";
    return true;
}

//function to validate other functions and show submit button
function validateForm(){
    let valid =
        validateFirstName() &&
        validateLastName() &&
        validateEmail() &&
        validatePhone() &&
        validatePassword() &&
        validateConfirmPassword() &&
        validateUserId();
    if(valid){
        document.getElementById("submitButton").style.display = "inline-block";
    }
}

// script to load states list(fetch API)
async function loadStates(){
    try{
        const response = await fetch("statesList.json");
        const states = await response.json();
        const stateDropdown = document.getElementById("state");
        states.forEach(state => {
            let option = document.createElement("option");
            option.value = state.code;
            option.textContent = state.name;
            stateDropdown.appendChild(option);
        });
    }
    catch(error){
        console.log("Error loading states:", error);
    }
}

loadStates();