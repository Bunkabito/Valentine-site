const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you really really sure?",
    "Puku Pleasee.....",
    "Give it a thought puku",
    "If you say no, I will start crying T_T",
    "I will be sad puku :(",
    "I will be extremely sad my ichuuuu.... :[",
    "Alright fine puku, I will stop asking so just click on me last time",
    "Muhaahaha gotcha puku I was kidding now please say YES zinni. 💝"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
