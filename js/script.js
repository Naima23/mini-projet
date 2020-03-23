var turn = true; //true means X turn
var boxs = [];

function reset(A, B, C) {
    document.getElementById('A' + A).style.color = "#2EA017 ";
    document.getElementById('A' + B).style.color = "#2EA017 ";
    document.getElementById('A' + C).style.color = "#2EA017 ";

    setTimeout(function () {
        location.reload()
    }, 2000);
}

function checkWinner() {
    for (var i = 1; i <= 9; i++) {
        boxs[i] = document.getElementById('A' + i).innerHTML
    }


    // check horizontal
    if (boxs[1] == boxs[2] && boxs[2] == boxs[3] && boxs[1] != "") {
        alert('player ' + boxs[1] + ' wins the game')
        reset(1, 2, 3);
    }

    if (boxs[4] == boxs[5] && boxs[5] == boxs[6] && boxs[4] != "") {
        alert('player ' + boxs[4] + ' wins the game')
        reset(4, 5, 6);
    }

    if (boxs[7] == boxs[8] && boxs[8] == boxs[9] && boxs[7] != "") {
        alert('player ' + boxs[7] + ' wins the game')
        reset(7, 8, 9);
    }

    // check vertical
    if (boxs[1] == boxs[4] && boxs[4] == boxs[7] && boxs[1] != "") {
        alert('player ' + boxs[1] + ' wins the game')
        reset(1, 4, 7);
    }

    if (boxs[2] == boxs[5] && boxs[5] == boxs[8] && boxs[2] != "") {
        alert('player ' + boxs[2] + ' wins the game')
        reset(2, 5, 8);
    }


    if (boxs[3] == boxs[6] && boxs[6] == boxs[9] && boxs[3] != "") {
        alert('player ' + boxs[3] + ' wins the game')
        reset(3, 6, 9);
    }



    //chek diagonal
    if (boxs[3] == boxs[5] && boxs[5] == boxs[7] && boxs[3] != "") {
        alert('player ' + boxs[3] + ' wins the game')
        reset(3, 5, 7);
    }


    if (boxs[1] == boxs[5] && boxs[5] == boxs[9] && boxs[1] != "") {
        alert('player ' + boxs[1] + ' wins the game')
        reset(1, 5, 9);
    }



}

function insert(id) {
    var N = document.getElementById(id)
    if (turn && N.innerHTML == "") {
        N.innerHTML = "X";
        turn = !turn;
    } else if (!turn && N.innerHTML == "") {
        N.innerHTML = "O";
        turn = !turn;

    }
    checkWinner();

}