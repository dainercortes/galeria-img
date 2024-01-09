document.addEventListener('DOMContentLoaded', async function() {
    const image = document.getElementById('image-change')
    
    let extractUrl = localStorage.getItem('search-img')
    //console.log(extractUrl)
    image.src = extractUrl

})