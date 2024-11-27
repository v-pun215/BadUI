let timer;
let startTime;

function startGame() {
    document.getElementById("startbtn").style.display = "none";
    document.getElementById("letters").style.display = "block";
    document.getElementById("letters").style.marginTop = "30px";
    startTimer();
}

function startTimer() {
    startTime = Date.now();
    timer = setTimeout(function() {
        document.getElementById("status").style.color = "red";
        document.getElementById("status").innerHTML = "Are you even trying? Time's up kid. Click here to reset.";
        document.getElementById("status").style.cursor = "pointer";
        document.getElementById("status").onclick = resetGame;
        disableButtons();
    }, 2000);
}

function resetGame() {
    location.reload(); // Reload the page to reset the game
}

function disableButtons() {
    const buttons = document.querySelectorAll(".cancel");
    buttons.forEach(button => button.disabled = true);
}

document.addEventListener("DOMContentLoaded", function() {
    const lettersContainer = document.getElementById("letters");
    const buttons = Array.from(lettersContainer.getElementsByClassName("cancel"));
    shuffle(buttons);
    buttons.forEach(button => lettersContainer.appendChild(button));

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const finalCancellation = document.getElementById("final_cancellation");
            document.getElementById("letters").style.marginTop = "0px";
            finalCancellation.textContent += button.textContent;
            button.style.display = "none"; // Make the button disappear

            if (finalCancellation.textContent === "CANCEL") {
                clearTimeout(timer);
                document.getElementById("status").style.color = "green";
                document.getElementById("status").innerHTML = "Cancelled (easter egg: High Seas!). Click here to reset.";
                document.getElementById("status").style.cursor = "pointer";
                document.getElementById("status").onclick = resetGame;
                disableButtons();
            } else if (finalCancellation.textContent.length === buttons.length && finalCancellation.textContent !== "CANCEL") {
                clearTimeout(timer);
                document.getElementById("status").style.color = "red";
                document.getElementById("status").innerHTML = "Are you even trying? Click here to reset.";
                document.getElementById("status").style.cursor = "pointer";
                document.getElementById("status").onclick = resetGame;
                disableButtons();
            }
        });
    });
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
