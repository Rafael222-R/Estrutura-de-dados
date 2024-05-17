
 class Aluno {
    constructor(nome, nota, status) {
    this.nome = nome;
    this.nota = nota;
    this.status = status;
    }
    }
    class ListaDeChamada {
    constructor() {
    this.lista = [];
    }
    append(aluno) {
    if (this.lista.length < 40) {
    this.lista.push(aluno);
   } else {
    console.log("Limite de 40 alunos atingido.");
    }
    }
    insert(aluno, posicao) {
    this.lista.splice(posicao, 0, aluno);
    }
    getElementAt(index) {
    return this.lista[index] || undefined;
    }
    remove(nome) {
    let index = this.lista.findIndex(aluno => aluno.nome === nome);
    if (index !==-1) {
    this.lista.splice(index, 1);
    }
    }
    removeAt(posicao) {
    this.lista.splice(posicao, 1);
    }
    indexOf(nome) {
    return this.lista.findIndex(aluno => aluno.nome === nome);
    }
    isEmpty() {
    return this.lista.length === 0;
    }
    size() {
    return this.lista.length;
    }
    getHead() {
    return this.lista[0];
    }
    toString() {
    return this.lista.map(aluno => `${aluno.nome}, ${aluno.nota},
    ${aluno.status}`).join('\n');
    }
    ordenarPorNota() {
    this.lista.sort((a, b) => b.nota- a.nota);
    }
    apresentarRelacaoTotal() {
   this.lista.forEach(aluno => console.log(aluno.nome, aluno.nota,
    aluno.status));
    }
    alunosMatriculaAtiva() {
    let ativos = this.lista.filter(aluno => aluno.status === 'A');
    ativos.forEach(aluno => console.log(aluno.nome, aluno.nota));
    }
    }
    // Exemplo de uso:
    let listaDeChamada = new ListaDeChamada();
    listaDeChamada.append(new Aluno("Miguel", 8.9, "A"));
    listaDeChamada.append(new Aluno("Joana", 8.7, "A"));
    listaDeChamada.insert(new Aluno("Jonas", 9.3, "I"), 1);
    console.log(listaDeChamada.getElementAt(1));
    listaDeChamada.remove("Miguel");
    console.log(listaDeChamada.indexOf("Joana"));
    console.log(listaDeChamada.isEmpty());
    console.log(listaDeChamada.size());
    console.log(listaDeChamada.getHead());
    console.log(listaDeChamada.toString());
    listaDeChamada.ordenarPorNota();
    listaDeChamada.apresentarRelacaoTotal();
    listaDeChamada.alunosMatriculaAtiva();