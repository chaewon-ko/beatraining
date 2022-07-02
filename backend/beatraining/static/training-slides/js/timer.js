var setTime = 0;
var workoutTime = 0;
var min = 0;
var sec = 0;
const GV = {
    isPause: false,
    timer: null,
};
GV.isPause = false;
GV.timer = setInterval(function () {
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

const setrest = $("#doneBtn1").one("click", function () {
    document.getElementById("check1").style.display = "inline-block";

    clearInterval(GV.timer);
    GV.isPause = false;

    var setRest = 30;

    GV.timer = setInterval(function () {
        document.getElementById("setTimer").style.color =
            "rgba(29, 255, 187, 0.56)";
        min = parseInt(setRest / 60);
        sec = setRest % 60;
        document.getElementById("setTimer").innerHTML =
            min + "분 " + sec + "초";
        setRest--;

        if (setRest < 0) {
            clearInterval(GV.timer);
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

const rest = $("#doneBtn2").click(function () {
    clearInterval(GV.timer);
    GV.isPause = true;
    document.getElementById("check2").style.display = "inline-block";

    setTimeout(function () {
        document.getElementById("slide1").innerHTML = `<img src=${url}>`;
        var intervalRest = 60;
        let x = setInterval(function () {
            document.getElementById("setTimer").style.color =
                "rgba(29, 255, 187, 0.56)";
            min = parseInt(intervalRest / 60);
            sec = intervalRest % 60;
            document.getElementById("setTimer").innerHTML =
                min + "분 " + sec + "초";
            intervalRest--;

            if (intervalRest < 0) {
                clearInterval(x);
                document.getElementById("setTimer").innerHTML = "0분 0초";
            }
        }, 1000);
    }, 1000);
});
