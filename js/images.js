class Images {
    showMore = document.getElementById('show-more-button')

    //Inserta la imagen en el html
    addImages(results, searchResults, page) {
        try {
            results.map((result) => {
                const imageWrapper = document.createElement('div')
                imageWrapper.classList.add('search-result') 

                const image = document.createElement('img')
                image.src = result.urls.small     
                image.alt = result.alt_description
                    
                imageWrapper.classList.add(this.sizeImage(result.width, result.height));
        
                // const imageLink = document.createElement('a')
                //imageLink.href = result.urls.regular
        
                const iconBookMark = document.createElement('i')
                iconBookMark.classList.add('fa-solid')
                iconBookMark.classList.add('fa-bookmark')
                iconBookMark.classList.add('bookmark')
        
                const iconHeart = document.createElement('i')
                iconHeart.classList.add('fa-solid')
                iconHeart.classList.add('fa-heart')
                iconHeart.classList.add('heart')
        
                const iconDownload = document.createElement('i')
                iconDownload.classList.add('fa-solid')
                iconDownload.classList.add('fa-download')
                iconDownload.classList.add('download')
                this.downloadImage(result, iconDownload)
        
                imageWrapper.appendChild(image)
                imageWrapper.appendChild(iconBookMark)
                imageWrapper.appendChild(iconHeart)
                imageWrapper.appendChild(iconDownload)

                // imageWrapper.addEventListener('click', () => 
                // {
                //     //toggleDiv(result.urls.regular)          
                // })

                searchResults.appendChild(imageWrapper)
            })
        
            page++
        
            searchResults.childElementCount > 0 ? this.showMore.style.display = 'block' : this.showMore.style.display = 'none'
        } catch (error) {
            console.log(error)
        }
    }

    //Calcula el ancho y alto de la imagen
    sizeImage(imageWidth, imageHeight) {
        try {
            let width = imageWidth
            let height = imageHeight
            let clase

            width < height ? clase = 'vertical' : false

            return clase
        } catch (error) {
            console.log(error) 
        } 
    }

    //Descargar imagen
    downloadImage(result, iconDownload) {
        try {
            iconDownload.addEventListener('click', async () => {
                try {
                    const response = await fetch(result.urls.full)
                    const blob = await response.blob()
        
                    const downloadLink = document.createElement('a')
                    downloadLink.href = window.URL.createObjectURL(blob)
                    downloadLink.download = 'image.jpg'
        
                    downloadLink.click()
                } catch (error) {
                    console.log('No se pudo descargar la imagen', error)
                }
            })
        } catch (error) {
            console.log(error)
        }    
    }
} 

