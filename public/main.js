"use strict";
let outputPass = document.getElementById("otpText");
let passwdLength = document.getElementById("passwdLength");
const copyBtn = document.getElementById("copy");
const copiedMsg = document.querySelector(".tooltip");
window.onload = () => {
    const test = localStorage.getItem("password");
    outputPass.innerHTML = test;
    localStorage.clear();
};
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
        copiedMsg.style.display = "block";
        outputPass.style.color = "white";
        setTimeout(() => {
            copiedMsg.style.display = "none";
            outputPass.style.color = "black";
        }, 2000);
    }
};
passwdLength.innerHTML = "32";
const getSliderValue = (value) => {
    passwdLength.innerHTML = value;
};
const lowC = document.getElementById("lowerCase");
const upC = document.getElementById("upperCase");
const nums = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const duplicate = document.getElementById("duplicate");
const spaces = document.getElementById("spaces");
let passwordSignsArray = [];
let newArray = [];
const passwordSettings = (id) => {
    if (id === "lowerCase" && lowC.checked) {
        passwordSignsArray.push(LOWERCASE);
    }
    else if (id === "upperCase" && upC.checked) {
        passwordSignsArray.push(UPPERCASE);
    }
    else if (id === "numbers" && nums.checked) {
        passwordSignsArray.push(NUMBERS);
    }
    else if (id === "symbols" && symbols.checked) {
        passwordSignsArray.push(SYMBOLS);
    }
    else if (id === "duplicate" && duplicate.checked) {
        console.log("xd");
    }
    else if (id === "spaces" && spaces.checked) {
        passwordSignsArray.push(SPACES);
    }
    passwordSignsArray = Array.prototype.concat.apply([], passwordSignsArray);
};
let test = [];
const getRandomSigns = (sliderValue) => {
    test = [];
    if (passwordSignsArray.length > 10) {
        for (let i = 0; i < sliderValue; i++) {
            test += passwordSignsArray[Math.floor(Math.random() * sliderValue)];
        }
    }
    else if (passwordSignsArray.length < sliderValue) {
        copiedMsg.style.display = "block";
        copiedMsg.style.color = "red";
        copiedMsg.innerHTML = "Error";
        copiedMsg.style.animation = "none";
    }
    else if (passwordSignsArray.length === 0) {
        return;
    }
};
const generatePassword = () => {
    getRandomSigns(+passwdLength.innerHTML);
    localStorage.setItem("password", JSON.stringify(test));
};
