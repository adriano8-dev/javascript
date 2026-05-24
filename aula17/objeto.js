let amigo = {nome: 'Adriano',
sexo: 'M',
peso: 70.5,
engorda(p=0) {
    console.log('Engordou')
    this.peso += p
}
}

amigo.engorda(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)

