let num = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.querySelector('div#res'); 7
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


    function adicionar() {
        if (isNumero(num.value) && !inLista(num.value, valores)) {
            valores.push(Number(num.value));
            let item = document.createElement('option');
            item.text = `Valor ${Number(num.value)} adicionado.`;
            lista.appendChild(item);
            res.innerHTML = ''
        } else {
            window.alert(' [ERRO] Valor inválido ou já encontrado na lista. ');
        }
        num.value = ''
        //valores.sort() // pq com esse sort da errado?
        num.focus()
    };


    function finalizar() {
        if (valores.length == 0) {
            window.alert(' [ERRO] Adicione valores antes de finalizar! ')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior) {
                    maior = valores[pos]
                }
                if (valores[pos] < menor) {
                    menor = valores[pos]
                }
            }
            media = soma / tot
            
            res.innerHTML = ''
            res.innerHTML += `<p>Total de números cadastrados: ${tot}. </p>`
            res.innerHTML += `<p>Maior valor: ${maior}</p>`
            res.innerHTML += `<p>Menor valor: ${menor}</p>`
            res.innerHTML += `<p>Soma dos valores: ${soma}</p>`
            /* res.innerHTML += `<p>Menor valor: ${valores[0]}. </p>`
            res.innerHTML += `<p>Maior valor: ${valores[tot - 1]}. </p>` */ // pq assim n funciona c o sort?
            res.innerHTML += `<p>Média: ${media}</p>`
        }  
    };


/*      valores.push(n)
        valores.sort()
        let tam = valores.length 
        window.alert(`Ao todo, tem ${tam}. Menor: ${num[0]}. Maior: ${num[tam - 1]}
*/

