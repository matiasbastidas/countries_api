const listaPaises = document.getElementById("paises")
let paises = []

const fetchPaises = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("Error:", err))
    console.log('hola2')
}


listaPaises.addEventListener('change', mostrarPaises)

const mostrarPaises = () => {
    
}



console.log(fetchPaises()[data].capital[0])
