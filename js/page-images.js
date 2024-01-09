let extractText = localStorage.getItem('search-text')
const formEl = document.querySelector('form')



window.onload = function() {
    if(extractText != null) {
        changeData(extractText)
    }
}

//Cambia los datos
function changeData(extractText) {
    document.getElementById('search-input').value = extractText
    document.getElementById('text-search').textContent = "Resultados para: " + extractText
}

function enviarTexto() {
    var text = document.getElementById('search-input').value

    localStorage.setItem('search-text', text)
    extractText = text
}

formEl.addEventListener('submit', async (event) =>{

    const api = new Api()
    const images = new Images()

    try {
        event.preventDefault()
        enviarTexto()
        api.page = 1
        result = await api.searchImagesAPI(extractText)
        changeData(extractText)
        images.addImages(result, api.searchResults, api.page)
    } catch (error) {
        console.log(error)
    }
})