
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






const url ="https://api.noroff.dev/api/v1/square-eyes";
const moviecontainer = document.querySelector (".moviecontainer");

async function fetchdata() {
    const payload = await fetch(url);
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


