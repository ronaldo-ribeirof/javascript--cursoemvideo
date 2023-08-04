function tabuada() {
    let tab = document.getElementById('seltab');
    let txtn = document.getElementById('txtn');
    
    if (txtn.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número.');
    } else {
        let n = Number(txtn.value);
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
        }
    }
}