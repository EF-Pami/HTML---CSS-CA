
/*const url ="https://api.noroff.dev/api/v1/square-eyes";
const moviecontainer = document.querySelector (".moviecontainer");


async function movies() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

movies();

for (let i = 0; i<result.length; i++)

moviecontainer.innerHTML = `<h2>${result[i].title}</h2>
    <p>${result[i].description}</p>
    `;

movies() .then(result=> console.log(result));*/


/*const BASE_URL = 'https://api.noroff.dev/api/v1'
const ALL_PRODUCT = '/square-eyes'*/



/*const url ="https://api.noroff.dev/api/v1/square-eyes";*/
/*const moviecontainer = document.querySelector (".moviecontainer");

async function fetchdata() {
    const payload = await fetch(BASE_URL + ALL_PRODUCT);
    const data = await payload.json();
    console.log({data});
    return data;
}

fetchdata();

function rendersingleData({id,title,image}){
    console.log({id,title,image}) 
    const anchorTag = document.createElement('a');
    anchorTag.classList.add('card');
    anchorTag.href = `./view.html?id=${id}`;
    const heading = document.createElement('h2');
    const body = document.createElement('img');
    heading.textContent = title;
    body.src = image;
    
    anchorTag.append(heading,body);
    return anchorTag;
}

async function renderHTml(){
    const data = await fetchdata(BASE_URL + ALL_PRODUCT);
    console.log({data});
    moviecontainer.innerHTML ="";
    /*const moviecontainer = document.querySelector(".moviecontainer");*/
    /*data.forEach (element => {
        const card = rendersingleData(element);
        moviecontainer.append(card);
    });
}

renderHTml()*/




const movies = document.querySelector(".movies")
const movies_block = document.querySelector(".movies-block")
const BASE_URL = 'https://api.noroff.dev/api/v1'
const ALL_PRODUCT = '/square-eyes'

async function fetchdata() {
    const response = await fetch(BASE_URL + ALL_PRODUCT);
    const data = await response.json();
    return data;
}


async function renderHTml() {
    const products = await fetchdata();
    console.log({products})
    console.log({html: movies_block.innerHTML})
    movies_block.innerHTML = '';
    products.forEach(function (element, index) {
        movies_block.innerHTML += `
        <img src ="${element.image}"alt ="">
        `
    })
}

renderHTml()
