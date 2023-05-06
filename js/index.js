
const hmimg = document.querySelector(".homeimg")
const hmimg_block = document.querySelector(".homeimg-block")
const BASE_URL = 'https://api.noroff.dev/api/v1'
const ALL_PRODUCT = '/square-eyes'

async function fetchdata() {
    const response = await fetch(BASE_URL + ALL_PRODUCT);
    const data = await response.json();
    return data;
}


async function renderHTml() {
    const productshome = await fetchdata();
    console.log({productshome})
    console.log({html: hmimg_block.innerHTML})
    hmimg_block.innerHTML = '';
    

    for(let count = 0; count <= productshome.length; count++) {
        console.log({count})
        hmimg_block.innerHTML +=`
        <img src = ${productshome[count].image} alt="">
        `
    if (count == 2) break;  
    }
} 

renderHTml()

//export default BASE_URL;