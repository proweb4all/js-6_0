window.addEventListener('DOMContentLoaded', () =>{

    let gameBlock = document.querySelector('.game'),
        canv = document.querySelector('.game__area'),
        ctx = canv.getContext('2d'),
        score = document.querySelector('.score__points'),
        status = document.querySelector('.game__status'),
        gameStatus = {
            ready: 'Готовы? Начинаем!',
            win: 'Вы победили!',
            lose: 'Игра окончена!',
            proccess: 'Идет игра...'
        },
        startGame = false,
        posX = posY = 10,
        blockX = blockY = 5,
        gridSize = tileCount = 20,
        appleX = appleY = Math.floor(Math.random() * tileCount),
        xVel = yVel = 0,
        trail = [],
        tail = 1,
        points = 0;


    function game() {
        if (startGame) status.textContent = gameStatus.proccess;
        posX += xVel;
        posY += yVel;
        if (posX < 0) posX = tileCount - 1;
        if (posX > tileCount - 1) posX = 0;
        if (posY < 0) posY = tileCount - 1;
        if (posY > tileCount - 1) posY = 0;
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canv.width, canv.height);
        ctx.fillStyle = 'red';
        ctx.fillRect(appleX * gridSize, appleY * gridSize, gridSize - 2, gridSize - 2);
        ctx.fillStyle = 'white';
        ctx.fillRect(blockX * gridSize, blockY * gridSize, gridSize - 2, gridSize - 2);
        ctx.fillStyle = 'lime';
        for (let i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize - 2, gridSize - 2);
            if (startGame) {
                if ((trail[i].x == posX && trail[i].y == posY) || (trail[i].x == blockX && trail[i].y == blockY)) endGame();
            };
        };
        trail.push({x: posX, y: posY});
        while (trail.length > tail) {
            trail.shift();
        };
        if (appleX == posX && appleY == posY){
            tail++;
            appleX = appleY = Math.floor(Math.random() * tileCount);
            points++;
            score.textContent = points;
        };
    };

    function endGame() {
        status.textContent = gameStatus.lose;
        startGame = false;
        alert(gameStatus.lose + '\nСобрано яблок: ' + points);
        status.textContent = gameStatus.ready;
        posX = posY = 10;
        appleX = appleY = Math.floor(Math.random() * tileCount);
        xVel = yVel = 0;
        trail = [];
        tail = 1;
        points = 0;
        score.textContent = points;
    };

    document.body.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('box__btn')){
            gameBlock.classList.remove('hidden');
            target.classList.add('hidden');
            status.textContent = gameStatus.ready;
        };
    });

    document.body.addEventListener('keydown', (e) => {
        let target = e.keyCode;
        switch (target) {
            case 37:
                xVel = -1; yVel = 0;
                startGame = true;
                break;
            case 38:
                xVel = 0; yVel = -1;
                startGame = true;
                break;
            case 39:
                xVel = 1; yVel = 0;
                startGame = true;
                break;
            case 40:
                xVel = 0; yVel = 1;
                startGame = true;
                break;
        };
    });
    setInterval(game, 1000/5);
});