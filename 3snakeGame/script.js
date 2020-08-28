const starter = document.querySelector('#start-button');
const gameContainer = Array.from(document.querySelectorAll('.game-container div'));


let startPosition = 4;
let tailPosition =0;
let startShape = [0, 10, 20];
let currentShape = startShape;
let interval;

function babySnake() {
    startShape.forEach(item => {
        gameContainer[item+startPosition].style.backgroundColor = 'green';
    })

    interval = setInterval(crawl, 1000);
}

function crawl() {
    tailPosition = startPosition;
    startPosition += 10;
    startShape.forEach(item => {
        gameContainer[item+startPosition].style.backgroundColor = 'green';
    })

    /*for(let i = 0; i < currentShape.length; i++) {
        currentShape[i] += 10;
    }*/

    /*currentShape.forEach(position => {
        let i = 0;
        position =+10;
        currentShape[i] = position;
        i++;
    })*/

    console.log(currentShape);
    removeTrace();
    //console.log(startPosition);
}

function removeTrace() {
    gameContainer[tailPosition].style.backgroundColor = 'darkgray';
}


function moveLeft() {

}

starter.addEventListener('click', babySnake);

//starter.addEventListener('click', beginCrawl);

//console.log(starter);
//console.log(gameContainer);
