const selectedItemIds = []

const productsElement = document.getElementById("products");


function renderProductCards(items){
  productCards = ``

for (let each of items){
  
  productCards+=renderProductCard(each)
}
productsElement.innerHTML = productCards;
captureFavBtnClick();
}

renderProductCards(items)

function renderProductCard(product){
  return `
 <div class="col-12 col-md-4 col-lg-3">
     <div class="card">
         <img src="${product.image}" class="card-img-top" alt="Product Image">
         <div class="card-body">
           <h5 class="card-title">${product.title}</h5>
           <p class="card-text">${product.description}</p>
           <strong>${product.price}</strong>
           <div class="btn-group w-100  bg-light" role="group" aria-label="Basic example">
             <button type="button" class="btn"><span class="material-icons-outlined">
                 shopping_cart
                 </span></button>
             <button type="button" class="btn btn-fav" data-id="${product.id}">
             <span class="material-icons-outlined" data-id="${product.id}">
                 favorite_border
                 </span></button>
             <button type="button" class="btn"><span class="material-icons-outlined">
                 compare_arrows
                 </span></button>
           </div>
         </div>
       </div>
 </div>`
 }





