let notaFinal = 60

if(notaFinal >= 60){
    console.log("Você passou!")
}else if(notaFinal < 60 && notaFinal >= 30){
    console.log("Prova de recuperação")
}else { // Notas menores do que 30
    console.log("Reprovação")
}

let pagouBoleto = true
let venceu = true

if(pagouBoleto == true && venceu == false){
    console.log("Compra confirmada")
}else if(pagouBoleto == false && venceu == false){
    console.log("Compra aguardando pagamento")
}else if(venceu == true){
    console.log("Compra cancelada")
}