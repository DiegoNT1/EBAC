function calcularSoma(a, b) {
    return a + b;
}

// Exemplo de uso da função
let resultado = calcularSoma(3, 5);
console.log(`A soma de 3 e 5 é: ${resultado}`);

// Exemplo de manipulação do DOM (Document Object Model)
document.addEventListener('DOMContentLoaded', function() {
    // Selecionando um elemento pelo ID e alterando seu conteúdo
    let elemento = document.getElementById('exemplo');
    elemento.textContent = 'Este texto foi alterado pelo JavaScript.';
});