
// const accessKey = 'q4pHLQV40L2hzlr-OO9Woc0MUu8vagzcAqtJg-At8oY'

// const formEl = document.querySelector('form')
// const inputEl = document.getElementById('search-input')
// const searchResults = document.querySelector('.search-results')
// const showMore = document.getElementById('show-more-button')

// let inputData = ''
// let page = 1;

// //Busca la imagen
// async function searchImages() {
//     try {
//         //inputData = inputEl.value;
            
//         inputData === '' ? inputData = 'all' : false

//         const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
//         const response = await fetch(url)
//         const data = await response.json()

//         console.log(data)
//         const results = data.results

//         page === 1 ? searchResults.innerHTML = '' : false   

//         addImages(results, searchResults)

//         return results
//     } catch (error) {
        
//     }
    
// }

// addImages(results, searchResults, page) {
//     try {
//         results.map((result) => {
//             const imageWrapper = document.createElement('div')
//             imageWrapper.classList.add('search-result') 

//             const image = document.createElement('img')
//             image.src = result.urls.small     
//             image.alt = result.alt_description
                
//             imageWrapper.classList.add(sizeImage(result.width, result.height));
    
//             // const imageLink = document.createElement('a')
//             //imageLink.href = result.urls.regular
    
//             const iconBookMark = document.createElement('i')
//             iconBookMark.classList.add('fa-solid')
//             iconBookMark.classList.add('fa-bookmark')
//             iconBookMark.classList.add('bookmark')
    
//             const iconHeart = document.createElement('i')
//             iconHeart.classList.add('fa-solid')
//             iconHeart.classList.add('fa-heart')
//             iconHeart.classList.add('heart')
    
//             const iconDownload = document.createElement('i')
//             iconDownload.classList.add('fa-solid')
//             iconDownload.classList.add('fa-download')
//             iconDownload.classList.add('download')
//             downloadImage(result, iconDownload)
    
//             imageWrapper.appendChild(image)
//             imageWrapper.appendChild(iconBookMark)
//             imageWrapper.appendChild(iconHeart)
//             imageWrapper.appendChild(iconDownload)

//             imageWrapper.addEventListener('click', () => 
//             {
//                 //toggleDiv(result.urls.regular)          
//             })

//             searchResults.appendChild(imageWrapper)
//         })
    
//         page++
    
//         searchResults.childElementCount > 0 ? showMore.style.display = 'block' : showMore.style.display = 'none'
//     } catch (error) {
        
//     }
// }


//  function toggleDiv(url) {
//     const divOculto = document.getElementById('contenedor-frame')
//     const fullImage = document.getElementById('full-image')

//     if (divOculto.style.display == 'none') {
//         divOculto.style.display = 'flex'

//         fullImage.src = url

//         localStorage.setItem('url-image', url)
   
//     } else {
//         divOculto.style.display = 'none'
//     }
// }



// //Descargar imagen
// function downloadImage(result, iconDownload) {
//     try {
//         iconDownload.addEventListener('click', async () => {
//             try {
//                 const response = await fetch(result.urls.full)
//                 const blob = await response.blob()
    
//                 const downloadLink = document.createElement('a')
//                 downloadLink.href = window.URL.createObjectURL(blob)
//                 downloadLink.download = 'image.jpg'
    
//                 downloadLink.click()
//             } catch (error) {
//                 console.log('No se pudo descargar la imagen', error)
//             }
//         })
//     } catch (error) {
        
//     }    
// }


// //Agrega el evento al formulario
// export function addEventForm(text) {
//     searchImages(text)
// }

// formEl.addEventListener('submit', (event) => {
//     try {
//         inputData = inputEl.value
//         event.preventDefault()
//         page = 1
//         searchImages()
//     } catch (error) {
        
//     }
// })

// //Agrega el evento al botón
// showMore.addEventListener('click', () => {
//     try {
//         searchImages()
//     } catch (error) {
        
//     }    
// })

// //Carga pagina Index
// async function loadIndex() {
//     // inputData = 'featured'
//     // const result = await searchImages()
//     // addImagesSlider(result)
//     inputData = 'all'
//     searchImages()
// }

// //Carga pagina imagenes
// async function loadImages() {
//     var extractText = localStorage.getItem('search-text')

//     document.getElementById('search-input').value = extractText
//     document.getElementById('text-search').textContent += extractText

//     inputData = extractText

//     searchImages()
// }

// //Evento al cargar la pagina web 
// window.onload = async function() {
//     try {
//         var pageName = window.location.pathname.split('/').pop();
//         pageName == 'index.html' ? loadIndex() : loadImages()
        
//         await openDoor()
//     } catch (error) {

//     }
// }