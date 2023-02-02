/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/favBtn.js":
/*!***************************!*\
  !*** ./scripts/favBtn.js ***!
  \***************************/
/***/ (() => {

eval("function captureFavBtnClick(){\r\n    const productsElement = document.getElementById(\"products\");\r\n  \r\n    const favBtnEl = productsElement.querySelectorAll(\".btn-fav\");\r\n    favBtnEl.forEach(function(eachBtn){\r\n      eachBtn.addEventListener(\"click\", function(event){\r\n        \r\n        const selectedItemId = event.target.getAttribute(\"data-id\")\r\n        const selectedItemIndex =  selectedItemIds.indexOf(selectedItemId);\r\n        const btnEl = eachBtn.querySelector(\".material-icons-outlined\");\r\n  \r\n        if (selectedItemIndex != -1){\r\n          selectedItemIds.splice(selectedItemIndex, 1);\r\n          \r\n        btnEl.textContent = \"favorite_border\";\r\n        }else{\r\n          selectedItemIds.push(selectedItemId)\r\n         \r\n        btnEl.textContent = \"favorite\";\r\n        }\r\n        const wishlistCountEl = document.getElementById(\"wishlistCount\");\r\n        wishlistCountEl.textContent = selectedItemIds.length;\r\n        \r\n      })\r\n    })\r\n   \r\n  }\n\n//# sourceURL=webpack://jstask1/./scripts/favBtn.js?");

/***/ }),

/***/ "./scripts/home.js":
/*!*************************!*\
  !*** ./scripts/home.js ***!
  \*************************/
/***/ (() => {

eval("\r\nconst items = [\r\n  {id:1, title:\"Mac book\"},\r\n  {id:2, title:\"camera\"},\r\n  {id:3, title:\"iPhone\"},\r\n  {id:4, title:\"Apple cinema\"}\r\n]\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://jstask1/./scripts/home.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./home */ \"./scripts/home.js\");\r\n__webpack_require__(/*! ./favBtn */ \"./scripts/favBtn.js\");\r\n__webpack_require__(/*! ./render */ \"./scripts/render.js\");\r\n__webpack_require__(/*! ./search */ \"./scripts/search.js\");\n\n//# sourceURL=webpack://jstask1/./scripts/index.js?");

/***/ }),

/***/ "./scripts/render.js":
/*!***************************!*\
  !*** ./scripts/render.js ***!
  \***************************/
/***/ (() => {

eval("const selectedItemIds = []\r\n\r\nconst productsElement = document.getElementById(\"products\");\r\n\r\n\r\nfunction renderProductCards(items){\r\n  productCards = ``\r\n\r\nfor (let each of items){\r\n  \r\n  productCards+=renderProductCard(each)\r\n}\r\nproductsElement.innerHTML = productCards;\r\ncaptureFavBtnClick();\r\n}\r\n\r\nrenderProductCards(items)\r\n\r\nfunction renderProductCard(product){\r\n  return `\r\n <div class=\"col-12 col-md-4 col-lg-3\">\r\n     <div class=\"card\">\r\n         <img src=\"https://demo.opencart.com/image/cache/catalog/demo/macbook_1-200x200.jpg\" class=\"card-img-top\" alt=\"...\">\r\n         <div class=\"card-body\">\r\n           <h5 class=\"card-title\">${product.title}</h5>\r\n           <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n           <div class=\"btn-group w-100\" role=\"group\" aria-label=\"Basic example\">\r\n             <button type=\"button\" class=\"btn\"><span class=\"material-icons-outlined\">\r\n                 shopping_cart\r\n                 </span></button>\r\n             <button type=\"button\" class=\"btn btn-fav\" data-id=\"${product.id}\">\r\n             <span class=\"material-icons-outlined\" data-id=\"${product.id}\">\r\n                 favorite_border\r\n                 </span></button>\r\n             <button type=\"button\" class=\"btn\"><span class=\"material-icons-outlined\">\r\n                 compare_arrows\r\n                 </span></button>\r\n           </div>\r\n         </div>\r\n       </div>\r\n </div>`\r\n }\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://jstask1/./scripts/render.js?");

/***/ }),

/***/ "./scripts/search.js":
/*!***************************!*\
  !*** ./scripts/search.js ***!
  \***************************/
/***/ (() => {

eval("const searchEl = document.getElementById(\"search\");\r\n\r\nsearchEl.addEventListener(\"keyup\", function(event){\r\n  const term = searchEl.value.toLowerCase();\r\n  const filteredItems = items.filter(function(each){\r\n    const productTitle = each.title.toLowerCase();\r\n    return productTitle.indexOf(term)!= -1;\r\n  })\r\n\r\n  renderProductCards(filteredItems);\r\n  \r\n \r\n})\n\n//# sourceURL=webpack://jstask1/./scripts/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;