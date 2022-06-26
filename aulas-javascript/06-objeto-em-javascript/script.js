// Crie um objeto que receba ao menos três propriedades sobre você.
const sobreMim = {
    nome: "Débora",
    idade: 27,
    corFavorita: "lilás",
    paisResidente: "Portugal"
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.comidaFavorita = "Risotto de Camarão"

// Remova uma propriedade desse objeto.
delete sobreMim.paisResidente

//Mostre no console todas as propriedades desse objeto.
console.log(sobreMim)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
const objeto01 = {
    nome: "Ana",
    idade: 22,
    telefone: 222222222,
    amigos: ["Diogo", "Rebeca", "Eliane", "Thiago"]
}
const objeto02 = {
    nome: "Déborah",
    idade: 29,
    telefone: 222223333,
    amigos: ["Aline", "Bianca", "Paula", "Mariana"]
}
const objeto03 = {
    nome: "Allan",
    idade: 36,
    telefone: 222224444,
    amigos: ["João", "Rian", "David", "Rodrigo"]
}
const objeto04 = {
    nome: "Roberta",
    idade: 10,
    telefone: 222225555,
    amigos: ["Keylla", "Lina", "Ranielle", "Flávio"]
}
const objeto05 = {
    nome: "Ranielle",
    idade: 27,
    telefone: 222226666,
    amigos: ["Débora", "Aurora", "Carol", "Luz"]
}
let cadastro = [objeto01, objeto02, objeto03, objeto04, objeto05]

console.log(cadastro)

// Mostre no console o nome de um amigo de cada lista.
console.log(objeto01.amigos[3], objeto02.amigos[2], objeto03.amigos[1], objeto04.amigos[0], objeto05.amigos[1])

// Outro exemplo para testar conhecimento.
for(let i = 0; i < cadastro.length; i++) {
    let valor = cadastro[i]
    console.log(valor.amigos[Math.floor(Math.random() * valor.amigos.length)])
}
