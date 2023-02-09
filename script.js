import createElementsDom from './domCreation.js';



let player1;
let player2;
let scene = ['start'];

const arr = (function () {
    
    const arrDomObjGame = [

        //  child body
    
        // {
        //     elementType: 'h1',
        //     attributes: {class:'title'},
        //     innerText: 'Tic Tac Toe' ,
        //     appendChild: 'body',
        // },
        // {
        //     elementType: 'div',
        //     attributes: {class:'miniPerfil'},
        //     appendChild: 'body',
        // },
        {
            elementType: 'div',
            attributes: {class:'containerTTT'},
            appendChild: 'body',
        },
        //  childs containerTTT
        {
            elementType: 'div',
            attributes: {class:'containerScore'},
            appendChild: '.containerTTT',
        },
        {
            elementType: 'div',
            attributes: {class:'containerBoard'},
            appendChild: '.containerTTT',
        },
        {
            elementType: 'div',
            attributes: {class:'containerBtns'},
            appendChild: '.containerTTT',
        },
    
        // childs containerScore
        {
            elementType: 'div',
            attributes: {class:'name1'},
            appendChild: '.containerScore',
        },
        //  child name1
        {
            elementType: 'p',
            attributes: {class:'nameScore1'},
            innerText: '' ,
            appendChild: '.name1',
        },
    
        {
            elementType: 'div',
            attributes: {class:'scoreP'},
            appendChild: '.containerScore',
        },
        //  child scoreP
        {
            elementType: 'p',
            attributes: {class:'score'},
            innerText: '0 - 0' ,
            appendChild: '.scoreP',
        },
    
        {
            elementType: 'div',
            attributes: {class:'name2'},
            appendChild: '.containerScore',
        },
        //  child name2
        {
            elementType: 'p',
            attributes: {class:'nameScore2'},
            innerText:'',
            appendChild: '.name2',
        },
    
        //  childs containerBoard
    
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'0'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'1'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'2'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'3'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'4'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'5'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'6'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'7'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'8'},
            appendChild: '.containerBoard',
        },
    
        //  childs containerBtns
    
        {
            elementType: 'div',
            attributes: {class:'btnRematch'},
            innerText: 'Rematch' ,
            appendChild: '.containerBtns',
        },
        {
            elementType: 'div',
            attributes: {class:'btnNewGame'},
            innerText: 'New Game' ,
            appendChild: '.containerBtns',
        },
    
    ];
    
    const arrItemsBoard = [
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'0'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'1'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'2'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'3'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'4'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'5'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'6'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'7'},
            appendChild: '.containerBoard',
        },
        {
            elementType: 'div',
            attributes: {class:'boardItem','data-index':'8'},
            appendChild: '.containerBoard',
        },
    ];
    
    const arrDomObjStart = [
    
        //  child body
    
        {
            elementType: 'h1',
            attributes: {class:'title'},
            innerText: 'Tic Tac Toe' ,
            appendChild: 'body',
        },
        {
            elementType: 'div',
            attributes: {class:'miniPerfil'},
            appendChild: 'body',
        },
    
        {
            elementType: 'div',
            attributes: {class:'containerStartGame'},
            appendChild: 'body',
        },
        {
            elementType: 'div',
            attributes: {class:'containerSvgTheme'},
            innerHTML: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="pathTheme" d="M15 3.75V5M15 25V26.25M26.25 15H25M5 15H3.75M22.955 22.955L22.0711 22.0711M7.92893 7.92893L7.04505 7.04505M22.955 7.04512L22.0711 7.929M7.929 22.0711L7.04511 22.955M20 15C20 17.7614 17.7614 20 15 20C12.2386 20 10 17.7614 10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            appendChild: 'body',
        },
    
        //  childs containerStartGame
    
        {
            elementType: 'form',
            attributes: {class: 'formStartGame',id:'formMain'},
            appendChild: '.containerStartGame',
        },
    
        //  childs formStartGame
    
        {
            elementType: 'div',
            attributes: {class: 'containerLabels'},
            appendChild: '.formStartGame',
        },
        {
            elementType: 'button',
            attributes: {type: 'submit', class: 'submit' ,name: 'submit'},
            innerText: 'Start Game' ,
            appendChild: '.formStartGame',
        },
    
        //  childs containerLabels
    
        {
            elementType: 'label',
            attributes: {class: 'label1'},
            appendChild: '.containerLabels',
        },
        {
            elementType: 'label',
            attributes: {class: 'label2'},
            appendChild: '.containerLabels',
        },
    
        //  childs label1
    
        {
            elementType: 'p',
            attributes: {class: 'labelP1'},
            innerText: 'Player 1' ,
            appendChild: '.label1',
        },
    
        {
            elementType: 'div',
            attributes: {class: 'containerInputs1'},
            appendChild: '.label1',
        },
    
        //  childs containerInputs1
    
        {
            elementType: 'input',
            attributes: {type: 'text',class: 'nameplayer1', name: 'namePlayer1'},
            appendChild: '.containerInputs1',
        },
    
        {
            elementType: 'div',
            attributes: {class: 'inputColor1'},
            appendChild: '.containerInputs1',
        },
    
        //  child inputColor1
    
        {
            elementType: 'input',
            attributes: {type: 'color', name: 'color1',value:'#DE1616'},
            appendChild: '.inputColor1',
        },
    
        //  childs label2
    
        {
            elementType: 'p',
            attributes: {class: 'labelP2'},
            innerText: 'Player 2' ,
            appendChild: '.label2',
        },
    
        {
            elementType: 'div',
            attributes: {class: 'containerInputs2'},
            appendChild: '.label2',
        },
    
        //  childs containerInputs2
    
        {
            elementType: 'input',
            attributes: {type: 'text', class: 'nameplayer2' , name: 'namePlayer2'},
            appendChild: '.containerInputs2',
        },
    
        {
            elementType: 'div',
            attributes: {class: 'inputColor2'},
            appendChild: '.containerInputs2',
        },
    
        //  child inputColor2
    
        {
            elementType: 'input',
            attributes: {type: 'color', name: 'color2',value:'#DE1616'},
            appendChild: '.inputColor2',
        },
        
    ];
    
    const arrDomFormStart= [
        {
            elementType: 'div',
            attributes: {class:'containerSvgTheme'},
            innerHTML: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="pathTheme" d="M15 3.75V5M15 25V26.25M26.25 15H25M5 15H3.75M22.955 22.955L22.0711 22.0711M7.92893 7.92893L7.04505 7.04505M22.955 7.04512L22.0711 7.929M7.929 22.0711L7.04511 22.955M20 15C20 17.7614 17.7614 20 15 20C12.2386 20 10 17.7614 10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            appendChild: 'body',
        },
        {
            elementType: 'div',
            attributes: {class:'containerStartGame'},
            appendChild: 'body',
        },
        {
            elementType: 'form',
            attributes: {class: 'formStartGame',id:'formMain'},
            appendChild: '.containerStartGame',
        },
    
        //  childs formStartGame
    
        {
            elementType: 'div',
            attributes: {class: 'containerLabels'},
            appendChild: '.formStartGame',
        },
        {
            elementType: 'button',
            attributes: {type: 'submit', class: 'submit' ,name: 'submit'},
            innerText: 'Start Game' ,
            appendChild: '.formStartGame',
        },
    
        //  childs containerLabels
    
        {
            elementType: 'label',
            attributes: {class: 'label1'},
            appendChild: '.containerLabels',
        },
        {
            elementType: 'label',
            attributes: {class: 'label2'},
            appendChild: '.containerLabels',
        },
    
        //  childs label1
    
        {
            elementType: 'p',
            attributes: {class: 'labelP1'},
            innerText: 'Player 1' ,
            appendChild: '.label1',
        },
    
        {
            elementType: 'div',
            attributes: {class: 'containerInputs1'},
            appendChild: '.label1',
        },
    
        //  childs containerInputs1
    
        {
            elementType: 'input',
            attributes: {type: 'text', class: 'nameplayer1' , name: 'namePlayer1'},
            appendChild: '.containerInputs1',
        },
    
        {
            elementType: 'div',
            attributes: {class: 'inputColor1'},
            appendChild: '.containerInputs1',
        },
    
        //  child inputColor1
    
        {
            elementType: 'input',
            attributes: {type: 'color', name: 'color1',value:'#DE1616'},
            appendChild: '.inputColor1',
        },
    
        //  childs label2
    
        {
            elementType: 'p',
            attributes: {class: 'labelP2'},
            innerText: 'Player 2' ,
            appendChild: '.label2',
        },
    
        {
            elementType: 'div',
            attributes: {class: 'containerInputs2'},
            appendChild: '.label2',
        },
    
        //  childs containerInputs2
    
        {
            elementType: 'input',
            attributes: {type: 'text', class: 'nameplayer2', name: 'namePlayer2'},
            appendChild: '.containerInputs2',
        },
    
        {
            elementType: 'div',
            attributes: {class: 'inputColor2'},
            appendChild: '.containerInputs2',
        },
    
        //  child inputColor2
    
        {
            elementType: 'input',
            attributes: {type: 'color', name: 'color2',value:'#DE1616'},
            appendChild: '.inputColor2',
        },
    ]

    const getArrDomObjGame = () => arrDomObjGame;
    const getArrItemsBoard = () => arrItemsBoard;
    const getArrDomObjStart = () => arrDomObjStart;
    const getArrDomFormStart = () => arrDomFormStart;

    return{getArrDomFormStart,getArrDomObjGame,getArrDomObjStart,getArrItemsBoard}
})();

