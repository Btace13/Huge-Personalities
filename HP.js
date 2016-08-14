
    var myString = "WELCOME ACES";
    var myArray = myString.split("");
    var loopTimer;

    function frameLooper() {
        if (myArray.length > 0) {
            document.getElementById("myTypingText").innerHTML += myArray.shift();
        } else {
            clearTimeout(loopTimer);
            return false;
        }
        loopTimer = setTimeout('frameLooper()', 100);
    }
    frameLooper();
