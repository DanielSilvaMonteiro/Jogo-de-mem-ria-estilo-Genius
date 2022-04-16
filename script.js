let order = [];
let clickedOrder = [];
let score = 0;

/*
0 - verde
1- vermelho
2- amarelo
3- azul
*/

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Cria ordem aleatória de cores
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random()*4);   //Math.floor- arredonda+Mth random *4 - 4 é o n maximo que pode chegar a randomização
    //console.log(colorOrder);
    order[order.length] = colorOrder;
    //console.log(order.length);
    clickedOrder = [];
        
    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);
        console.log(elementColor,Number(i));
    }
}

//Acende a próxima cor
let lightColor =(element, number) =>{
    number = number * 500;
    setTimeout(() => {
    element.classList.add('selected');
    }, number -250);
 // setTimeout(()=>{
    element.classList.remove('selected');
    //console.log(element, number);
//    });
}

//Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () =>{
    for (let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`pontuação: ${score}!\n Você acertou! Iniciando próximo nivel!`);
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
/*    createColorElement(color).classList.add('selected2');

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected2');
            
    },250); */
    checkOrder();   
 }

//Função que retorna a cor
let createColorElement = (color) =>{
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

//função para proximo nivel do jogo
let nextLevel = () =>{
    score++;
    
    shuffleOrder();    
}

//Função para game over
let gameOver =() =>{
    alert(`pontuação: ${score}!\n Você perdeu o jogo\n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder= [];

    playgame();
}

//Função de inicio de jogo
let playgame = () =>{
    alert(`Bem vindo ao Gênesi! Iniciando um novo Jogo!`);
    score = 0;
    nextLevel();
}

//eventos de clique de jogo
green.onclick = () =>click(0);
red.onclick = () =>click(1);
yellow.onclick = () =>click(2);
blue.onclick = () =>click(3);

//inicio do jogo
playgame();