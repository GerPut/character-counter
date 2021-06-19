const message = document.querySelector(".message");
const text = document.querySelector("textarea");

text.addEventListener("change", textCounter)
text.addEventListener("keyup", textCounter)
text.addEventListener("keydown", textCounter)

function textCounter(e) {
    console.log(e)
    let count = text.value.length;
    if (count > maxLength) {
        console.log(text.value.substring(0, maxLength))
    }
    if (count > warnLength) {
        message.classList.add("red")
    } else {
        message.classList.remove("red")
    }
    message.innerHTML = (maxLength - count) + " characters left"
}

const maxLength = 50;
const warnLength = 10;