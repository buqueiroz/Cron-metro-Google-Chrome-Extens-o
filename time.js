let hh = 0;
let mm = 0;
let ss = 0;

let tempo = 1000;
let cont;


// START
let btnStart = document.getElementById("start");

btnStart.addEventListener('click', start)

function start() {
    cont = setInterval(() => { timer(); }, tempo);
    document.getElementById('counter').style.color = "#00e054";
}

// PAUSE
let btnPause = document.getElementById("pause");

btnPause.addEventListener('click', pause)

function pause() {
    clearInterval(cont); 
    document.getElementById('counter').style.color = "#8fbafc";
}

// STOP
let btnStop = document.getElementById("stop");

btnStop.addEventListener('click', stop)

function stop() {
    clearInterval(cont);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerHTML = '00:00:00'
    document.getElementById('counter').style.color = "#ff6767";
}

function timer() {
    ss++;

    if(ss == 60){
        ss = 0;
        mm++;

        if(mm == 60){
            mm = 0;
            hh++;
        }
    }

    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerText = format;
}