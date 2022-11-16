const button = document.querySelector("#submit");
const output = document.querySelector("#output");
const angles = document.querySelectorAll(".angle");
function calculateSum(anglesData) {
    let sum = 0;
    for (let i = 0; i < anglesData.length; i++) {
        if (anglesData[i].value == "" || parseInt(anglesData[i].value) < 0) {
            sum = 0;
            break;
        }
        sum = sum + parseInt(anglesData[i].value);
    }
    return sum;
}
button.addEventListener("click", () => {
    let sum = calculateSum(angles);
    if (sum == 180) {
        output.innerText = `Hoorayyy!! The angles form a triangle 🥳`;
    } else if (sum == 0) {
        output.innerText = `Enter Angle value 😡`;
    } else {
        output.innerText = `oh no ! The angles don't form a triangle ☹️`;
    }
});