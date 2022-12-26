import createElementsDom from './domCreation.js';

const arrDomObjGame = [

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
        innerText: 'Roas' ,
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
        innerText:'Gohan',
        appendChild: '.name2',
    },

    //  childs containerBoard

    {
        elementType: 'div',
        attributes: {class:'boardItem','data-board':'0'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem','data-board':'1'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem','data-board':'2'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem','data-board':'3'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem','data-board':'4'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem','data-board':'5'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem','data-board':'6'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem','data-board':'7'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem','data-board':'8'},
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
        attributes: {type: 'submit'},
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
        attributes: {type: 'text', name: 'namePlayer1'},
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
        attributes: {type: 'text', name: 'namePlayer2'},
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

const gameBoard = (function(){

    let board =['null','null','null',
                'null','null','null',
                'null','null','null'
    ];
    
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
            console.log(board);     
        }

    };

    function cleanBoard() {
        board = ['null','null','null','null','null','null','null','null','null'];
        console.log(board);
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

                    testRow1.every(elemento => elemento === testRow1[0]) ? console.log('GANASTE!! en la row1') : console.log(''); 
                }
         
            }
            
            
            if (count > 2 && count <= 5) {
 
                testRow2.push(board[vericationObj.row[1][i - 3]])

                if (testRow2.length == 3 && (testRow2[0] == 'x' || testRow2[0] == 'o')) {

                    testRow2.every(elemento => elemento == testRow2[0]) ? console.log('GANASTE!! en la row2') : console.log(''); 
                }
                         
            }
    
            if (count >= 5) {

                testRow3.push(board[vericationObj.row[2][i - 5]])          

                if (testRow3.length == 3 && (testRow3[0] == 'x' || testRow3[0] == 'o')) {

                    testRow3.every(elemento => elemento == testRow3[0]) ? console.log('GANASTE!! en la row3') : console.log('');
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

                    testColumn1.every(elemento => elemento === testColumn1[0]) ? console.log('GANASTE!! en la columna1') : console.log(''); 
                }
            }
    
            if (count > 2 && count <= 5) {

                testColumn2.push(board[vericationObj.column[1][i - 3]]);
                
                if (testColumn2.length == 3 && (testColumn2[0] == 'x' || testColumn2[0] == 'o')) {

                    testColumn2.every(elemento => elemento === testColumn2[0]) ? console.log('GANASTE!! en la columna2') : console.log(''); 
                }
            }
    
            if (count >= 5) {

                testColumn3.push(board[vericationObj.column[2][i - 5]]);
                
                if (testColumn3.length == 3 && (testColumn3[0] == 'x' || testColumn3[0] == 'o')) {

                    testColumn3.every(elemento => elemento === testColumn3[0]) ? console.log('GANASTE!! en la columna3') : console.log(''); 
                }
                // console.log(board[vericationObj.column[2][i - 5]]);            
            }
    
        }
    }
    function diagonalVerification() {
        const testDiagonal1 = [];
        const testDiagonal2 = [];
        // const testDiagonal3 = [];
        for (let i = 0; i < board.length; i++) {
                
            let count = i;
    
            if (count <= 2) {

                testDiagonal1.push(board[vericationObj.diagonal[0][i]]);
                
                if (testDiagonal1.length == 3 && (testDiagonal1[0] == 'x' || testDiagonal1[0] == 'o')) {

                    testDiagonal1.every(elemento => elemento === testDiagonal1[0]) ? console.log('GANASTE!! en la diagonal1') : console.log(''); 
                }
                // console.log(board[vericationObj.diagonal[0][i]]);

            }
    
            if (count > 2 && count <= 5) {

                testDiagonal2.push(board[vericationObj.diagonal[1][i - 3]]);
                
                if (testDiagonal2.length == 3 && (testDiagonal2[0] == 'x' || testDiagonal2[0] == 'o')) {

                    testDiagonal2.every(elemento => elemento === testDiagonal2[0]) ? console.log('GANASTE!! en la diagonal2') : console.log(''); 
                }
                // console.log(board[vericationObj.diagonal[1][i - 3]]);            
            }
    
            // if (count >= 5) {

            //     testDiagonal3.push(board[vericationObj.diagonal[2][i - 5]]);
                
            //     if (testDiagonal3.length == 3 && (testDiagonal3[0] == 'x' || testDiagonal3[0] == 'o')) {

            //         testDiagonal3.every(elemento => elemento === testDiagonal3[0]) ? console.log('GANASTE!! en la diagonal1') : console.log(''); 
            //     }
            //     console.log(board[vericationObj.diagonal[2][i - 5]]);            
            // }
    
        }
    }


    return{playFunction,cleanBoard,hirozontalVerification,verticalVerification,diagonalVerification}


})();

