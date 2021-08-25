// Decideds which player's turn it is and stores the moves they make
let activePlayer = "X";
let selectedSquares = [];

// Places an X or an O in the selected square
function placeXOrO(squareNum) {
    if(!selectedSquares.some(element => element.includes(squareNum))) {
        let select = document.getElementById(squareNum);
        if(activePlayer === "X") {
            select.style.backgroundImage = 'url("./Images/X.png")';
        } else {
            select.style.backgroundImage = 'url("./Images/O.png")';
        }
        selectedSquares.push(squareNum + activePlayer);
        checkWinCondition();
        if(activePlayer === "X") {
            activePlayer = "O";
        } else{
            activePlayer = "X";
        }
        audio("./Media/placeDown.mp3");
        if(activePlayer === "O") {
            disableClick();
            setTimeout(function () { computersTurn();}, 1000)
        }
        return true;
    }
    // Randomly chooses a square
    function computersTurn() {
        let success = false;
        let pickASquare;
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if(placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            }
        }
    }
}

// Checks which squares are selected and determines who won
function checkWinCondition() {
    if(arrayIncludes('0X', '1X', '2X')) { drawWinLine (50, 100, 558, 100) }
    else if(arrayIncludes('3X', '4X', '5X')) { drawWinLine (50, 304, 558, 304) }
    else if(arrayIncludes('6X', '7X', '8X')) { drawWinLine (50, 508, 558, 508) }
    else if(arrayIncludes('0X', '3X', '6X')) { drawWinLine (100, 50, 100, 558) }
    else if(arrayIncludes('1X', '4X', '7X')) { drawWinLine (304, 50, 304, 558) }
    else if(arrayIncludes('2X', '5X', '8X')) { drawWinLine (508, 50, 508, 558) }
    else if(arrayIncludes('6X', '4X', '2X')) { drawWinLine (100, 508, 510, 90) }
    else if(arrayIncludes('0X', '4X', '8X')) { drawWinLine (100, 100, 520, 520) }
    else if(arrayIncludes('00', '10', '20')) { drawWinLine (50, 100, 558, 100) }
    else if(arrayIncludes('30', '40', '50')) { drawWinLine (50, 304, 558, 304) }
    else if(arrayIncludes('60', '70', '80')) { drawWinLine (50, 508, 558, 508) }
    else if(arrayIncludes('00', '30', '60')) { drawWinLine (100, 50, 100, 558) }
    else if(arrayIncludes('10', '40', '70')) { drawWinLine (304, 50, 304, 558) }
    else if(arrayIncludes('20', '50', '80')) { drawWinLine (508, 50, 508, 558) }
    else if(arrayIncludes('60', '40', '20')) { drawWinLine (100, 508, 510, 90) }
    else if(arrayIncludes('00', '40', '80')) { drawWinLine (100, 100, 520, 520) }
    else if(selectedSquares.length >= 9) {
        audio('./Media/scratch.mp3');
        setTimeout(function () { resetGame(); }, 1000) ;
    }

    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        if(a === true && b === true && c === true) { return true }
    }
}

// Keeps the player from clicking any squares during the opponent's turn
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

// Allows audio to play
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

// Draws a line that connects the winning squares
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608)
        c.beginPath();
        c.moveTo (x1, y1)
        c.lineTo(x, y)
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    
    function clear() {
            const animationLoop = requestAnimationFrame(clear);
            c.clearRect(0, 0, 608, 608);
            cancelAnimationFrame(animationLoop);
        }
        disableClick();
        audio('./media/youWin.mp3');
        animateLineDrawing();
        setTimeout(function() { clear(); resetGame(); }, 1000);
}

// Starts the game from the beginning
function resetGame() {
    for(let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ''
    }
    selectedSquares = [];
}