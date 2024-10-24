const participantes = [];

function renderizarParticipantes() {
    const container = document.getElementById('participantes');
    container.innerHTML = ''; // Limpa a lista anterior
    participantes.forEach((participante, index) => {
        const div = document.createElement('div');
        div.className = 'evento';
        div.innerHTML = `
            <p>${participante.nome} (${participante.email})</p>
            <button onclick="removerParticipante(${index})">Excluir</button>
        `;
        container.appendChild(div);
    });
}

function removerParticipante(index) {
    participantes.splice(index, 1); // Remove o participante da lista
    renderizarParticipantes(); // Atualiza a exibição
}

document.getElementById('voltar').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redireciona para a página inicial
});

document.getElementById('form-participante').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    if (nome && email) {
        participantes.push({ nome, email });
        renderizarParticipantes();
        this.reset(); // Limpa o formulário
    }
});

document.addEventListener('DOMContentLoaded', renderizarParticipantes);
