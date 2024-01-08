document.addEventListener('DOMContentLoaded', function() {
    const api = new Api()
    const images = new Images()
    const fullImages = new FullImages()

    const formEl = document.querySelector('form')
    const showMore = document.getElementById('show-more-button')
    
    formEl.addEventListener('submit', (event) =>{
        try {
            event.preventDefault()
            api.page = 1
            api.searchImagesAPI(inputEl.value)
        } catch (error) {
            
        }
    })

    //Agrega el evento al botón
    showMore.addEventListener('click', () => {
        try {
            api.searchImagesAPI()
        } catch (error) {
            
        }    
    })
})


//Carga pagina imagenes
async function loadImages() {
    var extractText = localStorage.getItem('search-text')

    document.getElementById('search-input').value = extractText
    document.getElementById('text-search').textContent += extractText

    inputData = extractText

    searchImages()
}




//Carga pagina Index
async function loadIndex() {
    // inputData = 'featured'
    // const result = await searchImages()
    // addImagesSlider(result)
    inputData = 'all'
    searchImages()
}


//Evento al cargar la pagina web 
window.onload = async function() {
    try {
        var pageName = window.location.pathname.split('/').pop();
        pageName == 'index.html' ? loadIndex() : loadImages()
        
        await openDoor()
    } catch (error) {

    }
}


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