let checkbox = document.querySelector("#darkModeCheckBox").childNodes[1];
checkbox.addEventListener("change", darkMode);

function darkMode() {
    if (checkbox.checked) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    }
    else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    }
}