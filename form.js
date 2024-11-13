// Validação simples no cliente
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio para validar antes

    let valid = true;

    // Limpar erros anteriores
    document.querySelectorAll('.error').forEach(function(error) {
        error.textContent = '';
    });

    // Validação do nome
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('name-error').textContent = 'Por favor, insira seu nome.';
        valid = false;
    }

    // Validação do e-mail
    const email = document.getElementById('email').value;
    if (!email.includes('@') || email.trim() === '') {
        document.getElementById('email-error').textContent = 'Por favor, insira um e-mail válido.';
        valid = false;
    }

    // Validação da mensagem
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('message-error').textContent = 'Por favor, insira uma mensagem.';
        valid = false;
    }

    // Validação de gênero
    const gender = document.getElementById('gender').value;
    if (gender === '') {
        document.getElementById('gender-error').textContent = 'Por favor, selecione seu gênero.';
        valid = false;
    }

    // Validação dos termos e condições
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('terms-error').textContent = 'Você precisa aceitar os termos e condições.';
        valid = false;
    }

    // Validação da senha
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('password-error').textContent = 'A senha deve ter pelo menos 8 caracteres.';
        valid = false;
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        document.getElementById('password-error').textContent = 'A senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número.';
        valid = false;
    }

    
    const confirmPassword = document.getElementById('confirm-password').value;
    if (confirmPassword !== password) {
        document.getElementById('confirm-password-error').textContent = 'As senhas não coincidem.';
        valid = false;
    }

    if (valid) {
        alert('Formulário enviado com sucesso!');
    }
});
