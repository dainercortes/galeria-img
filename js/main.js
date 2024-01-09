let input = localStorage.getItem('search-text')

document.addEventListener('DOMContentLoaded', async function() {
    
    var pageName = window.location.pathname.split('/').pop();
    console.log(pageName, ':)')
    pageName == 'index.html' ? input = '' : false

    const api = new Api()
    const images = new Images()
    // const fullImages = new FullImages()
    let result = []
    const formEl = document.querySelector('form')
    const showMore = document.getElementById('show-more-button')

    result = await api.searchImagesAPI(input)

    images.addImages(result, api.searchResults, api.page)
    
    //Agrega el evento al botón
    showMore.addEventListener('click', async () => {
        try {
            input = localStorage.getItem('search-text')
            api.page++
            result = await api.searchImagesAPI(input)
            console.log(input)
            images.addImages(result, api.searchResults, api.page)
        } catch (error) {
            console.log(error)
        }    
    })
})

function closeDiv() {
    const divOculto = document.getElementById('contenedor-frame')
    const iframe = document.getElementById('container-html')
    
    if (divOculto.style.display == 'flex') {
        divOculto.style.display = 'none'
        iframe.src = null
    }
}