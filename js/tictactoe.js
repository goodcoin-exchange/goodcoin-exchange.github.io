

function buttonOne() {
    /*global document: false */
    document.getElementById('btn1').innerHTML = "X";
    if (!oneTaken) {
        document.getElementById('btn1').innerHTML = "X";
        oneTaken = true;
        userMoves.push('1');
    }
}
function buttonTwo() {
    /*jslint browser:true*/
    if (!twoTaken) {
        document.getElementById('btn2').innerHTML = "X";
        twoTaken = true;
        userMoves.push('2');
    }
}
function buttonThree() {
    /*jslint browser:true */
    if (!threeTaken) {
        document.getElementById('btn3').innerHTML = "X";
        threeTaken = true;
        userMoves.push('3');
    }
}
function buttonFour() {
    /*jslint browser:true */
    if (!fourTaken) {
        document.getElementById('btn4').innerHTML = "X";
        fourTaken = true;
        userMoves.push('4');
    }
}
function buttonFive() {
    /*jslint browser:true */
    if (!fiveTaken) {
        document.getElementById('btn5').innerHTML = "X";
        fiveTaken = true;
        userMoves.push('5');
    }
}
function buttonSix() {
    /*jslint browser:true */
    if (!sixTaken) {
        document.getElementById('btn6').innerHTML = "X";
        sixTaken = true;
        userMoves.push('6');
    }
}
function buttonSeven() {
    /*jslint browser:true */
    if (!sevenTaken) {
        document.getElementById('btn7').innerHTML = "X";
        sevenTaken = true;
        userMoves.push('7');
    }
}
function buttonEight() {
    /*jslint browser:true */
    if (!eightTaken) {
        document.getElementById('btn8').innerHTML = "X";
        eightTaken = true;
        userMoves.push('8');
    }
}
function buttonNine() {
    /*jslint browser:true */
    if (!nineTaken) {
        document.getElementById('btn9').innerHTML = "X";
        nineTaken = true;
        userMoves.push('9');
    }
}

var moveCounter = 0;
var matchOver = false;

var userMoves = [];
var myMoves = [];

var oneTaken = false;
var twoTaken = false;
var threeTaken = false;
var fourTaken = false;
var fiveTaken = false;
var sixTaken = false;
var sevenTaken = false;
var eightTaken = false;
var nineTaken = false;

var field = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var winnerPos = [["1", "2", "3"], ["1", "4", "7"],
             ["1", "5", "9"], ["4", "5", "6"],
             ["7", "8", "9"], ["2", "5", "8"],
             ["3", "6", "9"], ["3", "5", "7"]];

var firstAdvantage = ["5", "1", "3", "7", "9"];

var secondAdvantage = [["5", "1"], ["5", "3"], ["5", "7"],
                   ["5", "9"], ["1", "3"], ["3", "9"],
                   ["7", "9"], ["1", "7"]];

var thirdAdvantage = [["1", "3", "5"], ["3", "5", "9"], ["7", "5", "9"],
                  ["1", "5", "7"], ["1", "3", "9"], ["1", "3", "7"],
                  ["7", "9", "3"], ["2", "4", "1"], ["2", "3", "6"],
                  ["6", "9", "8"], ["4", "7", "8"]];

var moves = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];



function intersect(a, b) {
    var t;
    if (b.length > a.length) {
        t = b;
        b = a;
        a = t;
    }// indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}


function anticipate(posList, whoMoves) {
    var lis, el, commonEl, answer = "0";
    for (lis in posList) {
        commonEl = instersect(whoMoves, lis);
        if (commonEl.length > 1) {
            for (el in lis) {
                if (!commonEl.includes(el)) {
                    if (moves.includes(el)) {
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



function anticipateWin() {
    var answer = anticipate(winnerPos, myMoves);
    return answer;
}


function anticipateUserWin() {
    var answer = anticipate(winnerPos, userMoves);
    return answer;
}


function anticipateUserAdvantage() {
    var answer;
    if (userMoves.length < 2) {
        answer = anticipate(secondAdvantage, userMoves);
    } else {
        answer = anticipate(thirdAdvantage, userMoves);
    }
    return answer;
}


function anticipateAdvantage() {
    var answer = "0";
    if (myMoves.length < 2) {
        answer = anticipate(secondAdvantage, myMoves);
    } else {
        answer = anticipate(thirdAdvantage, myMoves);
    }
    return answer;
}



function afterPress(btnNum) {
    userMoves.push(btnNum);
    if (moves.length >= 0) {
        var index = moves.indexOf(btnNum);
        if (index > -1) {
            moves.splice(index, 1);
        }

    }

    moveCounter += 1;
}
        }

function think() {
    var answer;
    if (moveCounter === 0) {
        answer = "5";
    } else {
        if (moveCounter === 1) {
            if (userMoves[-1] === "5") {
                answer = "1";
            } else {
                answer = "5";
            }
        } else {
            answer = anticipateWin();
        }
        if (answer === "0") {
            answer = anticipateUserWin();
        }
        if (answer === "0") {
            answer = anticipateAdvantage();
        }
        if (answer === "0") {
            answer = anticipateUserAdvantage();
        }
        // if (answer === "0"){
        //     answer = random.choice(moves);
        // }
        myMoves.append(answer);
        return answer;
    }
