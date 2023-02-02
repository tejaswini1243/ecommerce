function captureFavBtnClick(){
    const productsElement = document.getElementById("products");
  
    const favBtnEl = productsElement.querySelectorAll(".btn-fav");
    favBtnEl.forEach(function(eachBtn){
      eachBtn.addEventListener("click", function(event){
        
        const selectedItemId = event.target.getAttribute("data-id")
        const selectedItemIndex =  selectedItemIds.indexOf(selectedItemId);
        const btnEl = eachBtn.querySelector(".material-icons-outlined");
  
        if (selectedItemIndex != -1){
          selectedItemIds.splice(selectedItemIndex, 1);
          
        btnEl.textContent = "favorite_border";
        }else{
          selectedItemIds.push(selectedItemId)
         
        btnEl.textContent = "favorite";
        }
        const wishlistCountEl = document.getElementById("wishlistCount");
        wishlistCountEl.textContent = selectedItemIds.length;
        
      })
    })
   
  }