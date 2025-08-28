console.log("UI: Interfaz de usuario cargada.");

function updateResult(message) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = message;
    
    // Remover clases anteriores
    resultElement.classList.remove('success', 'error', 'empty');
    
    // Aplicar clase apropiada según el mensaje
    if (message.startsWith('Error:')) {
        resultElement.classList.add('error');
    } else if (message.startsWith('Resultado:')) {
        resultElement.classList.add('success');
    } else {
        resultElement.classList.add('empty');
    }
}

function getInputValues() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    return { num1, num2, operation };
}

// Función para limpiar el resultado cuando se cambian los inputs
function setupInputListeners() {
    const inputs = ['num1', 'num2'];
    const operationSelect = document.getElementById('operation');
    
    inputs.forEach(id => {
        const input = document.getElementById(id);
        input.addEventListener('input', () => {
            const resultElement = document.getElementById("result");
            if (resultElement.textContent !== 'Ingresa los números y selecciona una operación') {
                resultElement.textContent = 'Ingresa los números y selecciona una operación';
                resultElement.classList.remove('success', 'error');
                resultElement.classList.add('empty');
            }
        });
    });
    
    operationSelect.addEventListener('change', () => {
        const resultElement = document.getElementById("result");
        if (resultElement.textContent !== 'Ingresa los números y selecciona una operación') {
            resultElement.textContent = 'Ingresa los números y selecciona una operación';
            resultElement.classList.remove('success', 'error');
            resultElement.classList.add('empty');
        }
    });
}

// Configurar listeners cuando se carga la página
document.addEventListener('DOMContentLoaded', setupInputListeners);