let listaAmigosParaSortear = [];
let nomeAmigo



function adicionarAmigo() {
    nomeAmigo = document.querySelector(".input-name").value;

    if (nomeAmigo == "") {
        alert("digite um nome válido");

    } else {
        listaAmigosParaSortear.push(nomeAmigo);
        const containerLista = document.getElementById("listaAmigos");
        const li = document.createElement("li");
        li.textContent = nomeAmigo;
        containerLista.appendChild(li);
        document.querySelector(".input-name").value = "";
    }
}


function sortearAmigo() {
    let limiteListaAmigos = listaAmigosParaSortear.length;

    let randomNumber = parseInt(Math.random() * limiteListaAmigos);
    let amigoSorteado = listaAmigosParaSortear[randomNumber];

    const containerWinner = document.getElementById("resultado");
    const li = document.createElement("li");
    li.textContent = amigoSorteado;
    containerWinner.appendChild(li);

}


