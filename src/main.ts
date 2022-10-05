let outputPass = document.getElementById("otpText") as HTMLDivElement;
let passwdLength = document.getElementById("passwdLength") as HTMLDivElement;
const copyBtn: any = document.getElementById("copy");

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
    }
};

passwdLength.innerHTML = "32";
const getSliderValue = (value: any) => {
    passwdLength.innerHTML = value;
};

let passwordSignsArray: string[] = [];

const passwordSettings = () => {
    if ((document.getElementById("lowerCase") as HTMLInputElement).checked) {
        passwordSignsArray.concat(LOWERCASE);
    } else if (
        (document.getElementById("upperCase") as HTMLInputElement).checked
    ) {
        passwordSignsArray.concat(UPPERCASE);
    } else if (
        (document.getElementById("numbers") as HTMLInputElement).checked
    ) {
        passwordSignsArray.concat(NUMBERS);
    } else if (
        (document.getElementById("symbols") as HTMLInputElement).checked
    ) {
        passwordSignsArray.concat(SYMBOLS);
    } else if (
        (document.getElementById("duplicate") as HTMLInputElement).checked
    ) {
        console.log("xd");
    } else if (
        (document.getElementById("spaces") as HTMLInputElement).checked
    ) {
        console.log("xd");
    }
};

passwordSettings();

function showTable() {
    console.log(passwordSignsArray);
}
