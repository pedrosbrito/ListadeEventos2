const eventos = [
    {
        id: 1,
        titulo: "Show de Rock",
        data: "2024-11-10",
        local: "Estádio Municipal",
        descricao: "Um grande show com bandas locais."
    },
    {
        id: 2,
        titulo: "Feira de Artesanato",
        data: "2024-11-15",
        local: "Praça Central",
        descricao: "Venha conhecer produtos artesanais incríveis!"
    },
        {
            id: 1,
            titulo: "Show de Rock",
            data: "2024-11-10",
            local: "Estádio Municipal",
            descricao: "Um grande show com bandas locais."
        },
        {
            id: 2,
            titulo: "Feira de Artesanato",
            data: "2024-11-15",
            local: "Praça Central",
            descricao: "Venha conhecer produtos artesanais incríveis!"
        },
        {
            id: 3,
            titulo: "Palestra sobre Sustentabilidade",
            data: "2024-11-20",
            local: "Auditório da Universidade",
            descricao: "Discussão sobre práticas sustentáveis no dia a dia."
        },
        {
            id: 4,
            titulo: "Festival de Cervejas Artesanais",
            data: "2024-11-25",
            local: "Parque da Cidade",
            descricao: "Venha degustar as melhores cervejas artesanais da região."
        },
        {
            id: 5,
            titulo: "Cineclube: Clássicos do Cinema",
            data: "2024-12-01",
            local: "Cine Teatro",
            descricao: "Exibição de filmes clássicos e debate após a sessão."
        },
        {
            id: 6,
            titulo: "Corrida de Rua",
            data: "2024-12-05",
            local: "Praça do Pôr do Sol",
            descricao: "Participe da corrida de 5km em um cenário lindo."
        },
        {
            id: 7,
            titulo: "Oficina de Fotografia",
            data: "2024-12-10",
            local: "Centro Cultural",
            descricao: "Aprenda técnicas de fotografia com profissionais."
        },
        {
            id: 8,
            titulo: "Feira do Livro",
            data: "2024-12-15",
            local: "Biblioteca Municipal",
            descricao: "Encontre livros de diversos gêneros com preços especiais."
        },
        {
            id: 9,
            titulo: "Festival Gastronômico",
            data: "2024-12-20",
            local: "Centro da Cidade",
            descricao: "Experimente pratos de diversas culturas e cozinhas."
        }
    ];


function renderizarEventos() {
    const container = document.getElementById('eventos');
    eventos.forEach(evento => {
        const div = document.createElement('div');
        div.className = 'evento';
        div.innerHTML = `
            <h2>${evento.titulo}</h2>
            <p><strong>Data:</strong> ${evento.data}</p>
            <p><strong>Local:</strong> ${evento.local}</p>
            <p>${evento.descricao}</p>
            <button onclick="verParticipantes(${evento.id})">Ver Participantes</button>
        `;
        container.appendChild(div);
    });
}

function verParticipantes(eventoId) {
    // Simulando a navegação para a página de participantes
    window.location.href = `participantes.html?eventoId=${eventoId}`;
}

document.addEventListener('DOMContentLoaded', renderizarEventos);
