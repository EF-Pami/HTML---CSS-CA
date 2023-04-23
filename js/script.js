
async function movies() {
    const moviecontainer = document.querySelector (".moviecontainer");
    const url ="https://api.noroff.dev/api/v1/square-eyes";
    const response = await fetch(url);
    const result = await response.json();

    moviecontainer.innerHTML = (result);
    return result;

    
    
}

movies() .then(result=> console.log(result));

const product = document.querySelector (".product");
const url = "https://api.noroff.dev/api/v1/square-eyes/b9e4edb1-e798-45e3-9c46-f7cd75b9326f";

async function fetchmovie(){
    const response = await fetch(url);
    const details = await response.json();

    product.innerHTML =(details);
    return details;
    
}
fetchmovie() .then(details=> console.log(details));




