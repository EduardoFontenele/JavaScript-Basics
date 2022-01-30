// Superclass
function Conta(agencia, conta, saldo = 0) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}


Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log('Saldo insuficiente:')
        this.verSaldo()
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Agência/conta: ${this.agencia}/${this.conta} Saldo: R$${this.saldo}`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if((this.saldo + this.limite) < valor) {
        console.log('Saldo insuficiente:')
        this.verSaldo()
        return
    }

    this.saldo -= valor
    this.verSaldo()
}


const conta2 = new ContaCorrente(11, 22, 0, 100)
console.log(conta2)
conta2.depositar(50)
conta2.sacar(150)