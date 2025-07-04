const parceiros = []

async function getParceiros() {
    try {
        const response = await fetch('https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        parceiros.push(...data);
        renderizarParceiros(); // Chame a função de renderização aqui!
        
        
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function renderizarParceiros() {
    const container = document.querySelector('.container-principal');    
   
    parceiros.forEach(parceiro => {
        const card = document.createElement('div');
        card.className = 'card-parceiro';
        card.innerHTML = `
            <img src="/public/image/user.webp" alt="Logo Parceiro" class="avatar-img">
            <p class="card-nome">Nome do Parceiro: ${parceiro.nomeParceiro}</p>
            <div class="card-info">
                <span class="card-bairro">Bairro: ${parceiro.bairro}</span>
                <span class="card-data">Data de Criação: ${new Date(parceiro.dataCriacao).toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                })}</span>
            </div>
            <button class="btn-primary">Ver Detalhes</button>
        `;
        container.appendChild(card);
       
    });
}
getParceiros();

// Filtrar parceiros
const form = document.querySelector('form');
const inputPesquisa = document.querySelector('.input-pesquisa');
form.addEventListener('input', (event) => {
    event.preventDefault();
    const termoPesquisa = inputPesquisa.value.toLowerCase();
    const container = document.querySelector('.container-principal');
    container.innerHTML = ''; // Limpa os cards existentes
    if (termoPesquisa === '') {
        renderizarParceiros(); // Se o campo de pesquisa estiver vazio, renderiza todos os parceiros
        return;
    }
    // Filtra os parceiros com base no termo de pesquisa

    parceiros.filter(parceiro => parceiro.nomeParceiro.toLowerCase().includes(termoPesquisa) || parceiro.bairro.toLowerCase().includes(termoPesquisa))
        .forEach(parceiro => {
            const card = document.createElement('div');
            card.className = 'card-parceiro';
            card.innerHTML = `
                <img src="/public/image/user.webp" alt="Logo Parceiro" class="avatar-img">
                <p class="card-nome">Nome do Parceiro: ${parceiro.nomeParceiro}</p>
                <div class="card-info">
                    <span class="card-bairro">Bairro: ${parceiro.bairro}</span>
                    <span class="card-data">Data de Criação: ${new Date(parceiro.dataCriacao).toLocaleDateString('pt-BR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'
                    })}</span>
                </div>
                <button class="btn-primary">Ver Detalhes</button>
            `;
            container.appendChild(card);
        });
});

 // Verificar se o usuário está logado
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const userEmail = localStorage.getItem('userEmail');

        if (!isLoggedIn || !userEmail) {
            window.location.href = 'login-page.html';
        } else {
            document.getElementById('userEmail').textContent = userEmail;
        }

        function logout() {
            localStorage.removeItem('userEmail');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('loginTime');
            window.location.href = 'login-page.html';
        }

       