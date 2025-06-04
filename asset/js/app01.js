setInterval(() => {
  document.querySelector(".Myclock").innerText = new Date().toLocaleTimeString(
    "fa"
  );
}, 1000);

/*document.addEventListener = ('DOMContentLoaded', () => {
  if(document.getElementById('#myAlert') &&
     document.getElementById('#myText')
  ) {
    debugger;
      setTimeout(() => {
        document.getElementById('#myAlert').remove();
        document.getElementById('#myText').remove();
      }, 2000 );
  
    } else return;
})*/

    // Example of custom event
    /*const myDiv = document.getElementById('myAlert');
    const loadDivEvent = new CustomEvent('divLoaded', { detail: { divId: 'myAlert' } });

    // Dispatch event when your div content is loaded
    myDiv.dispatchEvent(loadDivEvent);

    // Add event listener
    myDiv.addEventListener('divLoaded', function(e) {
      setTimeout(() => {
        document.querySelector('#myAlert').classList.add = 'd-none';
        document.querySelector('#myText').classList.add = "d-none";
      }, 2000 );
    });*/

async function removeData(idUser) {
  let fetchData = await fetch("api/api-remove-user.php", {
    method: "POST",
    body: JSON.stringify({
      id: idUser
    }),
    headers: {
      "Content-Type": 'application/json'
    }
  });
  let res = await fetchData.json();
}


function valid() {
  let flag = true;
  let userName = document.querySelector("#userName").value.trim();
  let email = document.querySelector("#email").value.trim();
  let phoneNumber = document.querySelector("#phoneNumber").value.trim();
  let passWord = document.querySelector("#passWord").value.trim();
  let userProfile = document.querySelector("#userProfile").value.trim();
  

  //toasts
  let toastremove = document.querySelector("#deleteToast");
  const toastBootstrapRemove = bootstrap.Toast.getOrCreateInstance(toastremove);
  let toastremove2 = document.querySelector("#deleteToast2");
  const toastBootstrapRemove2 =bootstrap.Toast.getOrCreateInstance(toastremove2);
  let toastremove3 = document.querySelector("#deleteToast3");
  const toastBootstrapRemove3 =bootstrap.Toast.getOrCreateInstance(toastremove3);
  let toastremove4 = document.querySelector("#deleteToast4");
  const toastBootstrapRemove4 =bootstrap.Toast.getOrCreateInstance(toastremove4);
  let toastremove5 = document.querySelector("#deleteToast5");
  const toastBootstrapRemove5 =bootstrap.Toast.getOrCreateInstance(toastremove5);

  if(
    !userName
  ) {
    document.querySelector("input#userName").classList.add("is-invalid");
    flag = false;
    document.querySelector("#deleteToast .toast-body").innerHTML =
      "!نام خود را وارد کنید";
    toastBootstrapRemove.show();
  }
  if(
    !email
  ) {
    document.querySelector("input#email").classList.add("is-invalid");
    flag = false;
    document.querySelector("#deleteToast2 .toast-body").innerHTML =
      "!!رایانامه را وارد کنید";
    toastBootstrapRemove2.show();
  }
  if(
    !phoneNumber
  ) {
    document.querySelector("input#phoneNumber").classList.add("is-invalid");
    flag = false;
    document.querySelector("#deleteToast3 .toast-body").innerHTML =
      "!شماره همراه را وارد کنید ";
    toastBootstrapRemove3.show();
  }
  if(
    !passWord
  ) {
    document.querySelector("input#passWord").classList.add("is-invalid");
    flag = false;
    document.querySelector("#deleteToast4 .toast-body").innerHTML =
      "!!گذر واژه را وارد کنید";
    toastBootstrapRemove4.show();
  }
  if(
    !userProfile
  ) {
    document.querySelector("input#userProfile").classList.add("is-invalid");
    flag = false;
    document.querySelector("#deleteToast5 .toast-body").innerHTML =
      "!تصویر حساب کاربری آپلود نشده است";
    toastBootstrapRemove5.show();
  }
  if(userName && email && phoneNumber && passWord && userProfile) {
    flag = true;
  }
  return flag;
}


function validLogin() {
  //debugger
  let nameLog = document.querySelector("#userNameLog").value.trim();
  let passWordLog = document.querySelector("#passWordLog").value.trim();
  let is_logged = true;

  //toasts
  let toastremove = document.querySelector("#deleteToast");
  const toastBootstrapRemove = bootstrap.Toast.getOrCreateInstance(toastremove);
  let toastremove2 = document.querySelector("#deleteToast2");
  const toastBootstrapRemove2 =bootstrap.Toast.getOrCreateInstance(toastremove2);


  if(
    !nameLog &&
    !passWordLog
  ) {
    is_logged = false;
    document.querySelector("input#userNameLog").classList.add("is-invalid");
    document.querySelector("input#passWordLog").classList.add("is-invalid");
    document.querySelector("#deleteToast .toast-body").innerHTML =
      "!نام خود را وارد کنید";
    toastBootstrapRemove.show();

    document.querySelector("#deleteToast2 .toast-body").innerHTML =
      "!!گذر واژه را وارد کنید";
    toastBootstrapRemove2.show();
  }
  if(!nameLog && passWordLog) {
    is_logged = false;
    document.querySelector("input#userNameLog").classList.add("is-invalid");
    document.querySelector("#deleteToast .toast-body").innerHTML =
      "!نام خود را وارد کنید";
    toastBootstrapRemove.show();
  }
  if(nameLog && !passWordLog) {
    is_logged = false;
    document.querySelector("input#passWordLog").classList.add("is-invalid");
    document.querySelector("#deleteToast2 .toast-body").innerHTML ="!!گذر واژه را وارد کنید";
    toastBootstrapRemove2.show();
  }
  if(nameLog && passWordLog) {
    is_logged = true;
  }
  
  return is_logged;
}

