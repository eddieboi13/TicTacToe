const playerFactory = (playerNumber, alignment) => {
    return {playerNumber, alignment}

}
const gameBoardModule = (function() {
    let gameBoard = ['X']
    return {gameBoard}
}
    )() 

const playerSelection = (function() {
    let player1dom = document.querySelector('.player1')
    let player2dom = document.querySelector('.player2')
    let O = document.querySelector('.O')
    let X = document.querySelector('.X')

    let alignment
    O.addEventListener('click', (e) => {
        alignment = "O"
        return alignment
    })
    X.addEventListener('click', (e)=> {
        alignment = 'X'
        return alignment
    })
    let player1 = playerFactory(1, alignment)

    return {player1, alignment}
})()
pushToArray = function() {
    if(playerSelection.player1.alignment == 'X') {
        gameBoardModule.gameBoard.push('X')
    }
    else if (playerSelection.player1.alignment = 'O') {
        gameBoardModule.gameBoard.push('X')
    }
    return gameBoardModule.gameBoard
    }

const renderGameBoard = (function() {
    let gameBoard = document.querySelectorAll('.box')
    let creator = function() {
        for(let i = 0; i < gameBoard.length; i++) {
            gameBoard[i].className = 'boxRender'
        }
        return {gameBoard}
    }
    return {gameBoard, creator}
})()
const renderContents = function() {
    for(let i = 0; i < gameBoardModule.gameBoard.length -1; i++) {
        gameBoardModule.gameBoard[i] = document.createTextNode(gameBoardModule.gameBoard[i])
        return gameBoardModule.gameBoard[i]
    }
}

const placeLogic = (function() {
    const markX = function() { renderGameBoard.gameBoard.forEach(element => {
        let i = 1
        let box[i] = document.querySelector('')
        addEventListener('click', (e) => {
            append('X')
            return gameBoardModule.gameBoard.push('X')
        })
    })
}
    const markO = function() {renderGameBoard.gameBoard.forEach(element => {
        addEventListener('click', (e) => {
            append('O')
            return gameBoardModule.gameBoard.push('O')
        })
    })
}
    return {markO, markX}
})()
 
    const playGameLogic = function() {
        if(playerSelection.player1.alignment == 'X') {
            placeLogic.markX()
            let computerAI = playerFactory(2, 'O')
        }
        else if (playerSelection.player1.alignment == 'O') {
            placeLogic.markO()
            let computerAI = playerFactory(2, 'X')
        }
        return{computerAI}
    }

placeLogic.markO()


const gameFlow = (function() {

})()
renderGameBoard.creator()