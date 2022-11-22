var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

// time is false when stopwatch is not running 
var timer = false;
 

function start(){
    // timer is true when stopwatch is running
    timer = true;

    // calling function stopwatch
    stopwatch();
}

function stop(){
    // when someone click on stop timer will be false.
    timer = false;
}

function reset(){
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    // we can also put 0 in place of hr, min, sec, count in below statement 
    // as their value is also 0 in above equation. 

    // document.getElementById("hr").innerHTML = hr;    
    // document.getElementById("min").innerHTML = min;
    // document.getElementById("sec").innerHTML = sec;
    // document.getElementById("count").innerHTML = count;

    // we will use above equation if we want single zero format in stopwatch
    // i.e. 0 hr 0 min 0 sec 0 count

    // But we want double zero format like 00 hr 00 min 00 sec 00 count
    // so we are gonna use below equation, converting integer into string.

    document.getElementById("hr").innerHTML = "00";    
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
    
}

function stopwatch(){
    if(timer == true){
        count = count+1; // this will increase count value by 1 after every 10 millisec.

        if(count == 100){  
            sec = sec + 1;
            count = 0;
        }

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        //converting into string when the value is single digit i.e. less than 10.
        
        if(hr < 10){
            hrString ="0" + hrString;
        }

        if(min < 10){
            minString ="0" + minString;
        }

        if(sec < 10){
            secString ="0" + secString;
        }

        if(count < 10){
            countString ="0" + countString;
        }


        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

        // when someone click on start then timer will be true and function stopwatch()
        // will run, then if loop will run. It will see that timer is true, after every 
        // 10 millisec if loop will run until timer is false i.e. until someone click
        // on stop or reset button. 
        setTimeout("stopwatch()", 10);
    }

}