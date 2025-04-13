// Таавар
document.getElementById('showRiddleBtn').addEventListener('click', function() {
    document.getElementById('riddle').classList.remove('hidden');
    document.getElementById('riddleAnswer').classList.remove('hidden');
    document.getElementById('submitAnswer').classList.remove('hidden');
    document.getElementById('quizForm').classList.remove('hidden');
});

document.getElementById('submitAnswer').addEventListener('click', function() {
    const answer = document.getElementById('riddleAnswer').value.toLowerCase();
    const feedback = document.getElementById('feedback');
    if (answer.includes('bull')) {
        feedback.textContent = 'Муундаг!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Биш ээ хайраа.';
        feedback.style.color = 'red';
    }
    feedback.classList.remove('hidden');
});

// Quiz
document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const answer1 = document.querySelector('input[name="quiz"]:checked')?.value;
    const answer2 = document.querySelector('input[name="quiz2"]:checked')?.value;
    const feedback = document.getElementById('quizFeedback');
    const feedback2 = document.getElementById('quiz2Feedback');

    if (answer1 === 'Roma') {
        feedback.textContent = 'Браво хайраа! 🥰';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Бас л дурсамж шүү, гэхдээ арай биш. 😅';
        feedback.style.color = 'red';
    }
    feedback.classList.remove('hidden');

    if (answer2 === '2') {
        feedback2.textContent = 'Миний ухаантай хайр!';
        feedback2.style.color = 'green';
    } else {
        feedback2.textContent = 'За бас арай ч дээ😢';
        feedback2.style.color = 'red';
    }
    feedback2.classList.remove('hidden');
});

// Timer
var startDate = new Date("2017-10-01").getTime();
setInterval(function () {
    var now = new Date().getTime();
    var distance = now - startDate;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML =
        days + " Өдөр " + hours + " Цаг " + minutes + " Минут " + seconds + " Секунд ";
}, 1000);

// Compliment
const compliments = [
    "If the world was ending I'd wanna be next to you.",
    "I would love you in every lifetime.",
    "You taught me what true love is, and I’m grateful every day.",
    "By your side is my favorite place to be.",
    "Even after all this time, I still can’t believe how lucky I am to have you.",
    "I want to grow old with you.",
    "Sometimes it feels like I’m dreaming, but then I realize it’s all real.",
    "You are my everything."
];
document.getElementById('generateComplimentBtn').addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const complimentText = document.getElementById('complimentText');
    complimentText.innerText = compliments[randomIndex];
    complimentText.classList.add('visible');
});

// Галерей click
document.querySelectorAll('.gallery img').forEach((img) => {
    img.addEventListener('click', function () {
        alert(`Зурагны тайлбар: ${img.title}`);
    });
});

// Message илгээх + доор нь харуулах
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('message').value.trim();
    const messageList = document.getElementById('messageList');

    if (message !== "") {
        const li = document.createElement('li');
        li.textContent = message;
        li.style.padding = "5px 0";
        messageList.appendChild(li);

        document.getElementById('messageFeedback').classList.remove('hidden');
        document.getElementById('message').value = '';
    } else {
        alert("Таны илгээмж хоосон байна.");
    }
});
