function Pessoa(nome, sobrenome, idade, email, endereco) {
    // Chaves/métodos públicos requerem o uso do this
    // Em funções construtoras não há a necessidade de separar as chaves por vírgula
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.email = email
    this.endereco = endereco

    this.getNomeCompleto = function() {
        console.log(`${this.nome} ${this.sobrenome}`)
    }
    

}

const p1 = new Pessoa('Eduardo', 'Fontenele', 21, 'eduardofontenaille@gmail.com', 'Q. 209 - Águas Claras')
p1.getNomeCompleto()

