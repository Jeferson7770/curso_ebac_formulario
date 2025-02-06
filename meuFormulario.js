document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio real do formulário
    document.getElementById("mensagem").style.display = "block"; // Exibe a mensagem
    this.reset(); // Limpa os campos do formulário
});