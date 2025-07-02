const parceiros = []

async function getParceiros() {
    try {
        const response = await fetch('https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        parceiros.push(...data);
        renderizaParceiros(); // Chame a função de renderização aqui!
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function renderizarParceiros() {
    const container = document.querySelector('.container-principal');
    container.innerHTML = `
        <h2>Parceiros</h2>
        <form>
            <input type="text" placeholder="Pesquisar parceiro" class="input-pesquisa">
            <button type="submit" class="button-pesquisa">Pesquisar</button>
        </form>
    `; // Mantém o título e o formulário

    parceiros.forEach(parceiro => {
        const card = document.createElement('div');
        card.className = 'card-parceiro';
        card.innerHTML = `
            <img class="card-avatar" src="${parceiro.avatar || '#'}" alt="${parceiro.nome}" title="${parceiro.nome}">
            <p class="card-nome">${parceiro.nome}</p>
            <div class="card-info">
                <span class="card-bairro">${parceiro.bairro}</span>
                <span class="card-data">${new Date(parceiro.createdAt).toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                })}</span>
            </div>
            <button class="card-button">Detalhes</button>
        `;
        container.appendChild(card);
    });
}