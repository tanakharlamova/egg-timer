const button_left = document.querySelector("#myButton_left");
const button_right = document.querySelector("#myButton_right");
const reset_left = document.querySelector("#reset_left");
const reset_right = document.querySelector("#reset_right");
let timerIdLeft;
let timerIdRight;

function displayTime(countdown, time) {
    let amountTime = time * 60;
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    countdown.textContent = `${minutes} : ${seconds}`;
}
const countdown_left = document.querySelector("#countdown_left");
const countdown_right = document.querySelector("#countdown_right");
displayTime(countdown_left, 4); 
displayTime(countdown_right, 12);

button_left.addEventListener("click", function() {
    const time = 4;
    let amountTime = time * 60;

    function calculateTime() {
        button_left.disabled = true;
        button_left.textContent = "Timer is running...";
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        
        countdown_left.textContent = `${minutes} : ${seconds}`;
        amountTime--;
        
        if (amountTime < 0) {
            stopTimer();
            amountTime = 0;
        }
        
        function stopTimer() {
            clearInterval(timerIdLeft);
            button_left.disabled = true;
            button_left.textContent = "Done!";
            button_left.classList.add("done");
            document.querySelector("#ready_left").textContent = "Your egg is ready!";
        }
    }
    calculateTime();
    timerIdLeft = setInterval(calculateTime, 1000);

})
button_right.addEventListener("click", function() {
    const time = 12;
    let amountTime = time * 60;

    function calculateTime() {
        button_right.disabled = true;
        button_right.textContent = "Timer is running...";
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;

        if (seconds < 10) {
            seconds = "0" + seconds
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        countdown_right.textContent = `${minutes} : ${seconds}`;
        amountTime--;

        if (amountTime < 0) {
            stopTimer();
            amountTime = 0;
        }
        function stopTimer() {
            clearInterval(timerIdRight);
            button_right.disabled = true;
            button_right.textContent = "Done!";
            button_right.classList.add("done");
            document.querySelector("#ready_right").textContent = "Your egg is ready!";
        }
    }
    calculateTime();
    timerIdRight = setInterval(calculateTime, 1000);

});

   reset_left.addEventListener("click", function() {
    button_left.disabled = false;
    button_left.textContent = "Click to start!";
    button_left.classList.remove("done");
    displayTime(countdown_left, 4);
    document.querySelector("#ready_left").textContent = "";
    clearInterval(timerIdLeft);
})


reset_right.addEventListener("click", function() {
    button_right.disabled = false;
    button_right.textContent = "Click to start!";
    button_right.classList.remove("done");
    displayTime(countdown_right, 12);
    document.querySelector("#ready_right").textContent = "";   
    clearInterval(timerIdRight);
})