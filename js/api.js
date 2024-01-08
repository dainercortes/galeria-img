class Api {
    #accessKey = 'q4pHLQV40L2hzlr-OO9Woc0MUu8vagzcAqtJg-At8oY'

    searchResults = document.querySelector('.search-results')

    page = 1;

    //Busca las imagenes en la api
    async searchImagesAPI(inputData) {
        try {              
            inputData === undefined ? inputData = 'all' : false
            inputData === '' ? inputData = 'all' : false
            inputData === null ? inputData = 'all' : false
             
            const url = `https://api.unsplash.com/search/photos?page=${this.page}&query=${inputData}&client_id=${this.#accessKey}`
            const response = await fetch(url)
            const data = await response.json()

            const results = data.results

            this.page === 1 ? this.searchResults.innerHTML = '' : false   

            return results
        } catch (error) {
           console.log(error) 
        }   
    }
}