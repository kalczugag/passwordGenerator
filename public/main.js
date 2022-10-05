"use strict";
let outputPass = document.getElementById("otpText");
let passwdLength = document.getElementById("passwdLength");
const copyBtn = document.getElementById("copy");
const copyToClipboard = () => {
    if (outputPass.innerHTML === null) {
        return;
    }
    else {
        const elem = document.createElement("textarea");
        elem.value = outputPass.innerHTML;
        document.body.appendChild(elem);
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
    }
};
passwdLength.innerHTML = "32";
const getSliderValue = (value) => {
    passwdLength.innerHTML = value;
};
let passwordSignsArray = [];
const passwordSettings = () => {
    if (document.getElementById("lowerCase").checked) {
        passwordSignsArray.concat(LOWERCASE);
    }
    else if (document.getElementById("upperCase").checked) {
        passwordSignsArray.concat(UPPERCASE);
    }
    else if (document.getElementById("numbers").checked) {
        passwordSignsArray.concat(NUMBERS);
    }
    else if (document.getElementById("symbols").checked) {
        passwordSignsArray.concat(SYMBOLS);
    }
    else if (document.getElementById("duplicate").checked) {
        console.log("xd");
    }
    else if (document.getElementById("spaces").checked) {
        console.log("xd");
    }
};
passwordSettings();
function showTable() {
    console.log(passwordSignsArray);
}
