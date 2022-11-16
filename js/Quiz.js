const buttton = document.querySelector("#answer");
const output = document.querySelector("#output");
const form = document.querySelector(".question");
let answers = {
    "question1": 90,
    "question2": "Right Angled",
    "question3": "Equilateral",
    "question4": "15cm",
    "question5": "42cm",
    "question6": 60,
    "question7": 75,
    "question8": 180,
    "question9": "Hypotenuse",
    "question10": "Right",
    "question11": "no"


};

const click = document.querySelector('#click');
const labelMenubar = document.querySelector("#menubar");

labelMenubar.addEventListener('click', () => {
    if (click.checked == true) {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
})
function calculateScore(formData) {
    let score = 0;
    let ans = new FormData(formData);
    for (let [key, value] of ans) {
        if (answers[key] == value) {
            score = score + 1;
        }
    }
    //console.log(input);
    return score;
}

buttton.addEventListener('click', () => {
    let score = calculateScore(form);
    if (score == 10) {
        output.innerText = `Your score is ${score} 🚀`;
    } else if (score == 0) {
        output.innerText = `Your score is ${score} 🤒`;
    } else {
        output.innerText = `Your score is ${score}`;
    }
});