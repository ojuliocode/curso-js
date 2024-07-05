/*
    Crie duas listas:

    - Uma lista de compras vazia
    - Uma lista de frutas com as seguintes frutas: 
        Maçã, Banana, Kiwi, Ameixa, Abacaxi
    
    Você deverá adicionar comidas do seu gosto na lista de compras.
    Porém, ao final, você deverá checar se a sua lista de compras 
    contém pelo menos 3 frutas da lista de frutas

    Caso isso não seja verdade, printe no terminal:
    - Deve haver pelo menos 3 frutas
    
*/

let listaDeCompras = []
let listaDeFrutas = ["Maçã", "Banana", "Kiwi", "Ameixa", "Abacaxi"]

listaDeCompras.push("Coxinha")
listaDeCompras.push("Banana")
listaDeCompras.push("Kiwi")
listaDeCompras.push("Pão")
listaDeCompras.push("Ameixa")

let numeroDeFrutas = 0

listaDeCompras.map((elemento) => {
    if(listaDeFrutas.includes(elemento)){
        numeroDeFrutas = numeroDeFrutas + 1
    }
})

if(numeroDeFrutas >= 3){
    console.log("Deu certo, eu tenho 3 ou mais frutas")
}else {
    console.log("Preciso de mais frutas")
}