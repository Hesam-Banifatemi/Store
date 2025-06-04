async function getData(){
    skeleton(8);
    let fetchData = await fetch('https://fakestoreapi.com/products',{
        method : 'GET',
    });
    let res = await fetchData.json() 
    document.querySelector('#loading').remove();
    
    document.querySelector('.cart').innerHTML = `
    <a href="ShoppingCart.html" class="nav-link position-relative">
                <span class="badge bg-danger position-absolute top-0 start-0"
                          id="count-products">${number_BoughtItems}</span>
                <i class="fa-solid fa-basket-shopping mt-2"></i>
    `;
        res.forEach( item => {
            document.querySelector('.res').innerHTML += `
            <div class="col-3 my-3">
                <div class="card mx-auto">
                    <a href='single.html?id=${item.id}'>
                        <img src='${item.image}' class='card-img-top'>
                    </a>
                    <div class='card-body'>
                        <h4 class='fs-4'>${item.title}</h4>
                        <p class='fs-4'>${item.price}</p>
                    </div>
                </div>
            </div>`
        });
    /*fetch('https://fakestoreapi.com/products',{
        method : 'GET',
    }).then(x=> x.json())
      .then(res=> {
        document.querySelector('#loading').remove();
        res.forEach( item => {
            document.querySelector('.res').innerHTML += `
            <div class="col-3 my-3">
                <div class="card mx-auto">
                        <img src='${item.image}' class='card-img-top'>
                        <div class='card-body'>
                            <h4 class='fs-4'>${item.title}</h4>
                            <p class='fs-4'>${item.price}</p>
                        </div>
                </div>
            </div>`
        });
      })*/
    /*const http = new XMLHttpRequest();
    http.open('GET','https://fakestoreapi.com/products');
    http.send();
    http.onload = function(){
        let data = JSON.parse(this.response);
        //forEach... and rest of the code producing html
    };*/
}
function skeleton(item){
    for(let i=0;i<item;i++){
        document.querySelector('#loading').innerHTML += `
            <div class="col-3">
                <div class="card mt-3" aria-hidden="true">
                    <img  class="card-img-top bg-success-subtle w-100 h-100">
                    <div class="card-body">
                      <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                      </h5>
                      <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                      </p>
                    </div>
                </div>
            </div>
    `
    }
}
let dataSingle;
async function getDataSingle(){
    let params = new URLSearchParams(document.location.search);
    let idProduct = params.get('id');
    let fetchData = await fetch(`https://fakestoreapi.com/products/${idProduct}`,{
        method : 'GET',
    });
    let res = await fetchData.json() 
    dataSingle = res;
    document.querySelector('#loading').remove();
            document.querySelector('.res-single').innerHTML += `
            <div class="col-8 my-3 mx-auto">
                <div class="card mx-auto">
                        <img src='${res.image}' class='card-img-top'>  
                    <div class='card-body'>
                        <h4 class='fs-4'>${res.title}</h4>
                        <p class='fs-4'>${res.price}</p>
                        <p>${res.description}</p>
                        <button id="btn-cart" type='button' class='btn btn-danger
                        d-flex flex-column justify-content-center' 
                        onclick='addToCart()'>
                            <span class='my-auto'>Add To Cart</span>
                        </button>
                    </div>
                </div>
            </div>`
}
//let localStorageItems =[];


function addToCart(){
    localStorage.setItem('key',JSON.stringify(dataSingle));
    console.log(dataSingle);
    document.querySelector('#count-products').innerText++;
    let bought_items = document.querySelector('#count-products').innerText;
    number_BoughtItems = Number(bought_items);
    localStorage.setItem('number',toString(number_BoughtItems));
    //localStorageItems.push(localStorage.getItem('key'));

}
//let number_BoughtItems = localStorageItems.length;
let number_BoughtItems = localStorage.length;

function getDataCard(){
    
        document.querySelector('.res').innerHTML += `
        <div class="col-3 my-3">
            <div class="card mx-auto">
                <a href='single.html?id=${localStorage.getItem('key').id}'>
                    <img src='${localStorage.getItem('key').image}' class='card-img-top'>
                </a>
                <div class='card-body'>
                    <h4 class='fs-4'>${localStorage.getItem('key').title}</h4>
                    <p class='fs-4'>${localStorage.getItem('key').price}</p>
                </div>
            </div>
        </div>`
}