async function getData() {
  skeleton(8);
  let fetchData = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });
  let res = await fetchData.json();
  document.querySelector("#loading").remove();

  //i added this thing below
  // document.querySelector('.cart').innerHTML = `
  // <a href="ShoppingCart.html" class="nav-link position-relative">
  //             <span class="badge bg-danger position-absolute top-0 start-0"
  //                       id="count-products">${number_BoughtItems}</span>
  //             <i class="fa-solid fa-basket-shopping mt-2"></i>
  // `;
  res.forEach((item) => {
    document.querySelector(".res").innerHTML += `
            <div class="col-3 my-3">
                <div class="card mx-auto">
                    <a href='single.php?id=${item.id}'> 
                        <img src='${item.image}' class='card-img-top'>
                    </a>
                    <div class='card-body'>
                        <h4 class='fs-4'>${item.title}</h4>
                        <p class='fs-4'>${item.price}</p>
                    </div>
                </div>
            </div>`;
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

function skeleton(item) {
  for (let i = 0; i < item; i++) {
    document.querySelector("#loading").innerHTML += `
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
    `;
  }
}
let dataSingle;
async function getDataSingle() {
  let params = new URLSearchParams(document.location.search);
  let idProduct = params.get("id");
  let fetchData = await fetch(
    `https://fakestoreapi.com/products/${idProduct}`,
    {
      method: "GET",
    }
  );
  let res = await fetchData.json();
  dataSingle = res;
  document.querySelector("#loading").remove();
  document.querySelector("title").innerText = `${dataSingle.title}`;
  let meta = document.createElement("meta");
  meta.setAttribute("name", "description");
  meta.setAttribute("content", `${dataSingle.description}`);
  document.querySelector("title").before(meta);
  document.querySelector(".res-single").innerHTML += `
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
                            <span class='my-auto'>!افزودن به سبد خرید</span>
                        </button>
                    </div>
                </div>
            </div>`;
  //countItemsCart();
}

function addToCart() {
  //console.log(dataSingle);
  let toastAdd = document.querySelector("#liveToast");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastAdd);

  let cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
  let findItem = cartItems.find((item) => item.id == dataSingle.id);
  if (findItem) {
    document.querySelector("#liveToast .toast-body").innerHTML =
      "!فقط یک کالا مجاز هستید ";
    toastBootstrap.show();
    return;
  }
  cartItems.push(dataSingle);
  document.querySelector("#liveToast .toast-body").innerHTML =
    "!به سبد خرید افزوده شد";
  toastBootstrap.show();
  //console.log(cartItems);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  countItemsCart();
}

countItemsCart();

function countItemsCart() {
  let countItems = JSON.parse(localStorage.getItem("cartItems")).length || 0;
  document.querySelector("#count-products").innerText = countItems;
}

function getDataCard() {
  let cardItems = JSON.parse(localStorage.getItem("cartItems"));
  if (cardItems.length >= 1) {
    cardItems.forEach((item) => {
      document.querySelector(".res-cart").innerHTML += `
            <div class='col-4'>
                <div class="card mx-auto mt-2">
                  <a href='single.php?id=${item.id}'>
                    <img src="${item.image}" class="card-img-top">
                  </a>
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.price}</p>
                        <button type='button' class='btn cart-omiter bg-danger-subtle' 
                            onclick='cartOmiter(${item.id},event)'>
                                !حذف از سبد خرید
                        </button>
                    </div>
                </div>
            </div>`;
    });
  } else {
    document.querySelector(".res-cart").innerHTML = `
            <div class='col-12'>
                <div class="card mx-auto mt-5 card-cart">
                    <div class="card-body">
                    <div class='text-capitalize text-center d-flex flex-column justify-content-between align-items-center '>
                        <h2 class="card-title mt-5">
                            سبد خرید شما  
                            <strong>
                                خالی‌ست!
                            </strong>
                        </h2>
                        <img id='emoji' src="./asset/img/e.gif" alt="">
                        
                            <button onclick='changEmoji()' href="" id='btn-goshopping' type='button' class='btn cart-omiter bg-danger-subtle mt-3'>
                                به خرید ادامه دهید!
                            </button>
                          
                    </div>
                    </div>
                </div>
            </div>
        `;
  }
}

function cartOmiter(itemID, eve) {
  //more than 2 items to remove; i get some errors
  //toast
  let toastremove = document.querySelector("#deleteToast");
  const toastBootstrapRemove = bootstrap.Toast.getOrCreateInstance(toastremove);

  eve.currentTarget.parentElement.parentElement.parentElement.remove();
  let cardItem_Omited = JSON.parse(localStorage.getItem("cartItems"));

  //debugger
  let remainItems = cardItem_Omited.filter((item) => item.id != itemID);
  localStorage.setItem("cartItems", JSON.stringify(remainItems));

  if (!JSON.parse(localStorage.getItem("cartItems")).length) {
    getDataCard();
    countItemsCart();
    document.querySelector("#deleteToast .toast-body").innerHTML =
      ".کالا حذف گردید";
    toastBootstrapRemove.show();
  }
  countItemsCart();
  document.querySelector("#deleteToast .toast-body").innerHTML =
    ".کالا حذف گردید";
  toastBootstrapRemove.show();
}
function changEmoji() {
  document.getElementById("emoji").src = "./asset/img/512.gif";
  let timeOut = setTimeout(() => {
    document.location.href = "index.php";
  }, 1500);
}


