function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(4));

// 5! = 5 x 4 x 3 x 2 x 1 = 120
/* o fat precisa ser 1 antes para que ele possa receber o número e fazer a 1°
operação. Ex.(3) fat = 1 (fat) * 3 (c). A partir dessa 1° que se começa a fatorar
de fato. fat = 3 (fat) * 2 (c-1). E assim por diante */