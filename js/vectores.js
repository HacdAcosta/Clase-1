const nombres = [];

    function agregarNombre() {
      const input = document.getElementById('nombre');
      const valor = input.value.trim();
      if (valor) {
        nombres.push(valor);
        document.getElementById('listaNombres').textContent = 'Nombres: ' + nombres.join(', ');
        input.value = '';
        input.focus();
      } else {
        alert('Por favor, escribe un nombre.');
      }
    }