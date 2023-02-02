const items = [
  {
    id: 1,
    title: "Mac book",
    image:
      "https://demo.opencart.com/image/cache/catalog/demo/macbook_1-200x200.jpg",
    description:
      "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1.",
    price: 200,
  },
  {
    id: 2,
    title: "iPhone",
    image:
      "https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg",
    description:
      "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..",

    price: 2000,
  },
  {
    id: 3,
    title: "Apple cinema",
    image:
      "https://demo.opencart.com/image/cache/catalog/demo/apple_cinema_30-200x200.jpg",
    description:
      "The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed",
    price: 400,
  },
  {
    id: 4,
    title: "Camera",
    image:
      "https://demo.opencart.com/image/cache/catalog/demo/canon_eos_5d_1-200x200.jpg",
    description:
      "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..",
    price: 300,
  },
];

function captureFavBtnClick() {
  const productsElement = document.getElementById("products");

  const favBtnEl = productsElement.querySelectorAll(".btn-fav");
  favBtnEl.forEach(function (eachBtn) {
    eachBtn.addEventListener("click", function (event) {
      const selectedItemId = event.target.getAttribute("data-id");
      const selectedItemIndex = selectedItemIds.indexOf(selectedItemId);
      const btnEl = eachBtn.querySelector(".material-icons-outlined");

      if (selectedItemIndex != -1) {
        selectedItemIds.splice(selectedItemIndex, 1);

        btnEl.textContent = "favorite_border";
      } else {
        selectedItemIds.push(selectedItemId);

        btnEl.textContent = "favorite";
      }
      const wishlistCountEl = document.getElementById("wishlistCount");
      wishlistCountEl.textContent = selectedItemIds.length;
    });
  });
}

const selectedItemIds = [];

const productsElement = document.getElementById("products");

function renderProductCards(items) {
  productCards = ``;

  for (let each of items) {
    productCards += renderProductCard(each);
  }
  productsElement.innerHTML = productCards;
  captureFavBtnClick();
}

renderProductCards(items);

function renderProductCard(product) {
  return `
 <div class="col-12 col-md-4 col-lg-3">
     <div class="card">
         <img src="${product.image}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${product.title}</h5>
           <p class="card-text">${product.description}</p>
           <span class="material-icons-outlined">
currency_rupee
</span>
           <strong>${product.price}</strong>
           <div class="btn-group w-100 bg-light" role="group" aria-label="Basic example">
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
 </div>`;
}

const searchEl = document.getElementById("search");

searchEl.addEventListener("keyup", function (event) {
  const term = searchEl.value.toLowerCase();
  const filteredItems = items.filter(function (each) {
    const productTitle = each.title.toLowerCase();
    return productTitle.indexOf(term) != -1;
  });

  renderProductCards(filteredItems);
});
