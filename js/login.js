//Gerando dois objetos no localStorage
const usuario1 ={
    nomeUsuario:"mirella",
    senhaUsuario:"12345"
}

const usuario2 ={
    nomeUsuario:"mirellaR",
    senhaUsuario:"12345"
}

let listaDeUsuarios=[];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));


//Criando objeto para armazenar o usuário
// const usuario={
//     nomeUsuario:"",
//     senhaUsuario:""
// }


addEventListener("click",(evento)=>{
    evento.preventDefault();

    if(evento.target.id=="btnSubmit"){
        // let usuario=document.querySelector("#idUser").value; //Recuperando o conteúdo do campo
        // let senha=document.querySelector("#idPass").value; //Recuperando o conteúdo do campo
       
       //Armazenando dados do objeto
        let inputUserValue=document.querySelector("#idUser").value; 
        let inputPassValue.querySelector("#idPass").value;
       
        let lista=JSON.parse(localStorage.getItem("listaUser"));
        

        lista.forEach(usuario => { 
            //Validação
            if(inputUserValue==usuario.nomeUsuario&&  inputPassValue==usuario.senhaUsuario){
            console.log("Validado");
            const h1Titulo=documet.querySelector("#titulo");
            h1.h1Titulo.innerHTML="Bem vindo: " +usuario.nomeUsuario;

        }else{
            console.log("Inválido")
            h1Titulo.innerHTML="";
        }
            console.log(usuario.nomeUsuario);
            
        });

        
    }
})