const gameBoard = (function(){

    let board =['null','null','null',
                'null','null','null',
                'null','null','null'
    ];

    let moveCount = 0;
    
    let countWin = 0;

    let currentWinner = '';

    const gameHistory = []; 

    const currentTheme = ['dark'];

    const getCurrentWinner = () => currentWinner;
    const getMoveCount = () => moveCount;
    const getCurrentTheme = () => currentTheme[0];
    const popCurrentTheme = () => currentTheme.pop();
    const pushCurrentTheme = (theme) => currentTheme.push(theme);

    function clearCurrentWinner() {
        
        currentWinner = '';
    }
    function clearCurrentRound() {
        
        gameHistory.pop();
    }

    const vericationObj = {

        combinatiosForWins: [3,12,21,9,15],
        
        test:['ROWS',3,12,21,'COLUMN',9,12,15, 'DIAGONAL',12,12 ],
    
        row:[[0,1,2],[3,4,5],[6,7,8]],
        column:[[0,3,6],[1,4,7],[2,5,8]],
        diagonal:[[0,4,8],[2,4,6]],
    
    };

    function playFunction(dataId,xo){

        if (!(board[dataId] != 'null')) {
            
            board.splice(dataId,1,xo);
            moveCount++
        }

    };

    function updatePoints(player1,player2) {
        
        const scoreP = document.querySelector('.score');

        scoreP.innerText = `${player1.getWins()} - ${player2.getWins()}`;
    }

    function cleanBoard() {
        board = ['null','null','null','null','null','null','null','null','null'];
        moveCount = 0;
        countWin = 0;
        gameHistory.splice(0, gameBoard.length)
    }

    function verificationWin() {
        
        if (moveCount >= 5) {
            
            hirozontalVerification();
            verticalVerification();
            diagonalVerification();
            
        }
        if (moveCount == 9) {
            tie()
        }
    }
    
    function win(rcd) {
        
        let boardItems = document.querySelectorAll('.boardItem');

        const containerBtns = document.querySelector('.containerBtns');

        const testBtnContinue = document.querySelector('.continueBtn');

        const btnRematch = document.querySelector('.btnRematch');

        let item1 = boardItems[rcd[0]];
        let item2 = boardItems[rcd[1]];
        let item3 = boardItems[rcd[2]];
        
        item1.style.animation = 'tieandWin .8s ease-in-out both';
        item2.style.animation = 'tieandWin .8s ease-in-out both';
        item3.style.animation = 'tieandWin .8s ease-in-out both';

        if (boardItems[rcd[0]].dataset.board == 'x') {

            player1.wl('w')
            player2.wl('l')
            currentWinner = player1.getName();

        }else{

            player2.wl('w')
            player1.wl('l')
            currentWinner = player2.getName();

        }

        if (testBtnContinue == null) {

            createElementsDom('div',{class:'continueBtn'},null,'Continue',containerBtns);

            const continueBtn = document.querySelector('.continueBtn');
            styles.changeColorGame();
            continueBtn.classList.add('blur-in-expandTest2')


            setTimeout(() => {
                continueBtn.classList.remove('blur-in-expandTest2')
            },505)

            continueBtn.style.pointerEvents = 'auto';         

        }else{

            testBtnContinue.style.pointerEvents = 'auto';
        }

        boardItems.forEach(item => item.style.pointerEvents = 'none')

        gameHistory.push('win')
        
        updatePoints(player1,player2);

        cleanBoard();
        
        nextRound();    
        btnRematch.style.pointerEvents = 'auto';
        countWin++;
        winGame();
    }

    function winGame() {
        
        const player1Name = document.querySelector('.name1');
        const player2Name = document.querySelector('.name2');

        const containerScore = document.querySelector('.containerScore');

        const nameScore1 = document.querySelector('.nameScore1');
        const nameScore2 = document.querySelector('.nameScore2');

        const btnRematch = document.querySelector('.btnRematch');
        const continueBtn = document.querySelector('.continueBtn');

        const replacement = document.createElement('div');
        const replacement2 = document.createElement('div');

        replacement.classList.add('replacement');
        replacement2.classList.add('replacement');

        

        if (player1.getWins() == 3) {

            btnRematch.classList.remove('blur-in-expandTest2')
            continueBtn.classList.remove('blur-in-expandTest2')
        
            btnRematch.classList.add('blur-out-contract3')
            continueBtn.classList.add('blur-out-contract3')

            player1Name.classList.add('blur-out-contract');

            setTimeout(() => {
                player1Name.classList.add('blur-in-expandWin');

                nameScore1.classList.add('blur-in')
                nameScore1.textContent = `The Winner is ${player1.getName()}`;
            
            },170);
            containerScore.insertBefore(replacement,containerScore.firstChild);

        }else if(player2.getWins() == 3){
            
            btnRematch.classList.remove('blur-in-expandTest2')
            continueBtn.classList.remove('blur-in-expandTest2')
        
            btnRematch.classList.add('blur-out-contract3')
            continueBtn.classList.add('blur-out-contract3')

            player2Name.classList.add('blur-out-contract2');

            setTimeout(()=> {
                containerScore.appendChild(replacement2)

            },100)
            setTimeout(() => {

                player2Name.classList.add('blur-in-expandWin');

                nameScore2.classList.add('blur-in')
                nameScore2.textContent = `The Winner is ${player2.getName()}`;
            
            },170);
            
        }
    }

    function nothing() {
        
        
    }

    function tie() {

        const containerBtns = document.querySelector('.containerBtns');
        const testBtnContinue = document.querySelector('.continueBtn'); 
        const btnRematch = document.querySelector('.btnRematch');

        function animationTie() {

            let boardItems = document.querySelectorAll('.boardItem');

            boardItems.forEach(item => item.style.animation = 'tieandWin .8s ease-in-out both')

        }
        
        if (!board.includes('null')) {

            animationTie();
            cleanBoard();

            btnRematch.style.pointerEvents = 'none';


            if (testBtnContinue == null) {

                createElementsDom('div',{class:'continueBtn'},null,'Continue',containerBtns);
                const continueBtn = document.querySelector('.continueBtn');
                styles.changeColorGame();

                continueBtn.classList.add('blur-in-expandTest2')


                setTimeout(() => {
                    continueBtn.classList.remove('blur-in-expandTest2')
                },505)

            }else{

                testBtnContinue.style.pointerEvents = 'auto';

            }

            gameHistory.push('tie')
            nextRound();
        }

    }

    function nextRound() {
        
        const btnContinue = document.querySelector('.continueBtn');

        const containerBoard = document.querySelector('.containerBoard');

        const btnRematch = document.querySelector('.btnRematch');

        btnContinue.addEventListener('click', cleanItemBoard)

        function cleanItemBoard() {
            
            while (containerBoard.hasChildNodes()) {
                containerBoard.removeChild(containerBoard.firstChild);
            }

            arr.getArrItemsBoard().forEach(elementObject => {
    
                createElementsDom(elementObject.elementType,elementObject.attributes,null,elementObject.innerText,document.querySelector(elementObject.appendChild));
                
            });
            styles.changeColorGame();
            styles.animationNextRoundOrRematch()

            styles.animationAndOthers();
            
            styles.createXO();
            styles.animationOutlineNames();
            btnRematch.style.pointerEvents = 'none';
            btnContinue.style.pointerEvents = 'none';
        }

    }

    function hirozontalVerification() {

        const testRow1 = [];
        const testRow2 = [];
        const testRow3 = [];

        for (let i = 0; i < board.length; i++) {
                
            let count = i;
            
            if (count <= 2) {

                testRow1.push(board[vericationObj.row[0][i]]);
                
                if (testRow1.length == 3 && (testRow1[0] == 'x' || testRow1[0] == 'o')) {
                    
                    testRow1.every(elemento => elemento === testRow1[0]) ? win(vericationObj.row[0]) : nothing(); 
                }
         
            }
            
            
            if (count > 2 && count <= 5) {
 
                testRow2.push(board[vericationObj.row[1][i - 3]])

                if (testRow2.length == 3 && (testRow2[0] == 'x' || testRow2[0] == 'o')) {

                    testRow2.every(elemento => elemento == testRow2[0]) ? win(vericationObj.row[1]) : nothing(); 
                }
                         
            }
    
            if (count >= 5) {

                testRow3.push(board[vericationObj.row[2][i - 5]])          

                if (testRow3.length == 3 && (testRow3[0] == 'x' || testRow3[0] == 'o')) {

                    testRow3.every(elemento => elemento == testRow3[0]) ? win(vericationObj.row[2]) : nothing();
                }
            }
    
        }
    }
    function verticalVerification() {
        
        const testColumn1 = [];
        const testColumn2 = [];
        const testColumn3 = [];


        for (let i = 0; i < board.length; i++) {
                
            let count = i;
    
            if (count <= 2) {

                testColumn1.push(board[vericationObj.column[0][i]]);
                
                if (testColumn1.length == 3 && (testColumn1[0] == 'x' || testColumn1[0] == 'o')) {

                    testColumn1.every(elemento => elemento === testColumn1[0]) ? win(vericationObj.column[0]) : nothing(); 
                }
            }
    
            if (count > 2 && count <= 5) {

                testColumn2.push(board[vericationObj.column[1][i - 3]]);
                
                if (testColumn2.length == 3 && (testColumn2[0] == 'x' || testColumn2[0] == 'o')) {

                    testColumn2.every(elemento => elemento === testColumn2[0]) ? win(vericationObj.column[1]) : nothing(); 
                }
            }
    
            if (count >= 5) {

                testColumn3.push(board[vericationObj.column[2][i - 5]]);
                
                if (testColumn3.length == 3 && (testColumn3[0] == 'x' || testColumn3[0] == 'o')) {

                    testColumn3.every(elemento => elemento === testColumn3[0]) ? win(vericationObj.column[2]) : nothing(); 
                }
                   
            }
    
        }
    }
    function diagonalVerification() {
        const testDiagonal1 = [];
        const testDiagonal2 = [];
        
        for (let i = 0; i < board.length; i++) {
                
            let count = i;
    
            if (count <= 2) {

                testDiagonal1.push(board[vericationObj.diagonal[0][i]]);
                
                if (testDiagonal1.length == 3 && (testDiagonal1[0] == 'x' || testDiagonal1[0] == 'o')) {

                    testDiagonal1.every(elemento => elemento === testDiagonal1[0]) ? win(vericationObj.diagonal[0]) : nothing(); 
                }

            }
    
            if (count > 2 && count <= 5) {

                testDiagonal2.push(board[vericationObj.diagonal[1][i - 3]]);
                
                if (testDiagonal2.length == 3 && (testDiagonal2[0] == 'x' || testDiagonal2[0] == 'o')) {

                    testDiagonal2.every(elemento => elemento === testDiagonal2[0]) ? win(vericationObj.diagonal[1]) : nothing(); 
                }
                           
            }
    
        }
    }


    return{playFunction,cleanBoard,verificationWin,getCurrentWinner,clearCurrentWinner,getMoveCount,clearCurrentRound,getCurrentTheme,popCurrentTheme,pushCurrentTheme}


})();

