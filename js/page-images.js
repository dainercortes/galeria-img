const formEl = document.querySelector('form')
const extractText = localStorage.getItem('search-text')

window.onload = function() {
    
    if(extractText != null) {
        changeData(extractText)
    }
}

//Cambia los datos
function changeData(extractText) {
    document.getElementById('search-input-images').value = extractText
    document.getElementById('text-search').textContent += extractText
}

function enviarTexto() {
    var text = document.getElementById('search-input-images').value

    localStorage.setItem('search-text', text)
    console.log(text)
}   

//Agrega el evento al formulario
formEl.addEventListener('submit', (event) => {
    try {
        event.preventDefault()
        enviarTexto()
    } catch (error) {
        console.log(error)
    }
})
// document.addEventListener('DOMContentLoaded', function() {
//     const api = new Api()
//     const images = new Images()
//     const fullImages = new FullImages()

//     const formEl = document.querySelector('form')
//     const showMore = document.getElementById('show-more-button')
    
//     formEl.addEventListener('submit', (event) =>{
//         try {
//             event.preventDefault()
//             api.page = 1
//             api.searchImagesAPI(inputEl.value)
//         } catch (error) {
            
//         }
//     })

//     //Agrega el evento al botón
//     showMore.addEventListener('click', () => {
//         try {
//             api.searchImagesAPI()
//         } catch (error) {
            
//         }    
//     })
// })


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
//         loadImages()  
//     } catch (error) {

//     }
// }