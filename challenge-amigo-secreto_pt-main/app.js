//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", () => {
    
    const inputNome = document.querySelector("#amigo");
    const listaParticipantes = document.querySelector("#listaAmigos");
    const resultadoSorteio = document.querySelector("#resultado");

    let participantes = [];

    function adicionarAmigo() {
        const nome = inputNome.value.trim(); 
        if (nome && !participantes.includes(nome)) {
            participantes.push(nome); 
            atualizarLista();
            inputNome.value = ""; 
        }
    }

    function sortearAmigo() {
        if (participantes.length < 1) {
            alert("Adicione pelo menos um participante para realizar o sorteio.");
            return;
        }
        
        let sorteado = participantes[Math.floor(Math.random() * participantes.length)]; 
        exibirResultado(sorteado); 
    }

    function atualizarLista() {
        listaParticipantes.innerHTML = "";
        participantes.forEach(nome => {
            const li = document.createElement("li"); 
            li.textContent = nome; 
            listaParticipantes.appendChild(li); 
        });
    }

    function exibirResultado(sorteado) {
        resultadoSorteio.innerHTML = "";
        const p = document.createElement("p"); 
        p.textContent = `O sorteado foi: ${sorteado}`; 
        resultadoSorteio.appendChild(p); 
    }

    window.adicionarAmigo = adicionarAmigo;
    window.sortearAmigo = sortearAmigo;
});
