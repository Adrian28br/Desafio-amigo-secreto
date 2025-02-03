# Desafio-amigo-secreto
#document.addEventListener("DOMContentLoaded", () =>
/**
     * Seleciona os elementos do HTML pelo ID para interação no JavaScript.
     * - inputNome: Campo de entrada onde o usuário digita o nome do participante.
     * - listaParticipantes: Lista onde os nomes dos participantes serão exibidos.
     * - resultadoSorteio: Área onde o resultado do sorteio será mostrado.
     */
let participantes, é array para armazenar os nomes dos participantes

/**
     * Função que adiciona um nome à lista de participantes.
     * - Captura o valor digitado no input.
     * - Remove espaços em branco extras.
     * - Verifica se o nome não está vazio e se já não foi adicionado.
     * - Adiciona o nome ao array e atualiza a lista na tela.
     */
function adicionarAmigo() {
        const nome = inputNome.value.trim(); // Remove espaços desnecessários
        if (nome && !participantes.includes(nome)) {
            participantes.push(nome); // Adiciona o nome ao array
            atualizarLista(); // Atualiza a interface gráfica
            inputNome.value = ""; // Limpa o campo de entrada
        }
    }

    /**
     * Função para sortear um único nome da lista de participantes.
     * - Garante que há pelo menos um participante.
     * - Escolhe um nome aleatório do array e exibe na tela.
     */
    function sortearAmigo() {
        if (participantes.length < 1) {
            alert("Adicione pelo menos um participante para realizar o sorteio.");
            return;
        }
        
        let sorteado = participantes[Math.floor(Math.random() * participantes.length)]; // Escolhe um nome aleatório
        exibirResultado(sorteado); // Exibe o nome sorteado na tela
    }

    /**
     * Atualiza a lista de participantes exibida na interface.
     * - Remove a lista anterior para evitar duplicações.
     * - Percorre o array de participantes e cria um item para cada nome.
     */
    function atualizarLista() {
        listaParticipantes.innerHTML = "";
        participantes.forEach(nome => {
            const li = document.createElement("li"); // Cria um elemento de lista
            li.textContent = nome; // Define o nome do participante no item
            listaParticipantes.appendChild(li); // Adiciona à lista visual
        });
    }

    /**
     * Exibe o resultado do sorteio na tela.
     * - Remove resultados anteriores.
     * - Exibe o nome sorteado na interface.
     */
    function exibirResultado(sorteado) {
        resultadoSorteio.innerHTML = "";
        const p = document.createElement("p"); // Cria um elemento para exibir o resultado
        p.textContent = `O sorteado foi: ${sorteado}`; // Define o nome sorteado
        resultadoSorteio.appendChild(p); // Adiciona ao resultado na interface
    }

    /**
     * Torna as funções globais para que possam ser chamadas pelo HTML.
     * - O index.html usa os atributos onclick, então é necessário expor essas funções globalmente.
     */
    window.adicionarAmigo = adicionarAmigo;
    window.sortearAmigo = sortearAmigo;
});
