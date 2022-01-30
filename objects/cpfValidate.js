validateCPF = function(sentCPF) {

    Object.defineProperty(this, 'cleanCPF', {
        get: function() {
            return sentCPF.replace(/\D+/g, '')
        }
    })

}

validateCPF.prototype.validate = function() {
    if(typeof this.cleanCPF === 'undefined') return false
    if(this.cleanCPF.length !== 11) return false
    if(this.isASequence() === true) return false

    const cpfParcial = this.cleanCPF.slice(0, -2)
    const digito1 = this.createDigit(cpfParcial)
    const digito2 = this.createDigit(cpfParcial + digito1)
    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cleanCPF
}

validateCPF.prototype.createDigit = function(cpfParcial) {

    let arrayCpf = Array.from(cpfParcial);
    
    let regressivo = arrayCpf.length + 1;

    let total = arrayCpf.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--
        return ac
    }, 0)
   
    let digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)

}

validateCPF.prototype.isASequence = function() {
    const sequencia = this.cleanCPF[0].repeat(this.cleanCPF.length)
    return sequencia === this.cleanCPF
}

const cpf = new validateCPF('049.232.440-97')

if(cpf.validate()) {
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}
