var time = 0;
var restTime = 10;
var starFlag = true;
$(document).ready(function(){
  buttonEvt();
});

function init(){
  document.getElementById("setTimer").innerHTML = "0분 00초";
}

function buttonEvt(){
    var min = 0;
    var sec = 0;
    var timer;

  // start btn
    if(time == 0){
        init();
      }

    timer = setInterval(function(){
        time++;

        min = Math.floor(time/60);
        hour = Math.floor(min/60);
        sec = time%60;
        min = min%60;

        var tm = min;
        var ts = sec;

        if(tm < 10){
        tm = "0" + min;
        }
        if(ts < 10){
        ts = "0" + sec;
        }

        document.getElementById("time").innerHTML = tm + "분 " + ts +"초"
      }, 1000);
    


    // pause btn
    $("#doneBtn1").click(function(){
        clearInterval(timer);
        starFlag = true;
        rest = setInterval(function(){

            min = Math.floor(time/60);
            hour = Math.floor(min/60);
            sec = time%60;
            min = min%60;

            var tm = min;
            var ts = sec;
    
            if(tm < 10){
            tm = "0" + min;
            }
            if(ts < 10){
            ts = "0" + sec;
            }
            restTime --;
    
            document.getElementById("time").innerHTML = tm + "분 " + ts +"초"

        },1000);
    });

  // stop btn
  $("#stopbtn").click(function(){
    if(time != 0){
      $(".fa").css("color","#FAED7D")
      this.style.color = "#4C4C4C";
      clearInterval(timer);
      starFlag = true;
      time = 0;
      init();
    }
  });
}