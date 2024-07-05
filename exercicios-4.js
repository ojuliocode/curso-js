/*
    Faça um programa que declare uma lista de alunos de 
    uma escola, com seus respectivos nomes
    ["João", "Roberto", "Ana"]

    Depois, você irá tentar adicionar um aluno novo
    na lista de alunos. Você deve checar o seguinte:

    - Se a lista de alunos já conter 10 alunos, então 
    você deve printar uma mensagem que o limite máximo já foi atingido
    - Se não, adicione o novo aluno à lista

*/

let listaDeAlunos = ["João", "Maria", "Alberto", "Carlos", "Ana", "Gabriel", "Matheus", "Bruna", "Bernardo", "Daniela"]
let alunoNovo = "Antonio"

if(listaDeAlunos.length < 10){
    listaDeAlunos.push(alunoNovo);
    console.log("Conseguiu adicionar o aluno")
}else {
    console.log("Atingiu o numero maximo de alunos")
}