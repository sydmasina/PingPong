const buttonSet = document.querySelector('#buttonSet');
const scoreBoard = document.querySelector('#scoreDisplay');
let playerOne = 0;
let playerTwo = 0;

let maxScore = 4;
const playerOneBtn = document.querySelector('#player1Btn');
const playerTwoBtn = document.querySelector('#player2Btn');

const select = document.querySelector('#maxScore');
select.addEventListener('change', (e)=>{
    maxScore = parseInt(e.target.value);
    enableBtn(playerOne, playerTwo);
    playerOne = 0;
    playerTwo = 0;
    scoreBoard.innerText = `${playerOne} to ${playerTwo}`;
})


function disableBtn(num1, num2){
    if(num1 === maxScore || num2 === maxScore){
        playerOneBtn.setAttribute("disabled", "");
        playerTwoBtn.setAttribute("disabled", "");
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        span1.innerText = playerOne;
        span2.innerText = playerTwo;
        if(num1 === maxScore){
            scoreBoard.innerText = ' to ';
            span1.style.color = 'green';
            span2.style.color = 'red';
            scoreBoard.insertAdjacentElement('afterbegin', span1);
            scoreBoard.insertAdjacentElement('beforeend', span2);
        }
        else if(num2 === maxScore){
            scoreBoard.innerText = ' to ';
            span1.style.color = 'red';
            span2.style.color = 'green';
            scoreBoard.insertAdjacentElement('afterbegin', span1);
            scoreBoard.insertAdjacentElement('beforeend', span2);
        }
    }
}
function enableBtn(num1,num2){
    if(num1 < maxScore && num2 < maxScore){
        playerOneBtn.disabled=false;
        playerTwoBtn.disabled=false;
    }
}

buttonSet.addEventListener('click', (e)=>{
    const target = e.target.innerText;
    if(target === '+1 Player One'){
        playerOne +=1;
        scoreBoard.innerText = `${playerOne} to ${playerTwo}`
        disableBtn(playerOne, playerTwo);
    }
    else if(target === '+1 Player Two'){
        playerTwo +=1;
        scoreBoard.innerText = `${playerOne} to ${playerTwo}`
        disableBtn(playerOne, playerTwo);
    }
    else if(target === 'Reset'){
        playerOne = 0;
        playerTwo = 0;
        scoreBoard.innerText = `${playerOne} to ${playerTwo}`;
        
        enableBtn(playerOne, playerTwo);
    }
})






