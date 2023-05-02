

const movies = document.querySelector(".movies")
const movies_block = document.querySelector(".movies-block")
const BASE_URL = 'https://api.noroff.dev/api/v1'
const ALL_PRODUCT = '/square-eyes'

async function fetchdata() {
    try {
        const response = await fetch(BASE_URL + ALL_PRODUCT);
    const data = await response.json();
    return data;

    } catch (error) {
        console.error(error);
    }
    
}


async function renderHTml() {
    const products = await fetchdata();
    console.log({products})
    console.log({html: movies_block.innerHTML})
    movies_block.innerHTML = '';
    products.forEach(function (element, index) {
        movies_block.innerHTML += `
        <a href="view.html?id=${element.id}"><img src ="${element.image}"alt =""></a>
        
        `
    })
}

renderHTml()
