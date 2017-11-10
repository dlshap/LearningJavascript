// "use strict";
document.addEventListener("DOMContentLoaded", function () {
    runExercise();
});

function runExercise() {
    const PIECES = "# ";
    var chessBoard = "";
    var boardSizeAnswer, boardSize, boardHeight, boardWidth;
    var ask = "How big?";

    while (true) {
        boardSizeAnswer = prompt(ask, "8x8");
        if (boardSizeAnswer != null) {
            boardSize = boardSizeAnswer.split("x");
            if (boardSize.length == 2) {
                boardHeight = Number(boardSize[0]);
                boardWidth = Number(boardSize[1]);
            }
        }
        if (!(isNaN(boardWidth) || isNaN(boardWidth)) && (boardWidth!=0) && (boardHeight !=0))
            break;
        else
            ask = "Must be in form height x width (example: '8x8'). So, how big?";
    }

    for (var i = 0; i < boardHeight; i++) {
        for (var j = 0; j < boardWidth; j++) {
            chessBoard += PIECES.substr(((i * boardWidth + j) % 2), 1);
        }
        chessBoard += "\n";
    }

    console.log(chessBoard);
}
