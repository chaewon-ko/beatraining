var setTime = 0;
var workoutTime = 0;
var min = 0;
var sec = 0;
var setTimer;

var setTimer = setInterval(function () {
    setTime++;
    min = parseInt(setTime / 60);
    sec = setTime % 60;
    document.getElementById("setTimer").innerHTML = min + "분 " + sec + "초";
}, 1000);

setInterval(function () {
    workoutTime++;
    min = parseInt(workoutTime / 60);
    sec = workoutTime % 60;
    document.getElementById("workoutTimer").innerHTML =
        min + "분 " + sec + "초";
}, 1000);

$("#doneBtn1").click(function () {
    clearInterval(setTimer);
    document.getElementById("check1").style.display = "inline-block";

    var setRest = 10;

    var x = setInterval(function () {
        document.getElementById("setTimer").style.color =
            "rgba(29, 255, 187, 0.56)";
        min = parseInt(setRest / 60);
        sec = setRest % 60;
        document.getElementById("setTimer").innerHTML =
            min + "분 " + sec + "초";
        setRest--;

        if (setRest < 0) {
            clearInterval(x);
            document.getElementById("setTimer").innerHTML = "0분 0초";
            setInterval(function () {
                setRest++;
                min = parseInt(setRest / 60);
                sec = setRest % 60;
                document.getElementById("setTimer").style.color = "#FFFFFF";
                document.getElementById("setTimer").innerHTML =
                    min + "분 " + sec + "초";
            }, 1000);
        }
    }, 1000);
});

$("#doneBtn2").click(function () {
    document.getElementById("check2").style.display = "inline-block";

    setTimeout(function () {
        document.getElementById("slide1").innerHTML = `<img src=${url}>`;
        var intervalRest = 60;
        var y = setInterval(function () {
            document.getElementById("setTimer").style.color =
                "rgba(29, 255, 187, 0.56)";
            min = parseInt(intervalRest / 60);
            sec = intervalRest % 60;
            document.getElementById("setTimer").innerHTML =
                min + "분 " + sec + "초";
            intervalRest--;

            if (intervalRest < 0) {
                clearInterval(y);
                document.getElementById("setTimer").innerHTML = "0분 0초";
                document.getElementById("setTimer").style.color = "#FFFFFF";
            }
        }, 1000);
    }, 1000);
});
