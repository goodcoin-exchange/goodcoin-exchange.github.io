var moveCounter = 0;

var userMoves = [];
var myMoves = [];
var moves = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

var winnerPos = [["1", "2", "3"], ["1", "4", "7"],
             ["1", "5", "9"], ["4", "5", "6"],
             ["7", "8", "9"], ["2", "5", "8"],
             ["3", "6", "9"], ["3", "5", "7"]];

// field = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// function generateBtnClick() {
//     WriteFile();
// }

function numToBtn(num) {
    var answer;
    switch (num) {
    case '1':
        answer = 'btn1';
        break;
    case '2':
        answer = 'btn2';
        break;
    case '3':
        answer = 'btn3';
        break;
    case '4':
        answer = 'btn4';
        break;
    case '5':
        answer = 'btn5';
        break;
    case '6':
        answer = 'btn6';
        break;
    case '7':
        answer = 'btn7';
        break;
    case '8':
        answer = 'btn8';
        break;
    case '9':
        answer = 'btn9';
        break;
    default:
        answer = 'btn5';
    }
    return answer;
}

function checkWin(pos1, pos2, pos3, playerMoves) {
    var playerWins;
    if ((playerMoves.includes(pos1)) && (playerMoves.includes(pos2)) && (playerMoves.includes(pos3))) {
        playerWins = true;
        var btn1 = numToBtn(pos1);
        var btn2 = numToBtn(pos2);
        var btn3 = numToBtn(pos3);
        document.getElementById(btn1).style.color = 'red';
        document.getElementById(btn2).style.color = 'red';
        document.getElementById(btn3).style.color = 'red';
    } else {
        playerWins = false;
    }

    return playerWins;
}

function checkWinner(playerMoves) {
    var i, win;
    for (i = 0; i < 8; i++) {
        win = checkWin(winnerPos[i][0], winnerPos[i][1], winnerPos[i][2], playerMoves);
        if (win){
            document.getElementById('message').innerHTML = "holy crap theres a win on the board!";
            i = 9;
        }
    }

    return win;
}

function populate(num, letter, playerMoves) {
    var btn;
    if (moves.includes(num)) {
        btn = numToBtn(num);
        document.getElementById(btn).innerHTML = letter;
        playerMoves.push(num);
        moveCounter++;
        checkWinner(playerMoves);
        var index = moves.indexOf(num);
        if (index > -1) {
            moves.splice(index, 1);
        }
    }
}

function think() {
    if (moveCounter === 0) {
        populate('5', 'O', myMoves);
    } else if (moveCounter === 1){
        if (userMoves.includes('5')) {
            populate('1', 'O', myMoves);
        } else {
            populate('5', 'O', myMoves);
        }
    } else {
        var answer = anticipateWin();
        if (answer === '0') {
            answer = anticipateUserWin();
            if (answer === '0') {
                var randomNum = moves[Math.floor(Math.random() * moves.length)];
                populate(randomNum, 'O', myMoves);
                document.getElementById('message2').innerHTML = "This is a random move...";
            } else {
                populate(answer, 'O', myMoves);
                document.getElementById('message2').innerHTML = "anticipated USER win.";
            }
        } else {
            populate(answer, 'O', myMoves);
            document.getElementById('message2').innerHTML = "anticipated MY win.";
        }
    }

}

function intersect(a, b)
{
    document.getElementById('message2').innerHTML = "checking intersect";
    var i;
    var j;
    var answer = [];
    for (i = 0; i < a.length; i++){
        for (j = 0; j < b.length; j++){
            if (a[i] === b[j]){
                answer.push(a[i]);
            }
        }
    }
    return answer;
}

function anticipateWin() {
    var answer = anticipate(winnerPos, myMoves);
    return answer;
}

function anticipateUserWin() {
    var answer = anticipate(winnerPos, userMoves);
    return answer;
}

function anticipate(posList, playerMoves) {
    var answer = '0';
    var commonEl;
    for (lis in posList){
        commonEl = intersect(playerMoves, lis);
        document.getElementById('message2').innerHTML = "multiple similar array elements.";
        if (commonEl.length > 1) {
            for (el in lis){
                if (!commonEl.includes(el)){
                    if (moves.includes(el)){
                        answer = el;
                        break;
                    }
                }
            }
            break;
        }
    }
    return answer;
}

function userFirstBtn() {
    hideFirstBtns();
    document.getElementById('message').innerHTML = "Make your move...";
}

function meFirstBtn() {
    hideFirstBtns();
    think();
}

function hideFirstBtns() {
    var uBtn = document.getElementById('userFirstBtn');
    var mBtn = document.getElementById('meFirstBtn');
    uBtn.style.display = 'none';
    mBtn.style.display = 'none';
}

function buttonOne() {
    hideFirstBtns();
    populate('1', 'X', userMoves);
    think();
}
function buttonTwo() {
    hideFirstBtns();
    populate('2', 'X', userMoves);
    think();
}
function buttonThree() {
    hideFirstBtns();
    populate('3', 'X', userMoves);
    think();
}
function buttonFour() {
    hideFirstBtns();
    populate('4', 'X', userMoves);
    think();
}
function buttonFive() {
    hideFirstBtns();
    populate('5', 'X', userMoves);
    think();
}
function buttonSix() {
    hideFirstBtns();
    populate('6', 'X', userMoves);
    think();
}
function buttonSeven() {
    hideFirstBtns();
    populate('7', 'X', userMoves);
    think();
}
function buttonEight() {
    hideFirstBtns();
    populate('8', 'X', userMoves);
    think();
}
function buttonNine() {
    hideFirstBtns();
    populate('9', 'X', userMoves);
    think();
}
