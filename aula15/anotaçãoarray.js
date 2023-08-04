/*VARIÁVEIS COMPOSTAS ou arrays ou vetores (Arrays(vetores)) 
(array = condominio com numero de casa, moradores e casas)*/

/*os elementos de um vetor é um par que agrupa: o espaço da memória, o valor colocado dentro 
dele e um índice/chave [0,1,2,3...]*/


let num = [5, 8, 2, 3, 9] // cada espaço desta array tem a chave (indice ou index) = 0, 1, 2, 3, 4 respectivamente, ou seja, está dividida em 5 elementos.
num[5] = 7 // adiciona o valor '7' no index 5, gerando um novo index, que não existia.
num[2] = 4 // adicionando um valor a um index já existente, substituirá o valor antigo.
num.push(1) // adiciona o valor '1' no final da array, gerando o index 6.
num.sort() // ordena os valores de um array em ordem crescente.
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor (array) é ${num[0]}`)
let pos = num.indexOf(4) // procura um valor dentro da array e diz qual é seu index.
    if (pos == -1) { //-1 indica que o valor não foi encontrado dentro da array.
        console.log('O valor não foi encontrado!')
    } else{
        console.log(`O valor pesquisado está na posição ${pos} `)
    }


//--------------------------------

let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)
//console.log(valores)

/* para consultar os valores em cada indice da array.

Versão Noob:
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

Versão Basic:
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

Versão PRO atualizada: */
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}