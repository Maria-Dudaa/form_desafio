// Validação simples
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio para validar antes

    let valid = true;

    // Limpar erros 
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

    // Se tudo estiver ok, você pode enviar o formulário para o servidor 
    if (valid) {
        alert('Formulário enviado com sucesso!');
    }
});
