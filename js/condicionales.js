function evaluarNumero() {
  const num = Number(document.getElementById('numero').value);
  let mensaje = '';
  if (isNaN(num)) {
    mensaje = 'Por favor, introduce un número válido.';
  } else if (num > 0) {
    mensaje = 'El número es positivo.';
  } else if (num < 0) {
    mensaje = 'El número es negativo.';
  } else {
    mensaje = 'El número es cero.';
  }
  document.getElementById('resultado').textContent = mensaje;
}
