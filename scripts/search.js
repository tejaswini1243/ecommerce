const searchEl = document.getElementById("search");

searchEl.addEventListener("keyup", function(event){
  const term = searchEl.value.toLowerCase();
  const filteredItems = items.filter(function(each){
    const productTitle = each.title.toLowerCase();
    return productTitle.findIndex(term)!= -1;
  })

  renderProductCards(filteredItems);
  
 
})