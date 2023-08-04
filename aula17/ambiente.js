let amigo = {nome: 'José', 
sexo: 'M', 
peso: '84.5',
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

console.log(`Meu amigo ${amigo.nome} pesa ${amigo.peso} Kg.`)