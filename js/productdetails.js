/*const BASE_URL = 'https://api.noroff.dev/api/v1';
const ALL_PRODUCT_URL = '${Base_URL}/square-eyes';

async function fetchdata() {
    const response = await fetch(ALL_PRODUCT_URL);
    const data = await response.json();
    return data;
}

fetchdata() .then(data=> console.log(data));*/

/*const url = "https://api.noroff.dev/api/v1/square-eyes/b9e4edb1-e798-45e3-9c46-f7cd75b9326f";
const product = document.querySelector (".product");


async function fetchmovie(){
    const response = await fetch(url);
    const details = await response.json();

    product.innerHTML =(details);
    return details;
    
}
fetchmovie() .then(details=> console.log(details));*/
const mainElement = document.querySelector(".product")
const querystring = document.location.search;
console.log({querystring});
const params = new URLSearchParams(querystring);
const id = params.get('id');

const BASE_URL = 'https://api.noroff.dev/api/v1';
const Product_detail = BASE_URL + "/square-eyes/" + id;


async function fetchdata() {
    const response = await fetch(Product_detail);
    const data = await response.json();
    console.log(data)
    return data;
}
fetchdata();

async function renderHTml() {
    const data = await fetchdata();
    const mainElement = document.querySelector(".product");
    mainElement.innerHTML = `
    <div id="details">
        <h1> ${data.title}</h1>
        <p> ${data.description}</p>
        <p> ${data.genre}</p>
        <p> ${data.released}</p>
        <p> ${data.discountedPrice}</p>
        <img src ="${data.image}" alt="">
        
    </div>    
    `
}

renderHTml()