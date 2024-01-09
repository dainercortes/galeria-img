class FullImages {
    
    toggleDiv() {
        const divOculto = document.getElementById('contenedor-frame')

        if (divOculto.style.display != 'flex') {
            localStorage.setItem('global', true)
            divOculto.style.display = 'flex' 
               
        } else {
            divOculto.style.display = 'none'
        }
    }   
}

