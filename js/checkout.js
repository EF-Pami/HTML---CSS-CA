
const mainElement = document.querySelector(".container")
const hb = document.querySelector(".homebtn");
const querystring = document.location.search;
//console.log({querystring});
const params = new URLSearchParams(querystring);
const id = params.get('id');

const BASE_URL = 'https://api.noroff.dev/api/v1';
const checkout = BASE_URL + "/square-eyes/" + id;


async function fetchdata() {
    const response = await fetch(checkout);
    const data = await response.json();
    //console.log(data)
    return data;
}
fetchdata();

async function renderHTml() {
    const data = await fetchdata();
    const mainElement = document.querySelector(".container");
    mainElement.innerHTML = `
    <div>
        <h1> ${data.title}</h1>
        <img src ="${data.image}" alt="">
    </div> 
    <div>    
        <form class="buy-form">
            <div class="input">
                <label for="name">Name*<span class=irrelevant>not needed</span></label>
            <input type="text" id="name" placeholder="enter name" name="name">
            </div>
            <div class="input">
                <label for="email">Email Address*<span class=irrelevant>not needed</span></label>
            <input type="text" id="email" placeholder="enter email" name="email">
            </div>
            <div class="input">
                <label for="pword">Password*<span class=irrelevant>not needed</span></label>
            <input type="password" id="pword" placeholder="enter your password" name="pword">
            </div>
            
            <h2>Payment method</h2>
            <div class="mode">
                <input type="radio" id="card" name="payment method" value="Credit card/Debit card">
            <label for="card">Credit card/Debit card<span class=irrelevant>not needed</span></label>
            </div>
            <i class='fa fa-cc-visa'></i>
            <i class='fa fa-cc-mastercard'></i>
            <i class='fa fa-cc-amex'></i>
            <i class='fa fa-apple'></i>
            <i class='fa fa-amazon'></i>
            <div class="mode">
                <input type="radio" id="pal" name="payment method" value="Paypal">
            <label for="pal">Paypal<span class=irrelevant>not needed</span></label>
            </div>
            <i class='fa fa-cc-paypal'></i><span class=irrelevant>not needed</span>
            <div class="hb">
                <a href="checkout sucess.html" class="button">Buy Now</a>
            </div> 
        </form>  
    </div>
       
    `

}

renderHTml()

