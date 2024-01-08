
document.addEventListener('DOMContentLoaded', async function() {
    const api = new Api()
    const images = new Images()
    let result = []
    // const fullImages = new FullImages()

    const formEl = document.querySelector('form')
    const showMore = document.getElementById('show-more-button')

    result = await api.searchImagesAPI(api.inputEl.value)

    console.log(result)

    images.addImages(result, api.searchResults, api.page)

    // formEl.addEventListener('submit', (event) =>{
    //     try {
    //         event.preventDefault()
    //         api.page = 1
    //         api.searchImagesAPI(inputEl.value)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // })
    
    //Agrega el evento al botón
    showMore.addEventListener('click', async () => {
        try {
            api.page++
            result = await api.searchImagesAPI(api.inputEl.value)
            images.addImages(result, api.searchResults, api.page)
            //images.addImages(result, api.searchResults, api.page)
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

