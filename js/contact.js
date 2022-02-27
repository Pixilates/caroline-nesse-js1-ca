const form = document.querySelector(".form");

const fullname = document.querySelector(".fullname")
const message = document.querySelector(".message")
const email = document.querySelector(".email")
const address = document.querySelector(".address")

const fullnameError = document.querySelector(".fullname-error")
const messageError = document.querySelector(".message-error")
const emailError = document.querySelector(".email-error")
const addressError = document.querySelector(".address-error")


function validateForm () {
    event.preventDefault();

    if (lengthValidation(fullname.value, 0) === true) {
        fullnameError.style.display = "none";
    } else { 
        fullnameError.style.display = "block";
    }

    if (lengthValidation(message.value, 10) === true) {
        messageError.style.display = "none";
    } else { 
        messageError.style.display = "block";
    }

    if (lengthValidation(address.value, 25) === true) {
        addressError.style.display = "none";
    } else { 
        addressError.style.display = "block";
    }

    if (emailValidation(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function lengthValidation(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function emailValidation(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;

}
