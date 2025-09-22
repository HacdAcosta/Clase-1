function mostrarCuenta() {
      const limite = Number(document.getElementById('limite').value);
      if (isNaN(limite) || limite < 1) {
        document.getElementById('cuenta').textContent = 'Ingresa un número válido mayor o igual a 1.';
        return;
      }
      let resultado = '';
      for (let i = 1; i <= limite; i++) {
        resultado += i + (i < limite ? ', ' : '');
      }
      document.getElementById('cuenta').textContent = 'Cuenta: ' + resultado;
    }