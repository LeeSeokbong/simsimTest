const startBtn = document.querySelector(".homeBtn")
startBtn.addEventListener("click", function(){
    location.href="../index.html"
})

const previousLifeQnA = {
    Q1: {
        Title: "길을 가고 있습니다. 지금의 시간은 언제인가요?",
        A1 : "A1: 해가 뜨기 전 이른 새벽",
        A2 : "A2: 해가 햇볕이 따가운 점심",
        A3 : "A3: 해가 지는 나른한 오후",
        A4 : "A4: 해가 진 야심한 밤",
    },
}

const previousLifeQuestion = document.querySelector("#previousLifeQuestion");
const previousLifeAnswer1 = document.querySelector("#previousLifeAnswer1");
const previousLifeAnswer2 = document.querySelector("#previousLifeAnswer2");
const previousLifeAnswer3 = document.querySelector("#previousLifeAnswer3");
const previousLifeAnswer4 = document.querySelector("#previousLifeAnswer4");
const hideAnswer = document.querySelector(".hideAnswer");

previousLifeQuestion.textContent = previousLifeQnA.Q1.Title;
previousLifeAnswer1.textContent = previousLifeQnA.Q1.A1;
previousLifeAnswer2.textContent = previousLifeQnA.Q1.A2;
previousLifeAnswer3.textContent = previousLifeQnA.Q1.A3;
previousLifeAnswer4.textContent = previousLifeQnA.Q1.A4;

const ButtonClick = document.querySelector(".answerElem").addEventListener("click", function(event) {
    hideAnswer.textContent = hideAnswer.textContent + event.target.dataset.i
    console.log(hideAnswer.textContent)
})