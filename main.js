function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.comprimenta = function(){
        console.log(this.nome + " diz oi");
    }
}

function Nacionalidade(nome, idade, pais, idioma) {
    this.pais = pais;
    this.idioma = idioma;

    Pessoa.call(this, nome, idade);
}

function Funcionario(nome, idade, cargo) {
    this.cargo = cargo;

    Pessoa.call(this, nome, idade);
}

const pessoa1 = new Pessoa("Carlos", 30);
const nacionalidade1 = new Nacionalidade("Nakamoto", 27, "Japao", "Japones");
const funcionario1 = new Funcionario("Rafael", 20, "Eletricista");