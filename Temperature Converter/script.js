const degrees = document.querySelector(".degrees")
const select = document.querySelector(".select")
const resultbox = document.querySelector(".resultbox")
const convert = document.querySelector(".convert")
const temtype = document.querySelector(".temtype")
convert.addEventListener("click",fun1);
function fun1() {
    const degree = temtype.value;
    if(degree==='Celsius') {
        resultbox.innerHTML = (parseInt(degrees.value)*9)/5 + 32+"°F";
    } else if(degree==='Fahrenheit') {
        resultbox.innerHTML = ((parseInt(degrees.value)-32)*5)/9+"°C";
    }
    console.log(degree)
}
