/// <reference path="../Views/Home/Results.cshtml" />
/// <reference path="../Views/Home/Results.cshtml" />
/// <reference path="../Views/Home/Results.cshtml" />
//


var running = true;
function countdown(elementName, minutes, seconds) {
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer() {
        msLeft = endTime - (+new Date);
        if (msLeft < 1000) {
            running = false;
            $('#myModal').modal('show');

        }
        if(running){
            time = new Date(msLeft);
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
            setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        }


    }

    element = document.getElementById(elementName);
    endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
    updateTimer();
}

countdown("timer", 1, 0);





var score = 0;

function getScore() {
    var q1d = document.getElementById("1D");
    if (q1d.checked) {
        score++;
    }
    else {
        score += 0;
    }
    var q2b = document.getElementById("2B");
    if (q2b.checked) {
        score++;
    }
    else {
        score += 0;
    }
    var q3a = document.getElementById("3A");
    if (q3a.checked) {
        score++;
    }
    else {
        score += 0;
    }
    var q4d = document.getElementById("4D");
    if (q4d.checked) {
        score++;
    }
    else {
        score += 0;
    }
    var q5b = document.getElementById("5B");
    if (q5b.checked) {
        score++;
    }
    else {
        score += 0;
    }
    var q6a = document.getElementById("6A");
    if (q6a.checked) {
        score++;
    }
    else {
        score += 0;
    }
    var q7d = document.getElementById("7D");
    if (q7d.checked) {
        score++;
    }
    else {
        score += 0;
    }
    var q8c = document.getElementById("8C");
    if (q8c.checked) {
        score++;
    }
    else {
        score += 0;
    }
    var q9d = document.getElementById("9D");
    if (q9d.checked) {
        score++;
    }
    else {
        score += 0;
    }
    var q10b = document.getElementById("10B");
    if (q10b.checked) {
        score++;
    }
    var q11a = document.getElementById("11A");
    if (q11a.checked) {
        score++;
    }
    var q12d = document.getElementById("12D");
    if (q12d.checked) {
        score++;
    }
    else {
        score += 0;
    }
    var q13b = document.getElementById("13B");
    if (q13b.checked) {
        score++;
    }
    var q14a = document.getElementById("14A");
    if (q14a.checked) {
        score++;
    }
    var q15d = document.getElementById("15D");
    if (q15d.checked) {
        score++;
    }
    var q16b = document.getElementById("16B");
    if (q16b.checked) {
        score++;
    }
    var q17c = document.getElementById("17C");
    if (q17c.checked) {
        score++;
    }
    var q18b = document.getElementById("18B");
    if (q18b.checked) {
        score++;
    }
    var q19d = document.getElementById("19D");
    if (q19d.checked) {
        score++;
    }
    if (score < 5) {
        document.getElementById("testResult").innerHTML = "Better luck next time!<br><br>";
    }
    else if (score < 15 && score>=5) {
        document.getElementById("testResult").innerHTML = "Good score!<br><br>";
    }
    else {
        document.getElementById("testResult").innerHTML = "Well done!<br><br>";
    }
    document.getElementById("testResult").innerHTML += "You answered <strong>" + score + " out of 20</strong> questions correctly.";

    hideElements();
    showDiv();
    hideButton();
    
    
}

function hideElements() {
    var hideD = document.getElementById("hideDiv");

    if (hideD.style.display === 'none') {
        hideD.style.display = 'block';
    } else {
        hideD.style.display = 'none';
    }
    
}
function showDiv() {
    var displayR = document.getElementById("displayResult");
    
        displayR.style.display = 'block';
        
}
function hideButton() {
    var hideB = document.getElementById("hideB");
    hideB.style.display = 'none';
   
    
   
}
function getScoreTimer() {
    getScore();
    running = false;
}