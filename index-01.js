var primeiroNome = "Arthur" // Essa variavel tem o nome primeiroNome 
var segundoSobrenome = "Ferreira"

function primeiroNomeFuncao(pai){ // Essa função TAMBEM tem o nome primeiroNome
    // Essa função precisa ter um returno
    return pai.trim().indexOf(' ')
}

// nao pode existir variaveis e funcoes com nomes repetidos

function segundoSobrenomeFuncao(filho){
    // Essa função precisa ter um return
    return filho.trim().substring(3)
}
// a cor (highlight) tambem muda
// azul pra variaveç
// amarelo pra funcao === method
console.log(primeiroNomeFuncao(primeiroNome)+segundoSobrenomeFuncao(segundoSobrenome))

//  primeiroNome é o NOME da função
// Precisamos chamar a função

// primeiroNome()