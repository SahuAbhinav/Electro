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

PAGE_HEADER.BIND_EVENT = function() {

    $('#search_product').click(function() {
        console.log('page header search');
         window.location.href = "store?searchKeyword="+$('#search_string').val();
        PAGE_HEADER.SEARCH_PRODUCT($('#search_string').val(), $('.input-select').val());
    });
    
    $('[data-toggle="dropdown"]').click(function (e) {
  
PAGE_HEADER.RENDER_CART();
  
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