function calculate() {
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let imc = peso / (altura ** 2)
    let text = ''

    if (imc < 18.5) {
        text = 'Abaixo do peso'
    } else if (imc < 25) {
        text = 'Peso normal'
    } else if (imc < 30) {
        text = 'Acima do peso'
    } else if (imc < 35) {
        text = 'Obesidade Grau I'
    } else if (imc < 41) {
        text = 'Obesidade Grau II'
    } else {
        text = 'Obesidade Grau III'
    }

        document.getElementById('resultado').innerText = text
} 
