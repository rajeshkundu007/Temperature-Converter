const degrees = document.querySelector(".degrees")
const select = document.querySelector(".select")
const resultbox = document.querySelector(".resultbox")
const convert = document.querySelector(".convert")
const temtype = document.querySelector(".temtype")
const text = document.querySelector(".result-text")


function funconvertTem() {
    const degree = temtype.value;
    if (degree === 'Celsius') {
        text.innerHTML = "Temperature in Fahrenheit is"
        resultbox.innerHTML = (parseInt(degrees.value) * 9) / 5 + 32 + "°F";
    } else if (degree === 'Fahrenheit') {
        text.innerHTML = "Temperature in Celsius is"
        resultbox.innerHTML = ((parseInt(degrees.value) - 32) * 5) / 9 + "°C";
    }
}

convert.addEventListener("click", funconvertTem);
