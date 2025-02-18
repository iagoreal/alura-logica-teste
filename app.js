let listaAmigosParaSortear = [];
let nomeAmigo


function adicionarAmigo() {
    nomeAmigo = document.querySelector(".input-name").value;

    if (nomeAmigo == "") {
        alert("digite um nome válido");

    } else {
        listaAmigosParaSortear.push(nomeAmigo);
        const container = document.getElementById("listaAmigos");
        const li = document.createElement("li");
        li.textContent = nomeAmigo;
        container.appendChild(li);
        document.querySelector(".input-name").value = "";
        console.log(listaAmigosParaSortear);

    }
}


