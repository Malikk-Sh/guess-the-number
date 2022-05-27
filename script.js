let ans = document.getElementById('ans')
let rNum = Math.floor(Math.random()*10+1)
let next = document.getElementById('next')
let textInf = document.getElementById('textInf')
let tryCount = 0

let hint = document.getElementById('lamp')
let hintBl = document.getElementById('hintBl')
let bl = document.getElementById('Bl')
let bl2 = document.getElementById('Bl2')
let mch = 1;
let bch = 10
textInf.style.color = 'transparent'
next.addEventListener(('click'), function() {
    if (document.getElementById('num').value == '' || document. getElementById('num').value > 10 || document.getElementById('num').value < 0) return;
    tryCount++
    textInf.innerHTML = 'Вы потратили попыток:' + tryCount
    textInf.style.color = 'white'

    if (document.getElementById('num').value > rNum) {
        ans.innerHTML = "меньше"
        bch = document.getElementById('num').value
    } else if (document.getElementById('num').value < rNum) {
        ans.innerHTML = "больше"
        mch = document.getElementById('num').value
    }
    bl.innerHTML = "между "+ mch + ' и '+ bch;
    /*bl2.innerHTML = mch+1+' или '*/
    if (document.getElementById('num').value == rNum) {
        ans.innerHTML = "Поздравляю! Вы угадали с "+ tryCount +" попытки!";
        textInf.style.color = 'transparent'
        textInf.innerHTML = '..........';
        tryCount = 0;
        mch = 1;
        bch = 10;
        rNum = Math.floor(Math.random()*10+1);
        bl.innerHTML = "";
    }
    document.getElementById('num').value = null;
})
let flag = false;
hintBl.style.display = "none"

hint.addEventListener('click', function () {
    if (flag) {
        hintBl.style.display = "block"
    } else {
        hintBl.style.display = "none"
    }
    flag = !flag
});
let box = document.querySelector('.box')
box.style.width = window.innerWidth+"px";