const playerFactory = (playerNumber, alignment) => {
    return {playerNumber, alignment}

}

const gameBoardModule = (function() {
    let gameBoard = ['','','','','','','','','']
    return {gameBoard}
}
)() 
const winningBoards = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [2, 5, 8],
    [1, 4, 7],
]
const renderGameBoard = function() {
    let box = document.querySelectorAll('.box')
    for(let i = 0; i < box.length; i++) {
        gameBoardModule.gameBoard[i] = box[i].textContent
    }
    console.log(gameBoardModule.gameBoard)
}
renderGameBoard()
const placeX = function() {
    let box = document.querySelectorAll('.box')
    for(let i = 0; i < box.length; i++) {
        box[i].addEventListener('click', (e) => {
            if(box[i].textContent == ''){
                box[i].append('X')
            }
        })
    }
}
const placeO = function() {
    let box = document.querySelectorAll('.box')
    for(let i = 0; i < box.length; i++) {
        box[i].addEventListener('click', (e) => {
            if(box[i].textContent == ''){
                box[i].append('O')
            }
        })
    }
}
const pickAlignment = function() {
    let markerX = document.querySelector('.X')
    let markerO = document.querySelector('.O')
    markerX.addEventListener('click', placeX)
    markerO.addEventListener('click', placeO)

}
pickAlignment()