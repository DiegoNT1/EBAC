const form = document.getElementById('form-numeros');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const menssagemSucesso = `Sucesso. O numero B: <b>${b}</b> e maior que o nuemro A: <b>${a}</b>`;
    const menssagemErro = `Erro. O numero A: <b>${a}</b> deve ser menor que o numero B: <b>${b}</b>`;

    if (b > a) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = menssagemSucesso;
        containerMensagemSucesso.style.display = 'block';

      } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = menssagemErro;
        containerMensagemErro.style.display = 'block';
      }
    });