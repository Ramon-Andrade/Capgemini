function faltaCaracteres(senha) {
    let caracteresFaltantes = 6 - senha.length
    if (caracteresFaltantes < 6) {
        caracteresFaltantes = 0
    }
    return caracteresFaltantes
}

function faltaMinuscula(senha) {
    let faltamLetrasMinuscula = 1
    for (let i = 0; i < senha.length; i++) {
        let letraMinuscula = ["a", "b", "c", "d", "e", "f", "g", "g", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", , "w", "x", "y", "z"]
        for (let j = 0; j < letraMinuscula.length; j++) {
            if (senha[i] == letraMinuscula[j]) {
                faltamLetrasMinuscula = 0
            }
        }
    }
    return faltamLetrasMinuscula
}

function faltaMaiscula(senha) {
    let faltamLetrasMaiuscula = 1
    for (let i = 0; i < senha.length; i++) {
        let letrasMaiuscula = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", , "W", "X", "Y", "Z"]
        for (let j = 0; j < letrasMaiuscula.length; j++) {
            if (senha[i] == letrasMaiuscula[j]) {
                faltamLetrasMaiuscula = 0
            }
        }
    }
    return faltamLetrasMaiuscula
}

function faltaCharEspecial(senha) {
    let faltamCaracteresEspeciais = 1
    for (let i = 0; i < senha.length; i++) {
        let caracteres = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]
        for (let j = 0; j < caracteres.length; j++) {
            if (senha[i] == caracteres[j]) {
                faltamCaracteresEspeciais = 0

            }
        }
    }
    return faltamCaracteresEspeciais
}

function faltaDigitos(senha) {
    let numero = 1
    for (let i = 0; i < senha.length; i++) {
        let digitos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (let j = 0; j < digitos.length; j++) {
            if (senha[i] == digitos[j]) {
                numero = 0
            }
        }
    }
    return numero
}
let botao = document.querySelector("#OK")
botao.addEventListener("click", () => {
    let senha = document.querySelector("#senha").value
    let faltamCaracteres = 0
    faltamCaracteres = faltamCaracteres + faltaCaracteres(senha)
    console.log(faltamCaracteres)
    faltamCaracteres = faltamCaracteres + faltaMinuscula(senha)
    console.log(faltamCaracteres)
    faltamCaracteres = faltamCaracteres + faltaMaiscula(senha)
    console.log(faltamCaracteres)
    faltamCaracteres = faltamCaracteres + faltaCharEspecial(senha)
    console.log(faltamCaracteres)
    faltamCaracteres = faltamCaracteres + faltaDigitos(senha)
    console.log(faltamCaracteres)

    console.log(`Falta ${faltamCaracteres}, para a senha ser segura`)

})