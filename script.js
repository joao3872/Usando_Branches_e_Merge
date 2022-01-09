function branch() {
    var resposta = document.querySelector('div#branch')

    texto = 'Branch é uma ramificação do seu projeto. Os repositórios no GitHub funcionam como uma árvore. Quando criamos um repositório, o mesmo é iniciado com a branch main.'

    parte2 = 'As próximas branches são secundárias, portanto, ramos da branch main.'

    resposta.style.display = 'block'
    resposta.innerHTML = `${texto} <br> ${parte2}`
}

function merge() {
    var resposta = document.querySelector('div#merge')

    texto = 'O comando git merge permite que você pegue as linhas de desenvolvimento independentes criadas pelo git branch, e as integre em uma ramificação única.'

    resposta.style.display = 'block'
    resposta.textContent = `${texto}`
}
