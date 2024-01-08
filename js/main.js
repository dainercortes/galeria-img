const input = localStorage.getItem('search-text')

document.addEventListener('DOMContentLoaded', async function() {
    localStorage.removeItem('search-text')
    
    const api = new Api()
    const images = new Images()
    // const fullImages = new FullImages()
    let result = []
    const formEl = document.querySelector('form')
    const showMore = document.getElementById('show-more-button')

    result = await api.searchImagesAPI(input)

    images.addImages(result, api.searchResults, api.page)

    // formEl.addEventListener('submit', async (event) =>{
    //     try {
    //         event.preventDefault()
    //         api.page = 1
    //         result = await api.searchImagesAPI(input)
    //         images.addImages(result, api.searchResults, api.page)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // })
    
    //Agrega el evento al botón
    showMore.addEventListener('click', async () => {
        try {
            api.page++
            result = await api.searchImagesAPI(input)
            images.addImages(result, api.searchResults, api.page)
        } catch (error) {
            console.log(error)
        }    
    })
    
    // //Carga pagina Index
    // async function loadIndex() {
    //     var result = api.searchImagesAPI('all')
    //     images.addImages(result, api.searchResults, api.page)
    // }
    
    // //Carga pagina imagenes
    // async function loadImages() {
    //     var extractText = localStorage.getItem('search-text')
    
    //     document.getElementById('search-input').value = extractText
    //     document.getElementById('text-search').textContent += extractText
    
    //     api.searchImagesAPI(extractText)
    // }
    
    // //Evento al cargar la pagina web 
    // window.onload = async function() {
    //     try {
    //         var pageName = window.location.pathname.split('/').pop();
    //         pageName == 'index.html' ? loadIndex() : loadImages()
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
})

