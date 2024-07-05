let podeDirigir = true
let stringTrue = "true"

// console.log("O tipo da variavel podeDirigir é: " + typeof podeDirigir)
// console.log("O tipo da variavel stringTrue é: " + typeof stringTrue)

let nome1 = "Joao"
let nome2 = "Joao"

// console.log(nome1 == nome2)

let ehIgual = (nome1 == nome2)

// console.log(ehIgual)

let numeroA = 20 
let numeroB = 15
let comparacao = (numeroA == numeroB)

// console.log("Os numeros são iguais? " + comparacao)

/*
    Maior: >
    Menor: <
    Igual: ==
*/

// console.log("10 é maior que 20")
// console.log(10 > 20)

let comparacaoDois = (15 < 100)

// console.log("Quinze é menor do que cem?" + comparacaoDois)

let lista = ["elemento A", "elemento B"]

let inclui = lista.includes("elemento B")
// console.log(inclui)

let nota1 = 90
let nota2 = 70
let nota3 = 70
let nota4 = 100

let passouDeAno = (nota1 > 60 && nota2 > 60 && nota3 > 60 && nota4 > 60)

// console.log("O aluno passou de ano? " + passouDeAno)

let nome = "Joao"
let sobrenome = "Silva"

let ehJoaoCarlos = (nome == "Joao" && sobrenome == "Carlos")

// console.log("Esse nome é o Joao Carlos? -> " + ehJoaoCarlos)

// -------------------------------------------------------------------------------------
let passouNoEnem = false
let passouNoVestibularProprio = false 
let ehTransferencia = true

let entrouNaFaculdade = (passouNoEnem == true || passouNoVestibularProprio == true || ehTransferencia == true)

// console.log("Entrou na faculdade? " + entrouNaFaculdade)

// -------------------------------------------------------------------------------------

// !

// true
let passouEmMatematica = true 

// false
passouEmMatematica = !passouEmMatematica

// true
passouEmMatematica = !passouEmMatematica

console.log(passouEmMatematica)