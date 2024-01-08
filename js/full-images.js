class FullImages {
    
    toggleDiv() {
        const divOculto = document.getElementById('contenedor-frame')
        const iframe = document.getElementById('container-html')

        console.log(divOculto.style.display)

        if (divOculto.style.display != 'flex') { 
            iframe.src = '../contenedor-img.html'      
            divOculto.style.display = 'flex'      
        } else {
            divOculto.style.display = 'none'
        }
    }   
}