const players = (name, color) => {

    let countWins = 0;
    let countLoses = 0;

    const getName = () => name;
    const getColor = () => color;
    const getWins = () => countWins;
    const getLoses = () => countLoses;

    function rematch() {

        countWins > 0 ? countWins--: countWins = 0;
    }

    function wl(result) {

        result == 'w' ? countWins++:countLoses++;
    }



    return{getName,getColor,getWins,getLoses,wl,rematch}
};

const styles = (function () {
    
    function domElementsGame(arr) {
        
        arr.forEach(elementObject => {
        
            createElementsDom(elementObject.elementType,elementObject.attributes,null,elementObject.innerText,document.querySelector(elementObject.appendChild));
            
        });
    
        const btnRematch = document.querySelector('.btnRematch');
        const scoreP = document.querySelector('.score');
    
    
        animationNewGame()
        animationAndOthers();
        newGame()
        rematch()
        createXO()
        animationOutlineNames();
        btnRematch.style.pointerEvents = 'none';
        scoreP.innerText = `${player1.getWins()} - ${player2.getWins()}`;
    }
    
    function domElementsMenu(arr) {
        
        arr.forEach(elementObject => {
        
            createElementsDom(elementObject.elementType,elementObject.attributes,elementObject.innerHTML,elementObject.innerText,document.querySelector(elementObject.appendChild));
            
        })
        const form = document.forms.formMain;
        const titleStart = document.querySelector('.title');
        const miniPerfil = document.querySelector('.miniPerfil');
        const containerSvgTheme = document.querySelector('.containerSvgTheme');
    
        form.classList.add('blur-in-expandTest');
        containerSvgTheme.classList.add('blur-in-expandTest');
        setTimeout(() => {
            containerSvgTheme.classList.remove('blur-in-expandTest');
        },350)
        titleStart.classList.add('blur-in2');
        miniPerfil.classList.add('blur-in2');
    
    
        registerNames();
        changeColor1();
        changeColor2();
        changeTheme();
    
    }
    
    function registerNames() {
    
        let form = document.forms.formMain;
        
    
        form.addEventListener('submit', (e)=> {
    
            let name1 = e.target.elements['namePlayer1'].value ;
            let name2 = e.target.elements['namePlayer2'].value ;
    
            let color1 = e.target.elements['color1'].value ;
            let color2 = e.target.elements['color2'].value ;
    
            arr.getArrDomObjGame()[5].innerText = name1;
            arr.getArrDomObjGame()[9].innerText = name2;
            player1 = players(name1,color1);
            player2 = players(name2,color2);
    
            form.classList.remove('blur-in-expandTest')
            form.classList.add('blur-out-contract3');
            scene.pop();
            scene.push('game');
            delDomElementsMenu()
            setTimeout(()=> {
                domElementsGame(arr.getArrDomObjGame());
                changeColorGame();
            },411)
            
            e.preventDefault();
        });
    };
    
    function changeColor1() {
    
        const inputColor = formMain.color1;

        inputColor.addEventListener('input', ()=> {
            document.documentElement.style.setProperty("--divColorInput1", inputColor.value);    
        })
    }
    function changeColor2() {
    
        const inputColor2 = formMain.color2;

        inputColor2.addEventListener('input', ()=> {
            document.documentElement.style.setProperty("--divColorInput2", inputColor2.value);    
        })
    }
    
    function delDomElementsMenu() {
    
        const formStart = document.querySelector('.containerStartGame');
        const title = document.querySelector('.title')
        const miniPerfil = document.querySelector('.miniPerfil')
    
    
        setTimeout(() => {
    
            formStart.remove();

        },410)
        
    
    }
    function delDomElementsGame() {
    
        const containerGame = document.querySelector('.containerTTT');
        const title = document.querySelector('.title')
        const miniPerfil = document.querySelector('.miniPerfil')
        const containerSvgTheme = document.querySelector('.containerSvgTheme');
    
    
        document.body.removeChild(containerGame)
        document.body.removeChild(containerSvgTheme)
    }
    
    function animationAndOthers() {
    
    
    
        //  animation for boardItems
    
        const boardItem = document.querySelectorAll('.boardItem');
    
        boardItem.forEach(e => e.addEventListener('click', (e) => {
    
            let item = e.target;
            
            item.style.animation = 'animationOutline 0.2s linear both' ;
    
        }))
    
    }
    
    function animationOutlineNames() {
        
    
        const boardItem = document.querySelectorAll('.boardItem');
    
        const divName1 = document.querySelector('.name1');
        const divName2 = document.querySelector('.name2');
    
        let turn = 0;
    
        divName2.classList.remove('endAnimationOutlineName');
        divName2.classList.remove('startAnimationOutlineName');    
    
        divName1.classList.remove('endAnimationOutlineName');
        divName1.classList.remove('startAnimationOutlineName');
    
        divName1.classList.add('startAnimationOutlineName');
    
        turn++;
    
    
        boardItem.forEach(e => e.addEventListener('click', (e) => {
            let item = e.target;
            
            if (gameBoard.getMoveCount() >= 9) {
    
                divName2.classList.remove('endAnimationOutlineName');
                divName2.classList.remove('startAnimationOutlineName');
        
            }else{
                if (turn == 0) {
        
                    divName2.classList.remove('startAnimationOutlineName')
                    divName1.classList.remove('endAnimationOutlineName')
        
                    divName2.classList.add('endAnimationOutlineName')
                    divName1.classList.add('startAnimationOutlineName');
                    turn++;
    
                }else{
        
                    divName1.classList.remove('startAnimationOutlineName')
                    divName2.classList.remove('endAnimationOutlineName')
        
                    divName1.classList.add('endAnimationOutlineName')
                    divName2.classList.add('startAnimationOutlineName');
                    turn--;
                }
            }
            
        }))
    
        
    }
    
    function newGame() {
        const btnNewGame = document.querySelector('.btnNewGame');
    
        const svgThemeDark = '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.4427 19.1928C24.147 19.7136 22.732 20.0001 21.25 20.0001C15.0368 20.0001 10 14.9633 10 8.75011C10 7.26814 10.2865 5.8531 10.8073 4.55737C6.6706 6.21978 3.75 10.2689 3.75 15.0001C3.75 21.2133 8.7868 26.2501 15 26.2501C19.7312 26.2501 23.7803 23.3295 25.4427 19.1928Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        const svgThemeLight ='<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="pathTheme" d="M15 3.75V5M15 25V26.25M26.25 15H25M5 15H3.75M22.955 22.955L22.0711 22.0711M7.92893 7.92893L7.04505 7.04505M22.955 7.04512L22.0711 7.929M7.929 22.0711L7.04511 22.955M20 15C20 17.7614 17.7614 20 15 20C12.2386 20 10 17.7614 10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    
        btnNewGame.addEventListener('click', ()=> {
    
            gameBoard.getCurrentTheme() == 'light' ? arr.getArrDomFormStart()[0].innerHTML = svgThemeDark: arr.getArrDomFormStart()[0].innerHTML = svgThemeLight;
            delDomElementsGame()
            gameBoard.cleanBoard();
            domElementsMenu(arr.getArrDomFormStart());
            changeThemeForm();
            scene.pop();
            scene.push('start')
    
        })
    
    
    }
    
    function rematch() {
    
        const scoreP = document.querySelector('.score');
    
        const containerBoard = document.querySelector('.containerBoard');
    
        const btnRematch = document.querySelector('.btnRematch');
    
        btnRematch.addEventListener('click', ()=> {
    
            while (containerBoard.hasChildNodes()) {
                containerBoard.removeChild(containerBoard.firstChild);
            }
            gameBoard.cleanBoard();
            rematchUpdatePoints();     

            arr.getArrItemsBoard().forEach(elementObject => {
    
                createElementsDom(elementObject.elementType,elementObject.attributes,null,elementObject.innerText,document.querySelector(elementObject.appendChild));
                
            });
            
            animationNextRoundOrRematch()
    
            scoreP.innerText = `${player1.getWins()} - ${player2.getWins()}`;
    
            animationAndOthers();
            createXO();
            animationOutlineNames();
            gameBoard.clearCurrentRound();
            btnRematch.style.pointerEvents = 'none';
            
    
        })
    
        function rematchUpdatePoints() {
            
            if (gameBoard.getCurrentWinner() == player1.getName()) {
                player1.rematch()
                gameBoard.clearCurrentWinner()
            }else{
                player2.rematch()
                gameBoard.clearCurrentWinner()
            }
    
        }
        
    }
    
    function animationNewGame() {
    
        const containerBoard = document.querySelector('.containerBoard');
        let boardItemchildren = containerBoard.children;
        const boardItem = document.querySelectorAll('.boardItem');
        const containerBtns = document.querySelector('.containerBtns');
        let btnsChildren = containerBtns.children;
    
        for (let i = 0; i < btnsChildren.length; i++) {
          let child = btnsChildren[i];
    
          child.classList.add('blur-in-expandTest2')
    
          setTimeout(() => {
            child.classList.remove('blur-in-expandTest2')
            
          },505)
    
        }
        for (let i = 0; i < boardItemchildren.length; i++) {
          let child = boardItemchildren[i];
          
          setTimeout(function() {

            child.classList.add("blur-in");

          }, 100 * i);
        }
    
        setTimeout(() => {

            boardItem.forEach(item => item.classList.remove('blur-in-expandTest2'))
            boardItem.forEach(item => item.style.opacity = '1')
            
        },900)
    }
    
    function animationNextRoundOrRematch() {
    
        const containerBoard = document.querySelector('.containerBoard');
        let children = containerBoard.children;
        const boardItem = document.querySelectorAll('.boardItem');
    
      
        for (let i = 0; i < children.length; i++) {

          let child = children[i];
       
          child.classList.add("blur-in");
        }
    
        setTimeout(() => {

            boardItem.forEach(item => item.classList.remove('blur-in'))
            boardItem.forEach(item => item.style.opacity = '1')
            
        },500)
    }
    
    function changeTheme() {
        
        const containerSvgTheme = document.querySelector('.containerSvgTheme');
        const body = document.body ;    
    
        const svgThemeDark = '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.4427 19.1928C24.147 19.7136 22.732 20.0001 21.25 20.0001C15.0368 20.0001 10 14.9633 10 8.75011C10 7.26814 10.2865 5.8531 10.8073 4.55737C6.6706 6.21978 3.75 10.2689 3.75 15.0001C3.75 21.2133 8.7868 26.2501 15 26.2501C19.7312 26.2501 23.7803 23.3295 25.4427 19.1928Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        const svgThemeLight ='<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="pathTheme" d="M15 3.75V5M15 25V26.25M26.25 15H25M5 15H3.75M22.955 22.955L22.0711 22.0711M7.92893 7.92893L7.04505 7.04505M22.955 7.04512L22.0711 7.929M7.929 22.0711L7.04511 22.955M20 15C20 17.7614 17.7614 20 15 20C12.2386 20 10 17.7614 10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    
        const titleP = document.querySelector('.title');
    
    
        if (scene[0] === 'start') {
            changeThemeForm();
            
        }else if(scene[0] === 'game'){
        }
    
    
        containerSvgTheme.addEventListener('click', () => {
    
            if (gameBoard.getCurrentTheme() === 'dark') {
    
                containerSvgTheme.classList.add('blur-out-contract3');
                containerSvgTheme.classList.remove('blur-out-contract3');
                containerSvgTheme.innerHTML = '';
                containerSvgTheme.innerHTML = svgThemeDark;
                containerSvgTheme.classList.add('blur-in-expandTest');
                setTimeout(() => {
                    containerSvgTheme.classList.remove('blur-in-expandTest');
                },305)
                
    
    
                body.style.setProperty("background-color", "var(--backgroundLight)");
    
                gameBoard.popCurrentTheme();
                gameBoard.pushCurrentTheme('light');
    
                
    
                titleP.style.setProperty('color', 'var(--textLight)');
    
    
                if (scene[0] === 'start') {
                    changeThemeForm();
                    
                }else if(scene[0] === 'game'){
                    changeColorGame();
                }
                
    
            }else if(gameBoard.getCurrentTheme() === 'light'){
    
                containerSvgTheme.classList.add('blur-out-contract3');
                containerSvgTheme.classList.remove('blur-out-contract3');
                containerSvgTheme.innerHTML = '';
                containerSvgTheme.innerHTML = svgThemeLight;
                containerSvgTheme.classList.add('blur-in-expandTest');
                setTimeout(() => {
                    containerSvgTheme.classList.remove('blur-in-expandTest');
                },305)
    
                body.style.setProperty("background-color", "var(--backgroundMain)");
    
                gameBoard.popCurrentTheme()
                gameBoard.pushCurrentTheme('dark')
    
                titleP.style.setProperty('color', 'var(--textDark)')
          
                if (scene[0] === 'start') {
                    changeThemeForm();
                    
                }else if(scene[0] === 'game'){
                    changeColorGame();
    
                }
                
    
            }
    
    
        })
    
        
    
    }
    
    function changeThemeForm() {
        
        const containerInputs1 = document.querySelector('.containerInputs1');
        const player1P = document.querySelector('.labelP1');
        // const inputNamePlayer1 = formMain.namePlayer1;
        const inputNamePlayer1 = document.querySelector('.nameplayer1');
        const inputNamePlayer2 = document.querySelector('.nameplayer2');
        
        const containerInputs2 = document.querySelector('.containerInputs2');
        const player2P = document.querySelector('.labelP2');
    
        const btnSubmit = document.querySelector('.submit');
    
    
        if (gameBoard.getCurrentTheme() === 'dark') {
    
            btnSubmit.style.setProperty('background-color', 'var(--backContainer)')
    
            btnSubmit.style.setProperty('color', 'var(--textDark)')
            containerInputs1.style.setProperty("background-color", "var(--backContainer)")
            containerInputs2.style.setProperty("background-color", "var(--backContainer)")
            
            player1P.style.setProperty("background-color", "var(--backContainer)")
            player2P.style.setProperty("background-color", "var(--backContainer)")
            
            player1P.style.setProperty("color", "var(--textDark)")
            player2P.style.setProperty("color", "var(--textDark)")
            
            inputNamePlayer1.style.setProperty("background-color", "var(--backContainer)")            
            inputNamePlayer1.style.setProperty("color", "var(--textDark)")            
            inputNamePlayer2.style.setProperty("background-color", "var(--backContainer)")
            inputNamePlayer2.style.setProperty("color", "var(--textDark)") 
    
            hoverForm()
    
        }else if(gameBoard.getCurrentTheme() === 'light'){
    
            btnSubmit.style.setProperty('background-color', 'var(--backContainerLight)')
    
            btnSubmit.style.setProperty('color', 'var(--textLight)')
            containerInputs1.style.setProperty("background-color", "var(--backContainerLight)")
            containerInputs2.style.setProperty("background-color", "var(--backContainerLight)")
            
            player1P.style.setProperty("background-color", "var(--backContainerLight)")
            player2P.style.setProperty("background-color", "var(--backContainerLight)")
            
            player1P.style.setProperty("color", "var(--textLight)")
            player2P.style.setProperty("color", "var(--textLight)")
            
            inputNamePlayer1.style.setProperty("background-color", "var(--backContainerLight)")            
            inputNamePlayer2.style.setProperty("background-color", "var(--backContainerLight)")
            inputNamePlayer1.style.setProperty("color", "var(--textLight)")
            inputNamePlayer2.style.setProperty("color", "var(--textLight)")
    
            hoverForm();
    
        }
    
    
        
        
    
        
    
    }
    
    function changeColorGame() {
        
        
        const boardItems = document.querySelectorAll('.boardItem');
        const name1 = document.querySelector('.name1');
        const nameScore1 = document.querySelector('.nameScore1');
        const name2 = document.querySelector('.name2');
        const nameScore2 = document.querySelector('.nameScore2');
        const scoreP = document.querySelector('.scoreP');
        const score = document.querySelector('.score');
        const btnRematch = document.querySelector('.btnRematch');
        const btnNewGame = document.querySelector('.btnNewGame');
    
        const containerBtns = document.querySelector('.containerBtns');
        const childsContainerBtns = containerBtns.querySelectorAll('*');
    
        const btnContinue = document.querySelector('.continueBtn');
    
    
        if (gameBoard.getCurrentTheme() === 'light' ) {
    
            childsContainerBtns.forEach( child => {
    
                child.addEventListener('mouseenter', () => {
    
                    child.style.setProperty('background-color', 'var(--backContainer)')
                    child.style.setProperty('color', 'var(--textDark)')
                    child.style.setProperty('transform', 'scale(1.05)')
                })
        
                child.addEventListener('mouseleave', () => {
        
                    child.style.setProperty('background-color', 'var(--backContainerLight)')
                    child.style.setProperty('color', 'var(--textLight)')
                    child.style.setProperty('transform', 'scale(1)')
        
                })
    
    
            })
    
            name1.style.setProperty('background-color', 'var(--backContainerLight)');
            nameScore1.style.setProperty('color', 'var(--textLight)');
            name2.style.setProperty('background-color', 'var(--backContainerLight)');
            nameScore2.style.setProperty('color', 'var(--textLight)');
            scoreP.style.setProperty('background-color', 'var(--backContainerLight)');
            score.style.setProperty('color', 'var(--textLight)');
            btnNewGame.style.setProperty('background-color', 'var(--backContainerLight)');
            btnNewGame.style.setProperty('color', 'var(--textLight)');
            btnRematch.style.setProperty('background-color', 'var(--backContainerLight)');
            btnRematch.style.setProperty('color', 'var(--textLight)');
            
            if (btnContinue) {
                btnContinue.style.setProperty('background-color', 'var(--backContainerLight)');
                btnContinue.style.setProperty('color', 'var(--textLight)');
    
            }
    
            boardItems.forEach(item => item.style.setProperty('background-color', 'var(--backContainerLight)'))
        
            
    
        }else if(gameBoard.getCurrentTheme() === 'dark') {
    
    
            childsContainerBtns.forEach( child => {
    
                child.addEventListener('mouseenter', () => {
    
                    child.style.setProperty('background-color', 'var(--backContainerLight)')
                    child.style.setProperty('color', 'var(--textLight)')
                    child.style.setProperty('transform', 'scale(1.05)')
                })
        
                child.addEventListener('mouseleave', () => {
        
                    child.style.setProperty('background-color', 'var(--backContainer)')
                    child.style.setProperty('color', 'var(--textDark)')
                    child.style.setProperty('transform', 'scale(1)')
        
                })
    
    
            })
    
    
            name1.style.setProperty('background-color', 'var(--backContainer)');
            nameScore1.style.setProperty('color', 'var(--textDark)');
            name2.style.setProperty('background-color', 'var(--backContainer)');
            nameScore2.style.setProperty('color', 'var(--textDark)');
            scoreP.style.setProperty('background-color', 'var(--backContainer)');
            score.style.setProperty('color', 'var(--textDark)');
            btnNewGame.style.setProperty('background-color', 'var(--backContainer)');
            btnNewGame.style.setProperty('color', 'var(--textDark)');
            btnRematch.style.setProperty('background-color', 'var(--backContainer)');
            btnRematch.style.setProperty('color', 'var(--textDark)');
    
            if (btnContinue) {
                btnContinue.style.setProperty('background-color', 'var(--backContainer)');
                btnContinue.style.setProperty('color', 'var(--textDark)');
                
            }
    
            boardItems.forEach(item => item.style.setProperty('background-color', 'var(--backContainer)'))
    
    
            
        }
    }
    
    
    function hoverForm() {
        
        const containerInputs1 = document.querySelector('.containerInputs1');
        const player1P = document.querySelector('.labelP1');
        const inputNamePlayer1 = formMain.namePlayer1;
        
        const containerInputs2 = document.querySelector('.containerInputs2');
        const player2P = document.querySelector('.labelP2');
        const inputNamePlayer2 = formMain.namePlayer2;
    
        const btnSubmit = formMain.submit;
    
    
        if (gameBoard.getCurrentTheme() === 'dark') {
            
            btnSubmit.addEventListener('mouseenter', () => {
    
                btnSubmit.style.setProperty('background-color', 'var(--backContainerLight)')
                btnSubmit.style.setProperty('color', 'var(--textLight)')
                btnSubmit.style.setProperty('transform', 'scale(1.05)')
            })
    
            btnSubmit.addEventListener('mouseleave', () => {
    
                btnSubmit.style.setProperty('background-color', 'var(--backContainer)')
                btnSubmit.style.setProperty('color', 'var(--textDark)')
                btnSubmit.style.setProperty('transform', 'scale(1)')
    
            })
    
            inputNamePlayer1.addEventListener('focus', () => {
    
                containerInputs1.style.setProperty("background-color", "var(--backContainerLight)")
                
                player1P.style.setProperty("background-color", "var(--backContainerLight)")
                
                player1P.style.setProperty("color", "var(--textLight)")
                
                inputNamePlayer1.style.setProperty("background-color", "var(--backContainerLight)")
                inputNamePlayer1.style.setProperty("color", "var(--textLight)")
    
            })
    
            inputNamePlayer1.addEventListener('blur', () => {
    
                containerInputs1.style.setProperty("background-color", "var(--backContainer)")
                
                player1P.style.setProperty("background-color", "var(--backContainer)")
                
                player1P.style.setProperty("color", "var(--textDark)")
                
                inputNamePlayer1.style.setProperty("background-color", "var(--backContainer)")
                inputNamePlayer1.style.setProperty("color", "var(--textDark)")
    
            })
    
            inputNamePlayer2.addEventListener('focus', () => {
    
                containerInputs2.style.setProperty("background-color", "var(--backContainerLight)")
                
                player2P.style.setProperty("background-color", "var(--backContainerLight)")
                
                player2P.style.setProperty("color", "var(--textLight)")
                
                inputNamePlayer2.style.setProperty("background-color", "var(--backContainerLight)")
                inputNamePlayer2.style.setProperty("color", "var(--textLight)")
    
            })
    
            inputNamePlayer2.addEventListener('blur', () => {
    
                containerInputs2.style.setProperty("background-color", "var(--backContainer")
                
                player2P.style.setProperty("background-color", "var(--backContainer)")
                
                player2P.style.setProperty("color", "var(--textDark)")
                
                inputNamePlayer2.style.setProperty("background-color", "var(--backContainer)")
                inputNamePlayer2.style.setProperty("color", "var(--textDark)")
    
            })
    
    
        }else if(gameBoard.getCurrentTheme() === 'light'){
    
    
            btnSubmit.addEventListener('mouseenter', () => {
    
                btnSubmit.style.setProperty('background-color', 'var(--backContainer)')
                btnSubmit.style.setProperty('color', 'var(--textDark)')
                btnSubmit.style.setProperty('transform', 'scale(1.05)')
            })
    
            btnSubmit.addEventListener('mouseleave', () => {
    
                btnSubmit.style.setProperty('background-color', 'var(--backContainerLight)')
                btnSubmit.style.setProperty('color', 'var(--textLight)')
                btnSubmit.style.setProperty('transform', 'scale(1)')
    
            })
    
    
    
            inputNamePlayer1.addEventListener('focus', () => {
    
                containerInputs1.style.setProperty("background-color", "var(--backContainer)")
                
                player1P.style.setProperty("background-color", "var(--backContainer)")
                
                player1P.style.setProperty("color", "var(--textDark)")
                
                inputNamePlayer1.style.setProperty("background-color", "var(--backContainer)")
                inputNamePlayer1.style.setProperty("color", "var(--textDark)")
    
            })
    
            inputNamePlayer1.addEventListener('blur', () => {
    
                containerInputs1.style.setProperty("background-color", "var(--backContainerLight)")
                
                player1P.style.setProperty("background-color", "var(--backContainerLight)")
                
                player1P.style.setProperty("color", "var(--textLight)")
                
                inputNamePlayer1.style.setProperty("background-color", "var(--backContainerLight)")
                inputNamePlayer1.style.setProperty("color", "var(--textLight)")
    
            })
    
            inputNamePlayer2.addEventListener('focus', () => {
    
                containerInputs2.style.setProperty("background-color", "var(--backContainer)")
                
                player2P.style.setProperty("background-color", "var(--backContainer)")
                
                player2P.style.setProperty("color", "var(--textDark)")
                
                inputNamePlayer2.style.setProperty("background-color", "var(--backContainer)")
                inputNamePlayer2.style.setProperty("color", "var(--textDark)")
    
            })
    
            inputNamePlayer2.addEventListener('blur', () => {
    
                containerInputs2.style.setProperty("background-color", "var(--backContainerLight)")
                
                player2P.style.setProperty("background-color", "var(--backContainerLight)")
                
                player2P.style.setProperty("color", "var(--textLight)")
                
                inputNamePlayer2.style.setProperty("background-color", "var(--backContainerLight)")
                inputNamePlayer2.style.setProperty("color", "var(--textLight)")
    
            })
    
        }
    
        
    
        
    }
    
    function createXO() {
        
        const boardItem = document.querySelectorAll('.boardItem');
    
        const x = '<svg width="255" height="255" viewBox="0 0 255 255" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="183.848" y="56.5685" width="20" height="180" rx="10" transform="rotate(45 183.848 56.5685)" fill="white"/><rect x="197.99" y="183.848" width="20" height="180" rx="10" transform="rotate(135 197.99 183.848)" fill="white"/></svg>'
        const o = '<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="90" r="80" stroke="white" stroke-width="20"/></svg>';
    
        let count = [];
    
        const element = document.querySelector('.boardItem');
    
        const computedStyle = window.getComputedStyle(element);
    
        let color1 = computedStyle.getPropertyValue('--divColorInput1');
        let color2 = computedStyle.getPropertyValue('--divColorInput2');
        
        boardItem.forEach(e => e.addEventListener('click', (e) => {
    
            let item = e.target;
             
            if (count.length == 0) {
    
         
    
                createElementsDom('div',{class:'x blur-in-expand'},x,null,item);
    
                item.classList.add('x');
                item.setAttribute('data-board','x');
                count.push('x');
    
               
                item.style.outlineColor = color1;
                item.style.pointerEvents = 'none';
                
                gameBoard.playFunction(item.dataset.index,item.dataset.board)
                gameBoard.verificationWin();
                
    
            } 
            
            if (item.classList.contains('x') || item.classList.contains('o') ) {
    
            }else{
            
                if(!item.classList.contains('x') && count[count.length - 1] == 'x'){
    
                    createElementsDom('div',{class:'o blur-in-expand'},o,null,item);
    
                    item.classList.add('o');
                    item.setAttribute('data-board','o');
    
                    count.push('o');
                    
             
                    item.style.outlineColor = color2;
                    item.style.pointerEvents = 'none';
    
                    gameBoard.playFunction(item.dataset.index,item.dataset.board)
                    gameBoard.verificationWin();
    
    
                }else if(count[count.length - 1] == 'o'){
    
                    createElementsDom('div',{class:'x blur-in-expand'},x,null,item);
    
                    item.classList.add('x');
                    item.setAttribute('data-board','x');
    
                    count.push('x');
              
                    item.style.outlineColor = color1;
                    item.style.pointerEvents = 'none';
    
                    gameBoard.playFunction(item.dataset.index,item.dataset.board)
                    gameBoard.verificationWin();
    
                }
            }
    
            
    
    
        }))
    
        
        
    }
    //SAD
    // depth,minimax,gameBoard,alfa,beta
    // function minimax() {
    //   
        
    
        
    
    //     let minimax = 'max';
    
    //     let board =['x','null','null',
    //                 'null','null','null',
    //                 'null','null','null'
    //     ];
    
    //     let depth = board.filter(item => item != 'null').length + 2;
    
    //     let childs = board.filter(item => item === 'null').length;
    
    
    //     if (board.filter(item => item === 'null').length <= 8) {
    //         console.log(`quedan ${board.filter(item => item === 'null').length} movimientos posibles `);
    //         console.log(`${board.filter(item => item != 'null').length + 2}`);
            
    //     }else{
    //         console.log('no funciono Sad :c');
    //     }
    
    //     let test132 = [[[[],[]],[[],[]],[[],[]]],[[[],[]],[[],[]],[[],[]]],[[[],[]],[[],[]],[[],[]]],[[[],[]],[[],[]],[[],[]]]];
    
    
    //     // for (let j = 0; j < test132[0][0].length; j++) {
    
    //     //     test132[0][0].push('hola')
            
    //     // }
    
    //     if (minimax == 'max') {
            
    
    //         // for (let c = 0; c < test132[0].length; c++) { 
                
    //         //     for (let j = 0; j < 5; j++) {
    
    //         //         test132[0][c].push([])
                
    //         //     }
                    
    //         // }
            
    
    //         console.log(test132);
    
    
    
    
    //         let depth1 = [];
            
    //         let gameTree = {
    
    //             max:[],
    //             depth:[],
                
    
    //         };
            
    //         // let index = board.filter(item => item === 'null').findIndex;
            
    //         // for (let i = 1; i <= childs; i++) {
    
    //         //     gameTree.depth.push([]);
    
    //         // }
    
    //         // childs--;
    
    //         // console.log(childs);
    
    //         // for (let c = 0; c < gameTree.depth.length; c++) { 
                
    //         //     for (let c2 = 0; c2 < childs ; c2++) {
    
    //         //         gameTree.depth[c].push([]);
    
    //         //     }
                    
    //         // }
    
    //         // childs--;
    
    //         // if (depth > 2) {
                
    //         //     for (let i = 0; i < gameTree.depth.length; i++) {
    
    //         //         for (let j = 0; j < gameTree.depth[i].length; j++) {
    
    //         //             for (let k = 0; k < childs; k++) {
    
    //         //                 gameTree.depth[i][j].push([]);
    
    //         //             }
    //         //         }
    //         //     }
                
    
    //         // }
    
    
    //         // console.log(gameTree.depth);
    //         // console.log(gameTree.depth[0]);
    
    //         // for (let i = 1; i <= depth; i++) {
    
    
    //         //     depth1.push([]);
    //         //     for (let c = 1; c <= childs; c++) {
                    
    //         //         if (depth1[i - 1]) {
    //         //             depth1[i - 1].push([]);    
    //         //             depth1[i - 1]
    //         //         }
    //         //         // depth1[0].push([]);
                    
    
    //         //     }
    //         //     console.log(childs);
    //         //     childs -= 1;
    
    //         // }
    //         // console.log(depth1);
    //         // console.log(childs);
    //         // console.log(depth2);
    
    //     }
    
    // }   
    // minimax();

    return{domElementsMenu,changeColorGame,animationNextRoundOrRematch,animationAndOthers,createXO,animationOutlineNames}

})();



styles.domElementsMenu(arr.getArrDomObjStart())