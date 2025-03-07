const alunos = [
    { nome: 'Paula', nota: 10 },
    { nome: 'Bruno', nota: 6 },
    { nome: 'Letiacia', nota: 2 },
    { nome: 'Carlos', nota: 4 },
    { nome: 'Lucas', nota: 7 }
];

const aprovados = alunos.filter(function(item){
    return item.nota >= 6;
})

console.log(aprovados)