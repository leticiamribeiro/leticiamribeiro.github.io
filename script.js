
document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada! Obrigada pelo contato.');
  this.reset();
});
