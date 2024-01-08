const formEl = document.querySelector('form')

formEl.addEventListener('submit', (event) => {
    try { 
        document.getElementById('text-search').textContent += document.getElementById('search-input').value
    } catch (error) {
        
    }
})

