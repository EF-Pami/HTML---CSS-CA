
const hmimg = document.querySelector(".homeimg")
const hmimg_block = document.querySelector(".homeimg-block")
const BASE_URL = 'https://api.noroff.dev/api/v1'
const ALL_PRODUCT = '/square-eyes'

//const WOO_API_KEY ='ck_6524121645e71d16b42553d87b9327fa150f0973'
//const WOO_API_SECRET ='cs_7c36ea27b9e646b8b3da5553fbc748620066273d'
//const BASE_URL = `https://localhost/flower-power/wp-json/wc/v2/products?consumer_key=${WOO_API_KEY}&consumer_secret=${WOO_API_SECRET}`



async function fetchdata() {
    //console.log (BASE_URL)
    const response = await fetch(BASE_URL + ALL_PRODUCT);
    const data = await response.json();
    return data;
}


async function renderHTml() {
    const productshome = await fetchdata();
    //console.log({productshome})
    //console.log({html: hmimg_block.innerHTML})
    hmimg_block.innerHTML = '';
    

    for(let count = 0; count <= productshome.length; count++) {
        //console.log({count})
        hmimg_block.innerHTML +=`
        <img src = ${productshome[count].image} alt="">
        `
    if (count ==2) break;
    }
            
} 

renderHTml()

//export default BASE_URL;