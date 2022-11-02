const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minutes'); 
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12)
    {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    //Pour rajouter le "0" aux heures, min, ou s < 10 tout simplement.

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout( ()=> {
        updateClock()
    }, 1000)

    /* 
        setTimeout est une fonction qui prend en param une function et une durée (en millisecondes)   
        Elle consite à appeler une fonction de manière infini, suivant la durée d'exécution...
    */ 
    
}

updateClock()