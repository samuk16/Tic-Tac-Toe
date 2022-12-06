import createElementsDom from './domCreation.js';

const arrDomObjGame = [
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
        appendChild: '.name2',
    },

    //  childs containerBoard

    {
        elementType: 'div',
        attributes: {class:'boardItem'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem'},
        appendChild: '.containerBoard',
    },
    {
        elementType: 'div',
        attributes: {class:'boardItem'},
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
    {
        elementType: 'div',
        attributes: {class:'containerStartGame'},
        appendChild: 'body',
    },

    //  childs containerStartGame

    {
        elementType: 'form',
        attributes: {class: 'formStartGame'},
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
        attributes: null,
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
        attributes: {type: 'color', name: 'color1'},
        appendChild: '.inputColor1',
    },

    //  childs label2

    {
        elementType: 'p',
        attributes: null,
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
        attributes: {type: 'color', name: 'color2'},
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

    function playFunction(dataId,player){

        if (!(board[dataId] != 'null')) {
            
            board.splice(dataId,1,player);
            console.log(board);     
        }

    };

    function cleanBoard() {
        board = ['null','null','null','null','null','null','null','null','null'];
        console.log(board);
    }


    function hirozontalVerification(obj,arr) {
       
        for (let i = 0; i < board.length; i++) {
                
            let count = i;
    
            if (count <= 2) {
                // console.log(board[obj.row[0][i]]);
                let test = []
                test.push(board[vericationObj.row[0][i]]);
                test.forEach(e => e == e ? console.log('ganaste'): '');            
            }
    
            if (count > 2 && count <= 5) {
                console.log(board[vericationObj.row[1][i - 3]]);            
            }
    
            if (count >= 5) {
                console.log(board[vericationObj.row[2][i - 5]]);            
            }
    
        }
    }
    function verticalVerification(obj,arr) {
            
        for (let i = 0; i < arr.length; i++) {
                
            let count = i;
    
            if (count <= 2) {
                console.log(arr[obj.column[0][i]]);            
            }
    
            if (count > 2 && count <= 5) {
                console.log(arr[obj.column[1][i - 3]]);            
            }
    
            if (count >= 5) {
                console.log(arr[obj.column[2][i - 5]]);            
            }
    
        }
    }
    function diagonalVerification(obj,arr) {
              
        for (let i = 0; i < arr.length; i++) {
                
            let count = i;
    
            if (count <= 2) {
                console.log(arr[obj.diagonal[0][i]]);            
            }
    
            if (count > 2 && count <= 5) {
                console.log(arr[obj.diagonal[1][i - 3]]);            
            }
    
            if (count >= 5) {
                console.log(arr[obj.diagonal[2][i - 5]]);            
            }
    
        }
    }


    return{playFunction,cleanBoard,hirozontalVerification}


})();

// gameBoard.playFunction(0,'x')
// gameBoard.playFunction(1,'x')
// gameBoard.playFunction(2,'o')
// gameBoard.hirozontalVerification();
// gameBoard.playFunction(2,'x')
// gameBoard.cleanBoard();



const players = (name, color) => {

    const getName = () => name;
    const getColor = () => color;


    return{getName,getColor}
};

const Goku = players('goku','red');

// console.log(Goku.getColor());


let boardTest =['x','x','x',
                '','o','x',
                'o','','x'
];

let test6 = ['o','o','o'];

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

    let test68 = arr[0] == arr[1] && arr[1] == arr[2]; 
    console.log(test68);
}

test2(test6);




//      Empezar a verificar a partir del 5to movimiento



// hirozontalVerification(vericationObj,boardTest);
// verticalVerification(vericationObj,boardTest);
// diagonalVerification(vericationObj,boardTest)


function domElementsGame(arr) {
    
    arr.forEach(elementObject => {
    
        createElementsDom(elementObject.elementType,elementObject.attributes,null,elementObject.innerText,document.querySelector(elementObject.appendChild));
        
    })

    const boardItem = document.querySelectorAll('.boardItem');


    boardItem.forEach(e => e.addEventListener('click', (e) => {
        let item = e.target;
    
        item.style.animation = 'animationOutline 0.2s linear both' ;
    
    }))
}

function domElementsMenu(arr) {
    
    arr.forEach(elementObject => {
    
        createElementsDom(elementObject.elementType,elementObject.attributes,null,elementObject.innerText,document.querySelector(elementObject.appendChild));
        
    })

}



// domElementsGame(arrDomObjGame);
domElementsMenu(arrDomObjStart);




