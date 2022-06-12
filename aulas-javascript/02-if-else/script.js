//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idadeConducao = 18
if (idadeConducao <18) {
    console.log("Você é menor de idade, não pode dirigir.")
} else if (idadeConducao >=18) {
    console.log("Você é maior que 18 anos, pode dirigir.")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let idade = 18
let ehHumano = true
if (idade >= 18 && ehHumano == true) {
    console.log("Sou um humano maior de 18 anos.")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let dezembroAniversario = true
let janeiroAniversario = true
if (janeiroAniversario == true || dezembroAniversario == true){
    console.log("Feliz Aniversário!")
} else {
    console.log("Você não faz aniversário.")
}

// Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
const meuNome = "Renato"
if (meuNome.charAt(0) == 'R') {
    console.log("Meu nome começa com a letra R.")
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
const nome = "Ellen"
const sobrenome = "Andrade"
if (sobrenome.length > 6 || nome.charAt(0) == 'E') {
    console.log("Meu nome começa com a letra E ou o meu sobrenome tem mais de 6 letras.")
}
