document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const btnEntrar = document.getElementById('btnEntrar');
    const loginForm = document.getElementById('loginForm');

    console.log(emailInput, senhaInput, btnEntrar, loginForm);


    // Função para verificar se os campos estão preenchidos
    function verificarCampos() {
        const emailValido = emailInput.value.trim() !== '';
        const senhaValida = senhaInput.value.trim() !== '';
        console.log(`Email válido: ${emailValido}, Senha válida: ${senhaValida}`);
        btnEntrar.disabled = !(emailValido && senhaValida);

    }

    // Adicionar event listeners aos campos de input
    emailInput.addEventListener('input', verificarCampos);
    senhaInput.addEventListener('input', verificarCampos);

    // Função para lidar com o submit do formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();
        
        if (email && senha) {
            // Salvar o email no localStorage
            localStorage.setItem('userEmail', email);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loginTime', new Date().toISOString());
            
            // Mostrar feedback visual
            btnEntrar.textContent = 'Entrando...';
            btnEntrar.disabled = true;
            
            // Simular um pequeno delay e redirecionar
            setTimeout(() => {
                // Redirecionar para a tela de listagem de parceiros
                // Como ainda não temos essa tela, vamos redirecionar para a página principal
                // mas você pode alterar o caminho conforme necessário
                window.location.href = 'listagem-parceiros.html'; // ou o caminho correto
                window.alert('Login realizado com sucesso!');
            }, 1000);
        }
    });

    // Verificação inicial do estado dos campos
    verificarCampos();

    // Adicionar funcionalidade de Enter nos campos
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            senhaInput.focus();
        }
    });

    senhaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !btnEntrar.disabled) {
            loginForm.dispatchEvent(new Event('submit'));
        }
    });
});

