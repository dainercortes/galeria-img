const formEl = document.querySelector('form')

function enviarTexto() {
    var text = document.getElementById('search-input').value

    localStorage.setItem('search-text', text)

    window.location.href = '../images.html'
}

//Agrega el evento al formulario
formEl.addEventListener('submit', (event) => {
    try {
        enviarTexto()
        window.location.href = '../images.html'
    } catch (error) {
        console.log(error)
    }
})