const form = document.querySelector(".hero__form");
const inputField = document.querySelector(".hero__form--input");
const applyButton = document.querySelector(".hero__form--button");
const errorSign = document.querySelector(".hero__form--error");
const errorLabel = document.querySelector(".hero__form--error-label");

form.addEventListener("input", (e) => {
    e.preventDefault();
    console.log(inputField.value);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    console.log(inputField.classList);

    if (!emailPattern.test(inputField.value)) {
        errorSign.style.display = "block";
        errorLabel.style.display = "block";
        inputField.classList.add("error");
    } else {
        errorSign.style.display = "none";
        errorLabel.style.display = "none";
    }

    if (inputField.value == "") {
        errorSign.style.display = "none";
        errorLabel.style.display = "none";
        inputField.classList.remove("error");
    }
});
