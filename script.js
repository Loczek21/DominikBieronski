function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthMeter = document.getElementById("strength-meter");
    var passwordImage = document.getElementById("password-image");
    var strength = 0;
    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.length >= 8) {
        strength += 1;
    }
    strengthMeter.innerHTML = "Siła hasła: " + strength + "/4";
  
    if (strength === 4) {
        passwordImage.src = "haslo-silne.jpg";
    } else if (strength >= 2) {
        passwordImage.src = "haslo-srednie.jpg";
    } else {
        passwordImage.src = "haslo-slabe.jpg";
    }
}
