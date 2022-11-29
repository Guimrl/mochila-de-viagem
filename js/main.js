const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = evento.target.elements["nome"];
    const quantidade = evento.target.elements["quantidade"];
    criaElemento(nome.value, quantidade.value);

    nome.value = '';
    quantidade.value = '';
});

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const numItem = document.createElement("strong");
    numItem.innerHTML = quantidade;

    novoItem.appendChild(numItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

    localStorage.setItem("nome", nome);
    localStorage.setItem("quantidade", quantidade);
}