let lista = ["Arroz", "Feijão", "Carne", "Azeite", "Pão"]

lista.map((item) => {
    // console.log(item)
})

let listaNotas = [8, 9.5, 4, 10, 6]

listaNotas.map((itemGenerico) => {
    let numero = itemGenerico + 1
    // console.log(numero)
})
console.log("O tamanho da lista é ")
console.log(lista.length)

lista.push("Manteiga")
lista.push("Detergente")

console.log("O novo tamanho é")
console.log(lista.length)