// gameBoard.playFunction(0,'x')
// gameBoard.playFunction(1,'0')
// gameBoard.playFunction(2,'x')
// gameBoard.playFunction(3,'o')
// gameBoard.playFunction(4,'x')
// gameBoard.playFunction(5,'x')
// gameBoard.playFunction(6,'x')
// gameBoard.playFunction(7,'o')
// gameBoard.playFunction(8,'o')
// gameBoard.hirozontalVerification();
// gameBoard.verticalVerification()
// gameBoard.diagonalVerification();
// gameBoard.playFunction(2,'x')
// gameBoard.cleanBoard();



const players = (name, color) => {

    const getName = () => name;
    const getColor = () => color;


    return{getName,getColor}
};

let player1;
let player2;

const Goku = players('goku','red');

// console.log(Goku.getColor());


let boardTest =['x','x','x',
                '','o','x',
                'o','','x'
];

let test6 = ['x','x','o'];

function test2(arr) {

    // let tempValue;
    // for (let i = 0; i < arr.length; i++) {
    //     tempValue = arr[i]

    //     if (arr[i] != arr[0]) {
    //         console.log(false);
    //     }else{
    //         console.log(true);
    //     }
    // }

    // if (arr[0] == arr[1] && arr[1] == arr[2]) {
    //     console.log(true);
    // }else{
    //     console.log(false);
    // }

    return arr.every(elemento => elemento === arr[0])

    // let test68 = arr[0] == arr[1] && arr[1] == arr[2]; 
    // console.log(test68);
}


// console.log(test2(test6));




//      Empezar a verificar a partir del 5to movimiento



// hirozontalVerification(vericationObj,boardTest);
// verticalVerification(vericationObj,boardTest);
// diagonalVerification(vericationObj,boardTest)


function domElementsGame(arr) {
    
    arr.forEach(elementObject => {
    
        createElementsDom(elementObject.elementType,elementObject.attributes,null,elementObject.innerText,document.querySelector(elementObject.appendChild));
        
    })

    animationAndOthers();
    newGame()
    rematch()
    createXO()
    
}

function domElementsMenu(arr) {
    
    arr.forEach(elementObject => {
    
        createElementsDom(elementObject.elementType,elementObject.attributes,null,elementObject.innerText,document.querySelector(elementObject.appendChild));
        
    })

    registerNames();
    changeColor1();
    changeColor2();
    transitionForms();
}

function registerNames() {

    let form = document.forms.formMain;
    

    form.addEventListener('submit', (e)=> {

        // console.log(e.target.elements['color1'].value)
        // console.log(e.target.elements['color2'].value)
        // console.log(e.target.elements['namePlayer1'].value)
        // console.log(e.target.elements['namePlayer2'].value)
        let name1 = e.target.elements['namePlayer1'].value ;
        let name2 = e.target.elements['namePlayer2'].value ;

        let color1 = e.target.elements['color1'].value ;
        let color2 = e.target.elements['color2'].value ;

        arrDomObjGame[7].innerText = name1;
        arrDomObjGame[11].innerText = name2;
    
        // console.log(e.target.elements['color1'].value)
        player1 = players(name1,color1);
        player2 = players(name2,color2);

        // console.log(player1.getName());
        // console.log(player1.getColor());
        // console.log(player2.getName());
        // console.log(player2.getColor());

        delDomElementsMenu()
        // game(name1, name2)
        domElementsGame(arrDomObjGame);
        e.preventDefault();
    });
};

function changeColor1() {

    const inputColor = formMain.color1;
    // let divColorInput1 = document.querySelector('.inputColor1');
    inputColor.addEventListener('input', ()=> {
        document.documentElement.style.setProperty("--divColorInput1", inputColor.value);

            // divColorInput1.style.backgroundColor = '#DE1616';

    })
}
function changeColor2() {

    const inputColor2 = formMain.color2;
    // let divColorInput2 = document.querySelector('.inputColor2');
    inputColor2.addEventListener('input', ()=> {
        document.documentElement.style.setProperty("--divColorInput2", inputColor2.value);

        // divColorInput2.style.backgroundColor = inputColor2.value;
    })
}

function delDomElementsMenu() {

    const formStart = document.querySelector('.containerStartGame');
    const title = document.querySelector('.title')
    const miniPerfil = document.querySelector('.miniPerfil')
    
    ;
    document.body.removeChild(formStart)
    document.body.removeChild(title)
    document.body.removeChild(miniPerfil)

}
function delDomElementsGame() {

    const containerGame = document.querySelector('.containerTTT');
    const title = document.querySelector('.title')
    const miniPerfil = document.querySelector('.miniPerfil')

    document.body.removeChild(containerGame)
    document.body.removeChild(title)
    document.body.removeChild(miniPerfil)
}

function animationAndOthers() {

    //  animation for boardItems

    const boardItem = document.querySelectorAll('.boardItem');

    // let x = '<svg width="255" height="255" viewBox="0 0 255 255" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="183.848" y="56.5685" width="20" height="180" rx="10" transform="rotate(45 183.848 56.5685)" fill="white"/><rect x="197.99" y="183.848" width="20" height="180" rx="10" transform="rotate(135 197.99 183.848)" fill="white"/></svg>'
    // let o = '<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="90" r="80" stroke="white" stroke-width="20"/></svg>';

    boardItem.forEach(e => e.addEventListener('click', (e) => {
        let item = e.target;
    
        item.style.animation = 'animationOutline 0.2s linear both' ;

        // createElementsDom('div',{class:'x'},x,null,item);
        // createElementsDom('div',{class:'o'},o,null,item);
    
    }))



    // const titleMove  = document.querySelector('.title');

}


