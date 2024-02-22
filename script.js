// Coletando os dados necessários para trabalhar em cima deles;
let sliderElement = window.document.querySelector("#slider");
let buttonElement = window.document.querySelector("#button");
let sizePassword = window.document.querySelector("#valor");
let password = window.document.querySelector("#password");
let containerPassword = window.document.querySelector("#container-password");

// Criando algoritmo;
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

//Criando a function responsável por gerar a senha aleatoriamente de forma concatenada!
function generatePassword(){

    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    console.log(pass)
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}
// A base para o funcionamento é o "charset", em seguida dentro do "for" é utilizado o "charAt" que serve para buscar alguma coisa dentro da variável "charset", o "charAt" é seguido pelo comando "Math.floor" para buscar um numero inteiro, e o "Math.random"
function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}

