let outputPass: any = document.getElementById("otpText") as HTMLDivElement;
let passwdLength = document.getElementById("passwdLength") as HTMLDivElement;
const copyBtn: any = document.getElementById("copy");
const copiedMsg = document.querySelector(".tooltip") as HTMLDivElement;

window.onload = () => {
    const test = localStorage.getItem("password");
    outputPass.innerHTML = test;
    localStorage.clear();
};

const copyToClipboard = () => {
    if (outputPass.innerHTML === null) {
        return;
    } else {
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
const getSliderValue = (value: any) => {
    passwdLength.innerHTML = value;
};

const lowC = document.getElementById("lowerCase") as HTMLInputElement;
const upC = document.getElementById("upperCase") as HTMLInputElement;
const nums = document.getElementById("numbers") as HTMLInputElement;
const symbols = document.getElementById("symbols") as HTMLInputElement;
const duplicate = document.getElementById("duplicate") as HTMLInputElement;
const spaces = document.getElementById("spaces") as HTMLInputElement;

let passwordSignsArray: any[] = [];
let newArray: any[] = [];
const passwordSettings = (id: string) => {
    if (id === "lowerCase" && lowC.checked) {
        passwordSignsArray.push(LOWERCASE);
    } else if (id === "upperCase" && upC.checked) {
        passwordSignsArray.push(UPPERCASE);
    } else if (id === "numbers" && nums.checked) {
        passwordSignsArray.push(NUMBERS);
    } else if (id === "symbols" && symbols.checked) {
        passwordSignsArray.push(SYMBOLS);
    } else if (id === "duplicate" && duplicate.checked) {
        console.log("xd");
    } else if (id === "spaces" && spaces.checked) {
        passwordSignsArray.push(SPACES);
    }
    passwordSignsArray = Array.prototype.concat.apply([], passwordSignsArray);
};

let test: string[] = [];
const getRandomSigns = (sliderValue: number) => {
    test = [];
    if (passwordSignsArray.length > 10) {
        for (let i = 0; i < sliderValue; i++) {
            test += passwordSignsArray[Math.floor(Math.random() * sliderValue)];
        }
    } else if (passwordSignsArray.length < sliderValue) {
        copiedMsg.style.display = "block";
        copiedMsg.style.color = "red";
        copiedMsg.innerHTML = "Error";
        copiedMsg.style.animation = "none";
    } else if (passwordSignsArray.length === 0) {
        return;
    }
};

const generatePassword = () => {
    getRandomSigns(+passwdLength.innerHTML);
    localStorage.setItem("password", JSON.stringify(test));
};
