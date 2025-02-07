const messages = [
    "Có chắc không?",
    "Thật sự chắc chắn??",
    "Có muốn chọn lại không?",
    "Thôi mà",
    "Suy nghĩ lại đi!",
    "Nếu chọn không,tui sẽ thực sự buồn đó -_-",
    "Sẽ rất buồn luôn T-T",
    "Rất rất buồn luôn '.'",
    "Thôi không hỏi nữa =))",
    "Không có chuyện đó đâu =)) ❤️"
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
