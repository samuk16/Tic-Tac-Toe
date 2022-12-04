

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



function createElementsDom(elementType,attributes,innerHTML,innerText,appendChild) {
    
    if(elementType){
        let element = document.createElement(elementType);
  
        if (attributes) {
            for (const key in attributes){
                element.setAttribute(key,attributes[key])
            }
        }

        if (innerHTML) {
            element.innerHTML= innerHTML;

        }    
        if (innerText) {
            element.innerText = innerText;

        }
        if(appendChild) {
            appendChild.appendChild(element);
            
        } 

        return element;
    }
    
}

function domElementsGame() {
        
    

    //  Contianer Main

    createElementsDom('div',{class:'containerTTT'},null,null,document.body)

    //  childs containerTTT

    createElementsDom('div',{class:'containerScore'},null,null,document.querySelector('.containerTTT'));
    createElementsDom('div',{class:'containerBoard'},null,null,document.querySelector('.containerTTT'));
    createElementsDom('div',{class:'containerBtns'},null,null,document.querySelector('.containerTTT'));

    //  Child ContainerScore

    createElementsDom('div',{class:'containerName1'},null,null,document.querySelector('.containerScore'));
    createElementsDom('p',null,null,'Goku',document.querySelector('.containerName1'));

    createElementsDom('div',{class:'containerScoreP'},null,null,document.querySelector('.containerScore'));
    createElementsDom('p',null,null,'1 - 1',document.querySelector('.containerScoreP'));

    createElementsDom('div',{class:'containerName2'},null,null,document.querySelector('.containerScore'));
    createElementsDom('p',null,null,'Gohan',document.querySelector('.containerName2'));

    // Childs ContainerBoard
    
    for (let i = 0; i <= 8; i++) {
        createElementsDom('div',{class:'boardItem'},null,null,document.querySelector('.containerBoard'));
    }

    const boardItem = document.querySelectorAll('.boardItem');


    boardItem.forEach(e => e.addEventListener('click', (e) => {
        let item = e.target;
    
        item.style.animation = 'animationOutline 0.2s linear both' ;
    
    }))

    //  Childs containerBtns

    createElementsDom('div',null,null,'Rematch',document.querySelector('.containerBtns'));
    createElementsDom('div',null,null,'New Game',document.querySelector('.containerBtns'));


}

domElementsGame();

function domElementsMenu() {
    
    //  containerMain

    createElementsDom('div',{class:'containerStartGame'},null,null,document.body);

    //  child containerStartGame

    createElementsDom('form',{class:'formPlayers'},null,null,document.querySelector('.containerStartGame'));
    
    //  childs formPlayers
    
    createElementsDom('div',{class:'containerLabels'},null,null,document.querySelector('.formPlayers'));

    createElementsDom('button',{type: 'submit'},null,'Start Game',document.querySelector('.formPlayers'));

    //  child containerLabels

    createElementsDom('label',{class: 'label1'},null,null,document.querySelector('.containerLabels'));
    
    createElementsDom('label',{class: 'label2'},null,null,document.querySelector('.containerLabels'));
    
    //  cholds label1

    createElementsDom('p',null,null,'Player 1',document.querySelector('.label1'));
    
    createElementsDom('div',{class: 'containerInputs'},null,null,document.querySelector('.label1'));

    //  childs containerInputs

    createElementsDom('input',{type: 'text', name:'namePlayer'},null,null,document.querySelector('.containerInputs'));

    createElementsDom('div',{class: 'inputColor'},null,null,document.querySelector('.containerInputs'));

    //  child inputColor

    createElementsDom('input',{type: 'color',name:'color'},null,null,document.querySelector('.inputColor'));

    //  cholds label2

    createElementsDom('p',null,null,'Player 2',document.querySelector('.label2'));

    createElementsDom('div',{class: 'containerInputs2'},null,null,document.querySelector('.label2'));

    //  childs containerInputs

    createElementsDom('input',{type: 'text', name:'namePlayer2'},null,null,document.querySelector('.containerInputs2'));

    createElementsDom('div',{class: 'inputColor2'},null,null,document.querySelector('.containerInputs2'));

    //  child inputColor
    
    createElementsDom('input',{type: 'color',name:'color2'},null,null,document.querySelector('.inputColor2'));
    

}

// domElementsMenu()

function createElementsDom2(arr) {
    
    
    arr.forEach(elementObject => {

        if(elementObject.elementType){
            let element = document.createElement(elementObject.elementType);
            // console.log(elementObject.elementType);
        
            if (elementObject.attributes) {

                // let test5 = elementObject.attributes;
                
                for (const key in elementObject.attributes){
                    element.setAttribute(key,elementObject.attributes[key])
                }
                // console.log('atributos');
            }

            // if (innerHTML) {
            //     element.innerHTML= innerHTML;

            // }    
            if (elementObject.innerText) {

                element.innerText = elementObject.innerText;
                // console.log('text');

            }
            if(elementObject.appendChild) {

                elementObject.appendChild.appendChild(element);
                console.log(elementObject.appendChild);
                

            } 

            return element;
        }
    })


        

    
    
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

let arrObjTest = [
    {
        elementType: 'div',
        attributes: {class:'containerTTT',id:'TTT'},
        appendChild: document.body,
    },
    {
        elementType: 'div',
        attributes: {class:'containerScore'},
        appendChild: document.getElementById('TTT'),
    },
    {
        elementType: 'div',
        appendChild: document.getElementById('TTT'),
    },

];

// createElementsDom(arrObjTest);

// console.log(arrObjTest[1]);
// console.log(objDomTest.containerScore.appendChild);


// createElementsDom('div',{'data-id':'1',class:'nashe',style:'background-color: violet',},null,'hola',document.body);
// createElementsDom('div',{'data-id':'2',class:'nashe2',},null,'hola2',document.querySelector('.nashe'));