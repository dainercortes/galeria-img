// Función que se ejecutará cada segundo
function miFuncion() {
    const enlace = localStorage.getItem('search-img')
    const imagen = document.getElementById('image-change')
    const global = JSON.parse(localStorage.getItem('global'))  
    // console.log(global)
    // console.log(imagen.src)
    // console.log(enlace)
    if (global === true && enlace != imagen.src) {   
        imagen.src = ''      
        imagen.src = enlace
        localStorage.removeItem('search-img')
        localStorage.setItem('global', false)
        console.log(':)')
    }

    
    // Puedes realizar acciones adicionales aquí
}

// Configurar el temporizador para que se ejecute cada segundo (1000 milisegundos)
var temporizador = setInterval(miFuncion, 4);

// Puedes detener el temporizador después de cierto tiempo si es necesario
// setTimeout(function() {
//     clearInterval(temporizador);
// }, 5000); // Detener después de 5 segundos