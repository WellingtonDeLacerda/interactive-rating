let labels = document.getElementsByTagName('label')
let radios = document.querySelectorAll('input.radio')
let result = document.getElementById('result')
let display1 = document.getElementById('display1')
let display2 = document.getElementById('display2')

// Garante que a tela de agradecimento comece oculta
display2.style.display = 'none'

// Verifica se algum radio está marcado
function nenhumSelecionado(r) {
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            return false
        }
    }
    return true
}

// Adiciona comportamento aos labels (destaque do selecionado)
for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", () => {
        // Reseta todos os estilos
        for (let j = 0; j < labels.length; j++) {
            labels[j].style.backgroundColor = "var(--Grey950)"
            labels[j].style.color = "var(--Grey500)"
        }

        // Aplica destaque no label clicado
        labels[i].style.backgroundColor = "white"
        labels[i].style.color = "black"
    })
}

// Lógica do botão enviar
function enviar() {
    event.preventDefault() // Impede o formulário de recarregar a página

    if (nenhumSelecionado(radios)) {
        alert("Preencha os dados")
    } else {
        // Descobre qual foi a nota escolhida
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                result.innerText = radios[i].value
                break
            }
        }

        // Alterna as telas
        display1.style.display = 'none'
        display2.style.display = 'block'
    }
}