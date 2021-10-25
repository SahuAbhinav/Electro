var PAGE_HEADER = PAGE_HEADER || {}

PAGE_HEADER.RENDER_CART = function() {

let retrievedData =localStorage.getItem('cart') || "[]";
let carts = JSON.parse(retrievedData);
let template1 = $("#cartList").html();

$('#cartDiv').find('.cart-list').html(_.template(template1)({
        products: carts
    }));

let total = 0;
_(carts).each(function(item, i){
  total += item.price* item.quantity;
  
});

$('#cartDiv').find('.cart-summary .subTotal').html(total);
$('#cartDiv').find('.qty').html(carts.length);


}

PAGE_HEADER.ADD_TO_CART = function(el) {

let jsonData= el.attr('data-json');
console.log(jsonData);
let itemJson = JSON.parse(jsonData);
itemJson.quantity = 1;
console.log(itemJson);

let retrievedData =localStorage.getItem('cart') || "[]";

console.log(itemJson);

let carts = JSON.parse(retrievedData);

let oldLength = carts.length;

console.log(carts);
carts.push(itemJson);

carts =_.uniq(carts, 'id');

if(oldLength == carts.length){
alert('Item already in cart');

return;
}

localStorage.setItem("cart", JSON.stringify(carts));
alert('Item added in cart');
console.log(localStorage.getItem('cart'));
PAGE_HEADER.UPDATE_CART_COUNT();

}

PAGE_HEADER.BIND_EVENT = function() {

    $('#search_product').click(function() {
        console.log('page header search');
         window.location.href = "store?searchKeyword="+$('#search_string').val();
        PAGE_HEADER.SEARCH_PRODUCT($('#search_string').val(), $('.input-select').val());
    });
    
    $('[data-toggle="dropdown"]').click(function (e) {
  
		PAGE_HEADER.RENDER_CART();
  
  });
  
  $('.add-to-cart-btn').click(function(e) {
        console.log(e);
        
        PAGE_HEADER.ADD_TO_CART(($(this)));
    });

}


PAGE_HEADER.UPDATE_CART_COUNT = function() {
 let retrievedData =localStorage.getItem('cart') || "[]";
	let carts = JSON.parse(retrievedData);
    $('#cartDiv').find('.qty').html(carts.length);
}
PAGE_HEADER.init = function() {
    console.log('init');
    PAGE_HEADER.BIND_EVENT();
   PAGE_HEADER.UPDATE_CART_COUNT();


}

$(document).ready(function() {
    PAGE_HEADER.init();


});