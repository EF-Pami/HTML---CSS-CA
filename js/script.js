
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


    


movies() .then(result=> console.log(result));


////////////////////////////////////////////////////
/*const url = "https://api.noroff.dev/api/v1/square-eyes/b9e4edb1-e798-45e3-9c46-f7cd75b9326f";
const product = document.querySelector (".product");


async function fetchmovie(){
    const response = await fetch(url);
    const details = await response.json();

    product.innerHTML =(details);
    return details;
    
}
fetchmovie() .then(details=> console.log(details));*/
////////////////////////////////////////////////////////

const url ="https://api.noroff.dev/api/v1/square-eyes";
const moviecontainer = document.querySelector (".moviecontainer");

async function fetchdata() {
    const payload = await fetch(url);
    const data = await payload.json();
    console.log({data});
    return data;
}

fetchdata();

function rendersingleData({id,title,description}){
    console.log({id,title,description}) 
    const anchorTag = document.createElement('a');
    anchorTag.classList.add('card');
    anchorTag.href = `./view.html?id=${id}`;
    const heading = document.createElement('h2');
    const body = document.createElement('p');
    heading.textContent = title;
    body.textContent = description;
    anchorTag.append(heading,body);
    return anchorTag;
}

async function renderHTml(){
    const data = await fetchdata(url);
    console.log({data});
    moviecontainer.innerHTML ="";
    /*const moviecontainer = document.querySelector(".moviecontainer");*/
    data.forEach (element => {
        const card = rendersingleData(element);
        moviecontainer.append(card);
    });
}

renderHTml()


