var btn1P = false, btn2P = false, btn3P = false, btn4P = false, btn5P = false, btn6P = false, btn7P = false, btn8P = false, btn9P = false;

var winnerFound = false;

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
        var btn1 = numToBtn(pos1), btn2 = numToBtn(pos2), btn3 = numToBtn(pos3);
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
            btn1P = true, btn2P = true, btn3P = true, btn4P = true, btn5P = true, btn6P = true, btn7P = true, btn8P = true, btn9P = true;
            var mBtn = document.getElementById('playAgainBtn');
            mBtn.style.display = 'block';
            winnerFound = true;
            document.getElementById('message').innerHTML = "holy crap theres a win on the board!";
            i = 9;
        }
    }

    return win;
}


// function killBtn(num) {
//     switch (num) {
//     case '1':
//         btn1P = true;
//         break;
//     case '2':
//         btn2P = true;
//     case '3':
//         btn3P = true;
//     case '4':
//         btn4P = true;
//     case '5':
//         btn5P = true;
//     case '6':
//         btn6P = true;
//     case '7':
//         btn7P = true;
//     case '8':
//         btn8P = true;
//     case '9':
//         btn9P = true;
//     default:
//         var def = num;
//     }
// }

function populate(num, letter, playerMoves) {
    var btn;
    // killBtn(num);
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
    document.getElementById('message').innerHTML = "anticipatingWin";
    var answer = anticipate2(winnerPos, myMoves);
    return answer;
}

function anticipateUserWin() {
    var answer = anticipate2(winnerPos, userMoves);
    return answer;
}

function anticipate2 (posList, playerMoves) {
    var answer = '0';
    var counter = 0;
    var sum = 0;
    var tempArr = [];

    for (lis in posList) {
        if (answer === '0') {
            counter = 0;
            sum = 0;
            tempArr = [];
            for (move in playerMoves) {
                if (lis.includes(move)) {
                    tempArr.push(move);
                    if (tempArr.length > 1) {
                        document.getElementById('message').innerHTML = "yes";
                        for (i in lis) {
                            for (j in tempArr) {
                                if (j !== i) {
                                    answer = i;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

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


function meFirstBtn() {
    hideFirstBtns();
    think();
}

function hideFirstBtns() {
    var mBtn = document.getElementById('meFirstBtn');
    mBtn.style.display = 'none';
}

function buttonOne() {
    if (!btn1P){
        btn1P = true;
        hideFirstBtns();
        populate('1', 'X', userMoves);
        if (!winnerFound){
            think();
        }
    }
}
function buttonTwo() {
    if (!btn2P) {
        btn2P = true;
        hideFirstBtns();
        populate('2', 'X', userMoves);
        if (!winnerFound){
            think();
        }
    }
}
function buttonThree() {
    if (!btn3P) {
        btn3P = true;
        hideFirstBtns();
        populate('3', 'X', userMoves);
        if (!winnerFound){
            think();
        }
    }
}
function buttonFour() {
    if (!btn4P) {
        btn4P = true;
        hideFirstBtns();
        populate('4', 'X', userMoves);
        if (!winnerFound){
            think();
        }
    }
}
function buttonFive() {
    if (!btn5P){
        btn5P = true;
        hideFirstBtns();
        populate('5', 'X', userMoves);
        if (!winnerFound){
            think();
        }
    }
}
function buttonSix() {
    if (!btn6P) {
        hideFirstBtns();
        populate('6', 'X', userMoves);
        if (!winnerFound){
            think();
        }
    }
}
function buttonSeven() {
    if (!btn7P) {
        btn7P = true;
        hideFirstBtns();
        populate('7', 'X', userMoves);
        if (!winnerFound){
            think();
        }
    }
}
function buttonEight() {
    if (!btn8P) {
        btn8P = true;
        hideFirstBtns();
        populate('8', 'X', userMoves);
        if (!winnerFound){
            think();
        }
    }
}
function buttonNine() {
    if (!btn9P) {
        btn9P = true;
        hideFirstBtns();
        populate('9', 'X', userMoves);
        if (!winnerFound){
            think();
        }
    }
}
