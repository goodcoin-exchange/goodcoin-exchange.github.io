var moveCounter = 0;

var userMoves = [];
var myMoves = [];
var moves = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function numToBtn(num) {
    var answer;
    switch (num) {
        case 1:
            answer = 'btn1';
            break;
        case 2:
            answer = 'btn2';
            break;
        case 3:
            answer = 'btn3';
            break;
        case 4:
            answer = 'btn4';
            break;
        case 5:
            answer = 'btn5';
            break;
        case 6:
            answer = 'btn6';
            break;
        case 7:
            answer = 'btn7';
            break;
        case 8:
            answer = 'btn8';
            break;
        case 9:
            answer = 'btn9';
            break;
        default:
            answer = 'btn5';
    }
    return answer;
}

function think() {
    var randomNum = moves[Math.floor(Math.random()*moves.length)];
    // document.getElementById(retBtn).innerHTML = "O";
    var retBtn = numToBtn(randomNum);
    document.getElementById(retBtn).innerHTML = "O";
}

function buttonOne() {
    afterPress('1', 'btn1');
}
function buttonTwo() {
    afterPress('2', 'btn2');
}
function buttonThree() {
    afterPress('1', 'btn1');
}
function buttonOne() {
    afterPress('1', 'btn1');
}
function buttonOne() {
    afterPress('1', 'btn1');
}
function buttonOne() {
    afterPress('1', 'btn1');
}
function buttonOne() {
    afterPress('1', 'btn1');
}
function buttonOne() {
    afterPress('1', 'btn1');
}
function buttonOne() {
    afterPress('1', 'btn1');
}

function afterPress(num, btn) {
    if (moves.includes(num)){
        document.getElementById(btn).innerHTML = "X";
        userMoves.push(num);
        var index = moves.indexOf(num);
        if (index > -1) {
            moves.splice(index, 1);
        }
        think();
    }
}
