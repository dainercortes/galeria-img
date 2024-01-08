const formEl = document.querySelector('form')
var searchInput = document.getElementById('search-input')
const classes = document.querySelectorAll('.class')

function sendText(text) {
    localStorage.setItem('search-text', text)
}    

//Agrega el evento al formulario
formEl.addEventListener('submit', (event) => {
    try {
        event.preventDefault()
        sendText(searchInput.value)
        window.location.href = '../images.html'

    } catch (error) {
        console.log(error)
    }
})

classes.forEach((element) => {
    element.addEventListener('click', () => {
        try {
            sendText(element.textContent)
        } catch (error) {
            console.log(error)
        }
    })
})