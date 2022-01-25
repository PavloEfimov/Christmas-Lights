let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let oneCircle = document.querySelector('#one');
let circles = document.querySelectorAll('.circle');
let timerId;












startBtn.addEventListener('click', startFn);
stopBtn.addEventListener('click', stopFn);



function startFn(){
    let i = 0;
    timerId = setTimeout(function flash(){
        console.log('test', circles[i]);
        circles[i].classList.add('on');

        if(i===0){
            i=7;
            if(circles[i-1].classList.contains('on')) {
                circles[i-1].classList.remove('on');
            } 
            i=0;
            i++;
        } else if(i===6) {
            if(circles[i-1].classList.contains('on')) {
                circles[i-1].classList.remove('on');
            } 
            i=0; 
        }
        else{
            if(circles[i-1].classList.contains('on')) {
                circles[i-1].classList.remove('on');
            } 
            i++; 
        }

      timerId = setTimeout (flash, 1000)
    }, 1000)
}
function stopFn(){
    clearTimeout(timerId);
}