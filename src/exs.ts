class Pessoa {
    constructor(public nome: string, readonly idade: number) {}
}

const henrique = new Pessoa('henrique', 23);
const maria = new Pessoa('maria', 20);
const joana = new Pessoa('joana', 17);

const pessoas = [henrique, maria, joana];
const copia = [...pessoas];
copia[0].nome = 'henrique augusto';
console.log(pessoas);
