const boardItem = document.querySelectorAll('.boardItem');

// import { player } from './test.js'

boardItem.forEach(e => e.addEventListener('click', (e) => {
    let item = e.target;

    item.style.animation = 'animationOutline 0.2s linear both' ;

}))

const gameBoard = (function(){
    let board =['null','null','null',
                'null','null','null',
                'null','null','null'
    ];
    

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



    return{playFunction,cleanBoard}


})();

// gameBoard.playFunction(1,'x')
// gameBoard.playFunction(0,'x')
// gameBoard.playFunction(2,'o')
// gameBoard.playFunction(2,'x')
// gameBoard.cleanBoard();



// let testArr = ['null','null','null','null','null','null','null','null','null']

// console.log(testArr.slice(0,1,'x'));

const players = (name, color) => {

    const getName = () => name;
    const getColor = () => color;


    return{getName,getColor}
};

const Goku = players('goku','red');

// console.log(Goku.getColor());


let boardTest =['x','o','x',
                '','o','x',
                'o','','x'
    ];
    


let vericationObj = {

    combinatiosForWins: [3,12,21,9,15],
    
    test:['ROWS',3,12,21,'COLUMN',9,12,15, 'DIAGONAL',12,12 ],

    row:[[0,1,2],[3,4,5],[6,7,8]],
    column:[[0,3,6],[1,4,7],[2,5,8]],
    diagonal:[[0,4,8],[2,4,6]],

};



//      Empezar a verificar a partir del 5to movimiento

function hirozontalVerification(obj,arr) {
    

        
    for (let i = 0; i < arr.length; i++) {
            
        let count = i;

        //Row

        if (count <= 2) {
            console.log(arr[obj.row[0][i]]);            
        }

        if (count > 2 && count <= 5) {
            console.log(arr[obj.row[1][i - 3]]);            
        }

        if (count >= 5) {
            console.log(arr[obj.row[2][i - 5]]);            
        }

    }
}
function verticalVerification(obj,arr) {
    

        
    for (let i = 0; i < arr.length; i++) {
            
        let count = i;

        //Column

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

        //Ddiagonal

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

// hirozontalVerification(vericationObj,boardTest);
verticalVerification(vericationObj,boardTest);
// diagonalVerification(vericationObj,boardTest)