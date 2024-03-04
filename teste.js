class Animal{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        return 'Nome: ' + this.nome + '\n Idade: ' + this.idade;
    }
}

class Gato extends Animal{
    constructor(nome, idade, cor){
        super(nome, idade);
        this.cor = cor;
    }

    miar(){
        return 'Miauuuu!';
    }
}

//let animal1 = new Animal("Cachorro", 3);

//let animal2 = new Gato("Gato", 2, "Preto");

//console.log(animal1.descrever());
//console.log(animal2.descrever());

//console.log(animal2.miar());

class SomadorDeNotas{
    constructor(){
        this.somaNotas = 0;
    }

    adicionarNota(nota){
        this.nota = nota;
        this.somaNotas += nota;
    }

    verTotal(){
        return 'Nota Total: ' + this.somaNotas;
    }
}

let somador = new SomadorDeNotas();

//somador.adicionarNota(10);
//console.log(somador.verTotal());

class Funcionario{
    constructor(nome, idade, salarioBase){
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

    calcularSalario(){

    }
}

class Professor extends Funcionario{
    constructor(nome, idade, salarioBase, disciplina, horasAula){
        super(nome, idade, salarioBase);
        this.disciplina = disciplina;
        this.horasAula = horasAula;
    }   

    calcularSalario(){
        let salario = this.horasAula * this.salarioBase;

        return 'Salário: R$ ' + salario;
    }
}

let professor1 = new Professor("Carol", 28, 1000, "Matemática", 2);
let professor2 = new Professor("Pedro", 45, 1000, "Português", 1);

console.log(professor1.calcularSalario());
console.log(professor2.calcularSalario());