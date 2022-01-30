function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,

        fala(assunto = 'qualquer coisa') {
            return `${nome} está falando ${assunto}`
        },

        peso,
        altura,

        // get faz com que a função finga ser um atributo
        get getInfosAbout() {
            const nomeCompleto = `${nome} ${sobrenome}`
            const pessoaPeso = peso
            const pessoaAltura = altura
            return `Nome: ${nomeCompleto}
            Peso: ${pessoaPeso} kg
            Altura: ${pessoaAltura}m`
        },

        imc() {
            const indice = peso / altura ** 2
            return 'IMC = ' + indice.toFixed(2)
        },

        // Getter
        get nomeInteiro() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        }
    }
}

function criarCarro(modelo, velMaxima = 250, ano, preco) {
    return {
        modelo,
        velMaxima,
        ano,
        preco,
        velocidadeAtual: 0,
        endereco: {
            
        },

        acelerar() {
            let delta = 20
            if(this.velocidadeAtual < this.velMaxima) {
               console.log(this.velocidadeAtual += delta)
            } else {
                console.log('Não é mais possível acelerar')
            }
        }
    }
}

const VolvoXC90 = criarCarro('Volvo XC90', 180, 2022, 484000)
console.log(VolvoXC90)
VolvoXC90.acelerar()
console.log(VolvoXC90)


