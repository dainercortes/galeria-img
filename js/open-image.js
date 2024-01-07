// export async function openDoor() {
//     var extractImg = localStorage.getItem('url-image')

//     if(extractImg == null) {
//         document.getElementById('full-image').src = extractImg
//     }
// }


// const btnClose = document.getElementById('btn-close')
// const fullImage = document.getElementById('full-image')

// btnClose.addEventListener('click', () => {
//     const divOculto = document.getElementById('contenedor-frame')

//     divOculto.style.display = 'none'
// })

// export function toggleDiv(url) {

//     console.log(url)
//     const divOculto = document.getElementById('contenedor-frame')
    

//     if (divOculto.style.display == 'none') {
//         divOculto.style.display = 'flex'

//         fullImage.style.display = 'none'

//         fullImage.src = url     
//     } else {
//         divOculto.style.display = 'none'
//     }
// }