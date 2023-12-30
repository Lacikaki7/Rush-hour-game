const level = window.location.href.split('/').pop();

let obstacles = [];
if (level === 'level_2.html') {
    obstacles = [
        { x: 0, y: 0, width: 3, height: 1 },
        { x: 2, y: 1, width: 1, height: 3 },
        { x: 0, y: 3, width: 1, height: 2 },
        { x: 0, y: 5, width: 3, height: 1 },
        { x: 5, y: 0, width: 1, height: 3 },
        { x: 4, y: 3, width: 2, height: 1 },
        { x: 4, y: 4, width: 1, height: 2 },
        { x: 0, y: 2, width: 2, height: 1 }
    ];
} else if (level === 'level_1.html') {
    obstacles = [
        { x: 0, y: 0, width: 2, height: 1 },
        { x: 0, y: 1, width: 2, height: 1 },
        { x: 2, y: 1, width: 1, height: 2 },
        { x: 4, y: 1, width: 1, height: 2 },
        { x: 5, y: 0, width: 1, height: 3 },
        { x: 1, y: 3, width: 1, height: 2 },
        { x: 2, y: 3, width: 2, height: 1 },
        { x: 4, y: 3, width: 2, height: 1 },
        { x: 0, y: 2, width: 2, height: 1 }
    ];
} else if (level === 'level_3.html') {
    obstacles = [
        { x: 1, y: 0, width: 2, height: 1 },
        { x: 3, y: 0, width: 2, height: 1 },
        { x: 3, y: 1, width: 1, height: 2 },
        { x: 4, y: 2, width: 1, height: 2 },
        { x: 0, y: 3, width: 1, height: 2 },
        { x: 1, y: 3, width: 3, height: 1 },
        { x: 0, y: 5, width: 2, height: 1 },
        { x: 2, y: 4, width: 1, height: 2 },
        { x: 3, y: 4, width: 1, height: 2 },
        { x: 4, y: 4, width: 2, height: 1 },
        { x: 0, y: 2, width: 2, height: 1 }
    ];
} else if (level === 'level_5.html') {
    obstacles = [
        { x: 0, y: 0, width: 3, height: 1 },
        { x: 3, y: 0, width: 1, height: 2 },
        { x: 4, y: 0, width: 1, height: 2 },
        { x: 5, y: 0, width: 1, height: 3 },
        { x: 2, y: 1, width: 1, height: 2 },
        { x: 4, y: 2, width: 1, height: 2 },
        { x: 0, y: 3, width: 3, height: 1 },
        { x: 0, y: 4, width: 1, height: 2 },
        { x: 3, y: 4, width: 2, height: 1 },
        { x: 2, y: 5, width: 3, height: 1 },
        { x: 0, y: 2, width: 2, height: 1 }
    ];
} else if (level === 'level_4.html') {
    obstacles = [
        { x: 2, y: 0, width: 1, height: 3 },
        { x: 3, y: 0, width: 1, height: 2 },
        { x: 4, y: 0, width: 2, height: 1 },
        { x: 5, y: 1, width: 1, height: 3 },
        { x: 0, y: 3, width: 1, height: 2 },
        { x: 0, y: 5, width: 2, height: 1 },
        { x: 1, y: 3, width: 2, height: 1 },
        { x: 1, y: 4, width: 2, height: 1 },
        { x: 3, y: 3, width: 2, height: 1 },
        { x: 3, y: 4, width: 1, height: 2 },
        { x: 0, y: 2, width: 2, height: 1 }
    ];
}

let timer = 0; // in seconds
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        // Update the displayed timer on the game board
        updateTimerDisplay();
    }, 1000); // Update every 1 second
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) {
        timerDisplay.textContent = `Idő: ${timer} seconds`;
    }
}

let stepCount = 0;

function updateStepCounter() {
    const stepCounterDisplay = document.getElementById('step-counter');
    if (stepCounterDisplay) {
        stepCounterDisplay.textContent = `Lépések: ${stepCount}`;
    }
}


const gameBoard = document.getElementById('game-board');
const boardWidth = 6;
const boardHeight = 6;

function addMainMenuButton() {
    const mainMenuButton = document.createElement('img');
    mainMenuButton.src = 'main.png';
    mainMenuButton.alt = 'Főmenü';
    mainMenuButton.addEventListener('click', () => {
        window.location.href = 'index.php';
    });
    mainMenuButton.classList.add('mainMenuButton');
    document.body.appendChild(mainMenuButton);
}

