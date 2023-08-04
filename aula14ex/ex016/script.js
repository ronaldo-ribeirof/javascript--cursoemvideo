// input inicio (nmr inicial)
//input fim (nrm final)
//input passo (var = var + passo)
//input button c function contar()
/*preparando a contagem... (div#res)
numero+emoji+passo

final: bandeira
*/

function contar() {

    let finicio = document.getElementById('txti').value;
    let ffim = document.getElementById('txtf').value;
    let fpasso = document.getElementById('txtp').value;
    let res = document.getElementById('res');

    if (finicio.length == 0 || ffim.length == 0 || fpasso.length == 0) {
        window.alert('[ERRO] Preencha todos os parâmetros para prosseguir com a operação.')
        res.innerHTML = 'Impossível contar!'
    } else if (Number(fpasso) <= 0) {
        window.alert('[ERRO] O passo não pode ser igual ou menor a 0 (zero). ')
        res.innerHTML
        fpasso == 1;
    } else {

        let i = Number(finicio);
        let f = Number(ffim);
        let p = Number(fpasso);

        res.innerHTML = 'Contando: '

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} 👉 `
        }
        res.innerHTML += ' 🏁🚩';
    }
}
