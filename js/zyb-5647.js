
//Função para recuperação de elementos no html para serem trabalhados os dados 


//for (let index = 0; index <liElement.length; index++) {
   // console.log(liElement[index].textContent)
    
//}
//console.log(liElement.length)

// //Declaração de Arrays 
// let num1=[1,2,3,4,5];
// let num2=[6,7,8,9,10];
// let num3=[num1,num2];


// console.log(`Array-1 ${num1}`);
// console.log(`Array-2 ${num2}`);
// console.log(`Array-3 ${num3}`);

// //Listando um Array, Técnica especial
// /*num3.forEach((itemDoArray)=>{
//     console.log(`Array-3 sendo listado ${itemDoArray}`);
//  })*/
 
//  // Listando o Array com MAP
// num3.map((numero,key)=>{

//     console.log(`${(key+1)} - Itens do array - ${numero}`);
//     numero.forEach((digitos)=>{
//         console.log(digitos)
//     })
// })


// let num1=[1,2,3,4,5];
// let num2=[6,7,8,9,10];
// //Epalhar o Array com SPREAD [...]
// let num3=[...num1,...num2];

// console.log(`Array-1 ${num1}`);
// console.log(`Array-2 ${num2}`);
// console.log(`Array-3 ${num3}`);

// num3.map((numero,key)=>{
//     console.log(`${(key+1)} - Itens do array - ${numero}`);
// })

// //Pegando o elemento pelo seu tipo:
// //Conversão deste elemento HTML para Array de forma indireta 

// const liElementHtml = document.getElementsByTagName("li");
// const liElementArray = [...liElementHtml];

// liElementArray.map((item,key)=>{
//     if (item.textContent=="Item-39"){
//         console.log(`${key+1}-${item.textContent = "Localizado"}`)
//     }
   
// })


// function soma(p1,p2,p3){
//     nr1=p1;
//     nr2=p2;
//     //Retorna somente o valor da função no console.log no index.hmtl 
//     return (parseInt(nr1)+parseInt(nr2) + parseInt(p3))

//     // console.log(`Resultado: ${nr1+nr2 + parseInt(parametro)}`);
//     // console.log(`Este é o parâmetro que foi passado : ${parametro}`)
// }

// //ARRW FUNCTION

// const mudaCor=()=>{

//     //Função setTimeOut
//     setTimeout(soma,5000);
// }
//  mudaCor()

// let tmp=""

// function mudaCor(){
//     let r="";
//     let g="";
//     let b="";

    //Math - função matemática que possui constantes e funções: random = gera números aleatóros entre 0 e 1
    //ceil, floor e round = arredondam o número para cima, para baixo ou aleatoriamente 
    //Determinando para a variavel r, um valor entre 0 e 255
//     r = Math.round(Math.random()*255);
//     g = Math.round(Math.random()*255);
//     b = Math.round(Math.random()*255);

//     //Utilizando os seletores CSS no JS
//     const cabecalho=document.querySelector(".cabecalho");

//     cabecalho.setAttribute("style",`background-color:rgb(${r},${g},${b})`)

//     tmp = setTimeout(mudaCor, 1000)
// }
// mudaCor();

//Função altera bannner


function mudaImagem(){
let num=Math.round(Math.random()*3)

let caminho = `./img/banner-lateral-${num}.png`;

const img1 = document.querySelector(".l-e > img")
img1.src=caminho;

}
mudaImagem()
