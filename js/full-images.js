class FullImages {
    toggleDiv(url) {
        const divOculto = document.getElementById('contenedor-frame')
        const fullImage = document.getElementById('full-image')
    
        if (divOculto.style.display == 'none') {
            divOculto.style.display = 'flex'
    
            fullImage.src = url
    
            //localStorage.setItem('url-image', url)
       
        } else {
            divOculto.style.display = 'none'
        }
    }
}