
const hmimg = document.querySelector(".hmimg")
const hmimg_block = document.querySelector(".hmimg-block")
const BASE_URL = 'https://api.noroff.dev/api/v1'
const ALL_PRODUCT = '/square-eyes'

async function fetchdata() {
    const response = await fetch(BASE_URL + ALL_PRODUCT);
    const data = await response.json();
    return data;
}


async function renderHTml() {
    const productshm = await fetchdata();
    console.log({productshm})
    console.log({html: hmimg_block.innerHTML})
    hmimg_block.innerHTML = '';
    productshm.forEach(function (element, index) {
        hmimg_block.innerHTML += `
        <img src ="${element.image}"alt ="">
        `
    })

    for(let count = 0; count <= productshm.length; count++) {
        hmimg_block.innerHTML +=`
        <img src = ${productshm[0].image} alt="">
        `
    if (count === 3) {
            break;
          }   
    }
} 

renderHTml()