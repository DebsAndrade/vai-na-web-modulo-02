// 1 - crie uma função que exiba uma mensagem no console
function paisQueVivo(pais) {
    console.log(`O país que vivo é ${pais}.`)
}
paisQueVivo("Portugal")

// 2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function receberNome(nome) {
    console.log(`O meu nome é ${nome}.`)
}
receberNome("Débora Andrade")

// 3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function info(nome, idade, estiloMusical) {
    console.log(`Meu nome é ${nome}, minha idade é ${idade} e meu estilo musical preferido é o ${estiloMusical}.`)
}
info("Débora Andrade", "27 anos", "pop")

// 4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function outrasInfos(filme, musica) {
    console.log(`Meu filme preferido é ${filme} e a minha música preferida do momento é ${musica}.`)
}
outrasInfos("Spider-Man Homecoming", "Running Up That Hill da Kate Bush")

// *Bônus:

// 5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(numero) {
    return numero * 3
}
console.log(triplo(27))

// A próxima função é apenas para testar conhecimentos.

function triple(number) {
    console.log(`O triplo de ${number} é ${number * 3}.`)
}
triple(80)
