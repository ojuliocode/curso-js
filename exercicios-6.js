/*
    Crie uma função que irá avaliar as notas de um aluno
    e sua presença na aula

    Entradas da função:
    - porcentagemDePresenca: numero de 0 a 100
    - notaA: numero de 0 a 10
    - notaB: numero de 0 a 10

    Para que o aluno passe de ano, ele deverá ter dois requisitos (os dois 
    requisitos têm de ser satisfeitos. Se um deles não for, o aluno reprova)

    O aluno passará se:
    - A porcentagem de presença for maior que 75 
    E
    - A média das notas for maior que 6

    Saída (retorno):
    Se o aluno passou, retornar "Passou"
    Se ele reprovou, retornar "Reprovou"

*/

function avaliarAluno(porcentagemDePresenca, notaA, notaB){
    let media = (notaA + notaB)/2
    if(media > 6 && porcentagemDePresenca > 75){
        return "Passou"
    }else {
        return "Reprovou"
    }
}

console.log(avaliarAluno(100, 0, 0))

function pararExecucao(){
    if(porcentagem < 75)
        return "Reprovou"
    
}