function newGame() {
    const btnNewGame = document.querySelector('.btnNewGame');

    btnNewGame.addEventListener('click', ()=> {

        delDomElementsGame()

        domElementsMenu(arrDomObjStart);


    })


}

function rematch() {

    const btnNewGame = document.querySelector('.btnRematch');

    btnNewGame.addEventListener('click', ()=> {

        delDomElementsGame();

        domElementsGame(arrDomObjGame);

    })

    
}

function transitionForms() {

    const containerInputs1 = document.querySelector('.containerInputs1');
    const player1P = document.querySelector('.labelP1');

    const inputNamePlayer1 = formMain.namePlayer1;
    

    inputNamePlayer1.addEventListener('focus', ()=> {


        inputNamePlayer1.style.backgroundColor = '#9A82DB';
        inputNamePlayer1.style.color = '#1C1B1F';

        containerInputs1.style.backgroundColor = '#9A82DB';

        player1P.style.backgroundColor = '#9A82DB';
        player1P.style.color = '#1C1B1F';

    })

    inputNamePlayer1.addEventListener('blur', ()=> {


        inputNamePlayer1.style.backgroundColor = '#381E72';
        inputNamePlayer1.style.color = 'white';

        containerInputs1.style.backgroundColor = '#381E72';

        player1P.style.backgroundColor = '#381E72';
        player1P.style.color = 'white';

    })


    const containerInputs2 = document.querySelector('.containerInputs2');
    const player2P = document.querySelector('.labelP2');

    const inputNamePlayer2 = formMain.namePlayer2;


    inputNamePlayer2.addEventListener('focus', ()=> {


        inputNamePlayer2.style.backgroundColor = '#9A82DB';
        inputNamePlayer2.style.color = '#1C1B1F';

        containerInputs2.style.backgroundColor = '#9A82DB';

        player2P.style.backgroundColor = '#9A82DB';
        player2P.style.color = '#1C1B1F';

    })

    inputNamePlayer2.addEventListener('blur', ()=> {


        inputNamePlayer2.style.backgroundColor = '#381E72';
        inputNamePlayer2.style.color = 'white';

        containerInputs2.style.backgroundColor = '#381E72';

        player2P.style.backgroundColor = '#381E72';
        player2P.style.color = 'white';

    })
}

// function game(name1,name2) {

//     arrDomObjGame[5].innerText = name1;
//     // arrDomObjGame[7].innerText = ;
//     arrDomObjGame[9].innerText = name2;

// }

// domElementsGame(arrDomObjGame);
domElementsMenu(arrDomObjStart);
// console.log(document.forms);

function createXO() {
    
    const boardItem = document.querySelectorAll('.boardItem');

    let x = '<svg width="255" height="255" viewBox="0 0 255 255" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="183.848" y="56.5685" width="20" height="180" rx="10" transform="rotate(45 183.848 56.5685)" fill="white"/><rect x="197.99" y="183.848" width="20" height="180" rx="10" transform="rotate(135 197.99 183.848)" fill="white"/></svg>'
    let o = '<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="90" r="80" stroke="white" stroke-width="20"/></svg>';

    // let oEntry = document.querySelector('.o');

    let count = [];

    let element = document.querySelector('.boardItem');
    let computedStyle = window.getComputedStyle(element);
    // let colorPrimary = computedStyle.getPropertyValue('--color-primary');

    let color1 = computedStyle.getPropertyValue('--divColorInput1');
    let color2 = computedStyle.getPropertyValue('--divColorInput2');
     

    
    boardItem.forEach(e => e.addEventListener('click', (e) => {
        let item = e.target;
         
        if (count.length == 0) {

            createElementsDom('div',{class:'x blur-in-expand'},x,null,item);
            item.classList.add('x');
            count.push('x');
            // console.log(count);
            // console.log(count[count.length - 1]);
            item.style.outlineColor = color1;
            item.style.pointerEvents = 'none';


        } 
        
        if (item.classList.contains('x') || item.classList.contains('o') ) {

        }else{
        
            if(!item.classList.contains('x') && count[count.length - 1] == 'x'){

                createElementsDom('div',{class:'o blur-in-expand'},o,null,item);
                item.classList.add('o');
                count.push('o');
                // console.log(count);
                item.style.outlineColor = color2;
                item.style.pointerEvents = 'none';


            }else if(count[count.length - 1] == 'o'){

                createElementsDom('div',{class:'x blur-in-expand'},x,null,item);
                item.classList.add('x');
                count.push('x');
                // console.log(count);
                item.style.outlineColor = color1;
                item.style.pointerEvents = 'none';


            }
        }
        


    }))

    
    
}