function addResetButton() {
    const resetButton = document.createElement('img');
    resetButton.src = 'reset.png';
    resetButton.alt = 'Újrakezdés';
    resetButton.addEventListener('click', () => {
        window.location.href = level;
    });
    resetButton.classList.add('resetButton');
    document.body.appendChild(resetButton);
}

addMainMenuButton();
addResetButton();

const ownFigure = {
   width: 2,
   height: 1
};

let ownFigurePosition = {
   x: 0,
   y: 2
};


let selectedElement = null;
let gameEnded = false;
let isMoving = false;

function renderGameBoard() {
   for (let y = 0; y < boardHeight; y++) {
       for (let x = 0; x < boardWidth; x++) {
           const cell = document.createElement('div');
            cell.classList.add('cell');
           if (x === 5 && y === 2) {
            cell.classList.add('endCell');
           }
           gameBoard.appendChild(cell);
       }
   }
}

const obstacleStyles = [
    'obstacle1',
    'obstacle2',
    'obstacle3',
    'obstacle4',
    'obstacle5',
    'obstacle6',
    'obstacle7',
    'obstacle8',
    'obstacle9',
    'obstacle10',
    'obstacle11',
    'obstacle12',
    'obstacle13'
];

function renderObstacles() {
    obstacles.forEach((obstacle, index) => {
       for (let y = 0; y < obstacle.height; y++) {
           for (let x = 0; x < obstacle.width; x++) {
               const cellIndex = obstacle.x + x + (obstacle.y + y) * boardWidth;
               const cell = gameBoard.children[cellIndex];
               if (obstacle.x === ownFigurePosition.x && obstacle.y === ownFigurePosition.y) {
                cell.classList.add('ownFigure');
               } else {
                if (index < 13){
                    cell.classList.add(obstacleStyles[index]);
                } else {
                    cell.classList.add(obstacleStyles[index-12]);
                }
                
               }
               cell.addEventListener('click', () => selectElement(index));
           }
       }
   });
}

function selectElement(index) {
    if (!gameEnded && selectedElement !== null && !isMoving) {
        const selectedObstacle = obstacles[selectedElement];
        selectedObstacle.selected = false;
        const selectedCells = [];

        for (let y = 0; y < selectedObstacle.height; y++) {
            for (let x = 0; x < selectedObstacle.width; x++) {
                const selectedCellIndex = selectedObstacle.x + x + (selectedObstacle.y + y) * boardWidth;
                selectedCells.push(selectedCellIndex);
            }
        }

        selectedCells.forEach(selectedCellIndex => {
            const selectedCell = gameBoard.children[selectedCellIndex];
            selectedCell.classList.remove('selected');
        });
    }

    const obstacle = obstacles[index];
    if (!gameEnded && obstacle !== ownFigure && !isMoving) {
        selectedElement = index;
        obstacles[selectedElement].selected = true;
        const selectedCells = [];
        for (let y = 0; y < obstacle.height; y++) {
            for (let x = 0; x < obstacle.width; x++) {
                const selectedCellIndex = obstacle.x + x + (obstacle.y + y) * boardWidth;
                selectedCells.push(selectedCellIndex);
            }
        }

        selectedCells.forEach(selectedCellIndex => {
            const selectedCell = gameBoard.children[selectedCellIndex];
            selectedCell.classList.add('selected');
        });
    }
}

function moveElement(direction) {
    if (!gameEnded && selectedElement !== null && !isMoving) {
        const obstacle = obstacles[selectedElement];
        const canMove = canElementMove(obstacle, direction);
        if (canMove) {
            isMoving = true;
            stepCount++; // Increment the step counter
            updateStepCounter();
            if (direction === 'right') {
                if (obstacle.x === ownFigurePosition.x && obstacle.y === ownFigurePosition.y) {
                    ownFigurePosition.x++;
                    checkWinCondition();
                }
                obstacle.x++;
            } else if (direction === 'left') {
                if (obstacle.x === ownFigurePosition.x && obstacle.y === ownFigurePosition.y) {
                    ownFigurePosition.x--;
                }
                obstacle.x--;
            } else if (direction === 'up') {
                if (obstacle.x === ownFigurePosition.x && obstacle.y === ownFigurePosition.y) {
                    ownFigurePosition.y--;
                }
                obstacle.y--;
            } else if (direction === 'down') {
                if (obstacle.x === ownFigurePosition.x && obstacle.y === ownFigurePosition.y) {
                    ownFigurePosition.y++;
                }
                obstacle.y++;
            }

            isMoving = false;

            if (gameEnded) {
                selectedElement = null;
            }
            clearBoard();
            renderGameBoard();
            renderObstacles();
            selectElement(selectedElement);
            checkWinCondition();
        }
    }
}

