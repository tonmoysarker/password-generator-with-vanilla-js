const PROMPT = document.querySelector("#prompt")
const LENGTH_DIV = document.querySelector("#length-input-group")
const LENGTH = document.querySelector("#length-input")
const PASSWORD = document.querySelector("#password")
const BUTTON = document.querySelector("#btn1")

LENGTH.addEventListener("input", () => {
    // Enforce the maximum value
    if (LENGTH.value > 30) {
        LENGTH.value = 30
    }
    // Enforce the minimum value
    if (LENGTH.value < 1) {
        LENGTH.value = 1
    }
})

BUTTON.addEventListener("click", () => {
    if (LENGTH.value !== "") {
        generatePassword()
    } else {
        PROMPT.textContent = "Type the number, dude!"
    }
})

function generatePassword() {
    PROMPT.textContent = "Here's your order!"
    const includeUppercase = document.querySelector("#includeUppercase").checked
    const includeLowercase = document.querySelector("#includeLowercase").checked
    const includeNumbers = document.querySelector("#includeNumbers").checked
    const includeSpecial = document.querySelector("#includeSpecial").checked
    let charset = ""
    let password = ""

    if (includeUppercase) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (includeLowercase) {
        charset += "abcdefghijklmnopqrstuvwxyz"
    }
    if (includeNumbers) {
        charset += "0123456789"
    }
    if (includeSpecial) {
        charset += "!@#$%^&*()_-+=<>?/{}[]"
    }

    if (charset === "") {
        PROMPT.textContent = "At least one option must be checked!"
        return
    }

    for (let i = 0; i < LENGTH.value; i++) {
        password += charset[randomIndex(charset)]
    }

    password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("")
    LENGTH.value = ""
    PASSWORD.textContent = password
}

function randomIndex(array) {
    return Math.floor(Math.random() * array.length)
}
