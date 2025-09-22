const iniciarBtn = document.getElementById('iniciarBtn');
const resultadoParrafo = document.getElementById('resultado');

iniciarBtn.addEventListener('click', calcularPromedio);

function calcularPromedio() {
    const notas = [];
    let continuar = true;

    while (continuar) {
        let notaStr = prompt('Ingresa una nota (o escribe "fin" para terminar):');
        if (notaStr === null || notaStr.toLowerCase() === 'fin') {
            continuar = false;
        } else {
            let nota = parseFloat(notaStr);
            if (!isNaN(nota) && nota >= 0 && nota <= 100) {
                notas.push(nota);
            } else {
                alert('Por favor, ingresa una nota válida (un número entre 0 y 100).');
            }
        }
    }

    if (notas.length > 0) {
        let suma = 0;
        for (let i = 0; i < notas.length; i++) {
            suma += notas[i];
        }

        const promedio = suma / notas.length;
        const promedioFormateado = promedio.toFixed(2);

        let mensaje;
        if (promedio >= 70) {
            mensaje = `¡Felicidades! Tu promedio es ${promedioFormateado}. ¡Has APROBADO! 🎉`;
        } else {
            mensaje = `Tu promedio es ${promedioFormateado}. Lo siento, has REPROBADO. 😔`;
        }
        
        resultadoParrafo.textContent = mensaje;
    } else {
        resultadoParrafo.textContent = 'No ingresaste ninguna nota.';
    }
}