function canElementMove(element, direction) {
    if (isMoving) {
        return false;
    }
    
    const newX = element.x + (direction === 'right' ? 1 : direction === 'left' ? -1 : 0);
    const newY = element.y + (direction === 'down' ? 1 : direction === 'up' ? -1 : 0);

    if (newX < 0 || newY < 0 || newX + element.width > boardWidth || newY + element.height > boardHeight) {
        return false;
    }

    for (const otherElement of obstacles) {
        if (otherElement !== element) {
            if (
                newX + element.width > otherElement.x &&
                newX < otherElement.x + otherElement.width &&
                newY + element.height > otherElement.y &&
                newY < otherElement.y + otherElement.height
            ) {
                return false;
            }
        }
    }

    if (element.width > 1) {
        if (direction !== 'right' && direction !== 'left') {
            return false;
        }
    } else if (element.height > 1) {
        if (direction !== 'up' && direction !== 'down') {
            return false;
        }
    }

    return true;
}

function displayMessage(message) {
    stopTimer();

    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    gameBoard.appendChild(messageElement);
    gameEnded = true;
    //renderRestartButton();
    renderNextLevelButton();
}

/*function renderRestartButton() {
    const restartButton = document.createElement('button');
    restartButton.textContent = "Újrakezdés";
    restartButton.addEventListener('click', restartGame);
    restartButton.classList.add('restartButton');
    gameBoard.appendChild(restartButton);
}

function renderNextLevelButton() {
    const nextLevelButton = document.createElement('button');
    nextLevelButton.textContent = "Következő pálya";
    nextLevelButton.addEventListener('click', () => {
        window.location.href = 'level_2.html';
    });
    nextLevelButton.classList.add('nextLevelButton');
    gameBoard.appendChild(nextLevelButton);
}*/

function renderNextLevelButton() {
    const nextLevelButton = document.createElement('img');
    nextLevelButton.src = 'next4.png';
    nextLevelButton.alt = "Következő pálya";
    if (level === 'level_5.html'){
        nextLevelButton.addEventListener('click', () => {
            window.location.href = 'index.php';
        });
    } else if (level === 'level_1.html') {
        nextLevelButton.addEventListener('click', () => {
            window.location.href = 'level_2.html';
        });
    } else if (level === 'level_2.html') {
        nextLevelButton.addEventListener('click', () => {
            window.location.href = 'level_3.html';
        });
    } else if (level === 'level_3.html') {
        nextLevelButton.addEventListener('click', () => {
            window.location.href = 'level_4.html';
        });
    } else if (level === 'level_4.html') {
        nextLevelButton.addEventListener('click', () => {
            window.location.href = 'level_5.html';
        });
    }
    
    nextLevelButton.classList.add('nextLevelButton');
    gameBoard.appendChild(nextLevelButton);
}

function checkWinCondition() {
    if (ownFigurePosition.x === boardWidth - ownFigure.width) {
        // Insert data into user_game_data table
        insertGameData(level, stepCount, timer);
        displayMessage("Gratulálok, nyertél!");
    }
}

function insertGameData(level, steps, completionTime) {
    // You need to make an AJAX request or use another method to send data to the server.
    // In the server-side PHP code, you will insert this data into the database.
    // Example AJAX request:
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "saveGameData.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText); // Log the server response
        }
    };
    const data = `level=${level}&steps=${steps}&completionTime=${completionTime}`;
    xhr.send(data);
}


document.addEventListener('keydown', event => {
   if (event.key === 'ArrowRight') {
       moveElement('right');
   } else if (event.key === 'ArrowLeft') {
       moveElement('left');
   } else if (event.key === 'ArrowUp') {
       moveElement('up');
   } else if (event.key === 'ArrowDown') {
       moveElement('down');
   }
});

function clearBoard() {
   while (gameBoard.firstChild) {
       gameBoard.removeChild(gameBoard.firstChild);
   }
}

function startGame() {
    startTimer();
    renderGameBoard();
    renderObstacles();
    checkWinCondition();
}

startGame();