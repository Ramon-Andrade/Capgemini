//Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.//

let numero = parseInt(prompt("Digite um número."))


for (let i = 0; i < numero; i++) {

    for (let c = numero; c > i + 1; c--) {
        document.write("&nbsp;")
    }
    for (let j = 0; j <= i; j++) {
        document.write("*")
    }
    document.write("<br/>")
}