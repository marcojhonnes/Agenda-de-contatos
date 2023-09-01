const form = document.getElementById('form-atividade');

const atividades = [];
const telefone = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaAgenda();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-usuario');
    const inputNumero = document.getElementById('telefone-usuario');

if (atividades.includes(inputNomeAtividade.value)) {
    alert(`O usuario: ${inputNomeAtividade.value} já está cadastrado!`);
} else {
    atividades.push(inputNomeAtividade.value);
    telefone.push(parseFloat(inputNumero.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';
    linhas += linha;
}

inputNomeAtividade.value ='';
inputNumero.value = '';
}

function atualizaAgenda() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
