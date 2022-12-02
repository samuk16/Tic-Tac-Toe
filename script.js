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


let boardTest =['x','o','x',
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

    if (arr[0] == arr[1] && arr[1] == arr[2]) {
        console.log(true);
    }else{
        console.log(false);
    }
    
}

test2(test6);




//      Empezar a verificar a partir del 5to movimiento



// hirozontalVerification(vericationObj,boardTest);
// verticalVerification(vericationObj,boardTest);
// diagonalVerification(vericationObj,boardTest)



// function createElementsDom(elementType,attributes,innerHTML,innerText,appendChild) {
    
//     if(elementType){
//         let element = document.createElement(elementType);
  
//         if (attributes) {
//             for (const key in attributes){
//                 element.setAttribute(key,attributes[key])
//             }
//         }

//         if (innerHTML) {
//             element.innerHTML= innerHTML;

//         }    
//         if (innerText) {
//             element.innerText = innerText;

//         }
//         if(appendChild) {
//             appendChild.appendChild(element);
            
//         } 

//         return element;
//     }
    
// }
function createElementsDom(obj) {
    
    for (const key in obj) {
        
    

        if(obj[key].elementType){

            let element = document.createElement(obj[key].elementType);
        
            if (obj[key].attributes) {

                let test5 = obj[key].attributes;
                
                for (const key2 in test5){
                    element.setAttribute(key2,test5[key2])
                }
            }

            // if (innerHTML) {
            //     element.innerHTML= innerHTML;

            // }    
            if (obj[key].innerText) {

                element.innerText = obj[key].innerText;

            }
            if(obj[key].appendChild) {

                obj[key].appendChild.appendChild(element);

            } 

            // return element;
        }

    }
    
}


let objDomTest = {

    containerTTT: {
        elementType: 'div',
        attributes: {class:'containerTTT'},
        appendChild: document.body,
    },
        containerScore: {
            elementType: 'div',
            attributes: {class:'containerScore'},
            appendChild: document.querySelector('.containerTTT'),
        },
            child1:{
                elementType: 'div',
                appendChild: document.querySelector('.containerScore'),
            },
            child2:{
                elementType: 'div',
                appendChild: document.querySelector('.containerScore'),
            },
            child3:{
                elementType: 'div',
                appendChild: document.querySelector('.containerScore'),
            },

        containerBoard:{
            elementType: 'div',
            attributes: {class:'containerBoard'},
            appendChild: document.querySelector('.containerTTT'),
        }

};

function test67(obj) {
    for (const key in obj) {
        console.log(obj[key]);
    }

}
test67(objDomTest);
createElementsDom(objDomTest);

// createElementsDom('div',{'data-id':'1',class:'nashe',style:'background-color: violet',},null,'hola',document.body);
// createElementsDom('div',{'data-id':'2',class:'nashe2',},null,'hola2',document.querySelector('.nashe'));