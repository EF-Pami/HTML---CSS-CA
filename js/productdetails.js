
const mainElement = document.querySelector(".product")
const hb = document.querySelector(".homebtn");
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
        <a href="Checkout.html" class="button">Add to cart</a>    
    </div>    
    `
    document.title = 'product_details';

}

renderHTml()

