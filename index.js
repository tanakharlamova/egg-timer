const button_left = document.querySelector("#myButton_left");
const button_right = document.querySelector("#myButton_right");

button_left.addEventListener("click", function() {

    const time = 4;
    let amountTime = time * 60;

    function calculateTime() {
        const countdown_left = document.querySelector("#countdown_left");
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
            clearInterval(timerId);
        }
    }

    let timerId = setInterval(calculateTime, 1000);

})
button_right.addEventListener("click", function() {
    const time = 12;
    let amountTime = time * 60;

    function calculateTime() {

        const countdown_right = document.querySelector("#countdown_right");
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
            clearInterval(timerId);
        }
    }

    let timerId = setInterval(calculateTime, 1000);

})