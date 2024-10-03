function calculadora(vitorias, derrotas){
    const saldoVitorias = vitorias - derrotas

    let nivel
    if (saldoVitorias < 10){
        nivel = 'Ferro'

    }else if(saldoVitorias >= 11 && saldoVitorias <=20){
        nivel = 'Bronze'

    }else if(saldoVitorias >= 21 && saldoVitorias <= 50){
        nivel = 'Prata'

    }else if(saldoVitorias >= 51 && saldoVitorias <= 80){
        nivel = 'Ouro'

    }else if(saldoVitorias >= 81 && saldoVitorias <= 90){
        nivel = 'Diamante'

    }else if(saldoVitorias >= 91 && saldoVitorias <= 100){
        nivel = 'Lendário'
    
    }else{
        nivel = 'Imortal'
    }

    return alert(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`)
}

vitorias = prompt('Digite a quantidade de vitorias')
derrotas = prompt('Digite a quantidade de derrotas')

calculadora(vitorias, derrotas)
