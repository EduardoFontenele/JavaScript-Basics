class CPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            writable: false,
            enumerable: true,
            configurable: false
        })
    }

    isASequence() {
        let sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        if(sequencia === this.cpfLimpo) return true
    }

    static gerarDigito(cpfLimpo) {
        let cpfArray = Array.from(cpfLimpo.slice(0, -2))
        let contadorRegressivo = (cpfArray.length + 1)
        let total = 0
        for(let numeros of cpfArray) {
            total += Number(numeros) * contadorRegressivo
            contadorRegressivo--
        }
        
        let digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }

    validar() {
        if(this.cpfLimpo.length !== 11) return 'CPF inválido'
        if(this.isASequence()) return 'CPF inválido'
        let digito1 = CPF.gerarDigito(this.cpfLimpo)
        let digito2 = CPF.gerarDigito(this.cpfLimpo + digito1)
        let novoCpf = (this.cpfLimpo.slice(0, -2) + digito1 + digito2)
        if(novoCpf === this.cpfLimpo) {
            return 'CPF válido'
        } else {
            return 'CPF inválido'
        } 
    }
}

let cpf1 = new CPF('049.232.440-97')
let cpf2 = new CPF('111.111.111-11')
let cpf3 = new CPF('aff tá em ingreis')
console.log(cpf1.validar())
console.log(cpf2.validar())
console.log(cpf3.validar())

