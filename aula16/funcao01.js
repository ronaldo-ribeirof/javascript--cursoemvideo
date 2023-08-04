let n = 11

function parimp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

function primo(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'composto'
        }
    }
    return 'primo'
}

let res1 = parimp(n)
let res2 = primo(n)

console.log(`Analisando o número ${n}...`)
console.log(`É um número ${res1}.`)
console.log(`É um número ${res2}.`)