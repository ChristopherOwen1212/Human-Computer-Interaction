function validateForm() {
    var error = 0;

    var username = document.getElementById('username');
    var username_error = document.getElementById('username_error');

    var email = document.getElementById('email');
    var email_error = document.getElementById('email_error');

    var password = document.getElementById('password');
    var password_error = document.getElementById('password_error');

    var gendermale = document.getElementById('gendermale');
    var genderfemale = document.getElementById('genderfemale');
    var gender_error = document.getElementById('gender_error');

    var dob = document.getElementById('dob');
    var dob_error = document.getElementById('dob_error');

    var nation = document.getElementById('nation');
    var nation_error = document.getElementById('nation_error');

    var terms = document.getElementById('termsBox');
    var terms_error = document.getElementById('terms_error');

    if (username.value.length == 0) {
        username_error.innerHTML='Username cannot be empty';
        error++;
    } else {
        username_error.innerHTML='';
    }

    if (email.value.length == 0) {
        email_error.innerHTML='Email cannot be empty';
        error++;
    } else if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        email_error.innerHTML='Invalid email format';
        error++;
    } else {
        email_error.innerHTML='';
    }

    if (password.value.length == 0) {
        password_error.innerHTML='Password cannot be empty';
        error++;
    } else if (password.value.length < 8 || password.value.length > 12 ) {
        password_error.innerHTML='Password must be 8 - 12 characters long';
        error++;
    } else {
        password_error.innerHTML='';
    }

    if (!gendermale.checked && !genderfemale.checked){
        gender_error.innerHTML='Gender cannot be empty';
        error++;
    }else{
        gender_error.innerHTML="";
    }

    if (dob.value.length == 0) {
        dob_error.innerHTML='Date of birth cannot be empty';
        error++;
    } else {
        var dateofbirth = new Date(dob.value);
        var today = new Date();
        if (dateofbirth > today) {
            dob_error.innerHTML='Date of birth cannot be greater than today';
            error++;
        } else {
            dob_error.innerHTML='';
        }
    }

    if (nation.value.length == 0) {
        nation_error.innerHTML='Nation cannot be empty';
        error++;
    } else {
        nation_error.innerHTML='';
    }

    if (terms.checked == false) {
        terms_error.innerHTML='Please indicate that you accept the Terms and Conditions';
        error++;
    } else {
        terms_error.innerHTML='';
    }

    if (error == 0) {
        alert('You are registered');
        document.getElementsByClassName("register")[0].reset();
    }
}

$(document).ready(function() {
    $("#submit").click(function() {
        validateForm();
    });
});