var CHECKOUT = CHECKOUT || {}

CHECKOUT.LOAD_DATA = function() {

let retrievedData =localStorage.getItem('cart') || "[]";
let carts = JSON.parse(retrievedData);
let template1 = $("#checkoutDetailTemplate").html();


let total = 0;
_(carts).each(function(item, i){
  total += item.price* item.quantity;
  
});

$('.order-details').find('.order-summary').html(_.template(template1)({
        products: carts,
        total : total
    }));

}
CHECKOUT.ORDER_SUBMIT = function(){

localStorage.removeItem('cart');
alert('Order placed successfully.');
window.location.href = '/electro';
}


CHECKOUT.BIND_EVENT = function() {
    
    $('.order-submit').click(function (e) {
  
		CHECKOUT.ORDER_SUBMIT();
  
  });
  
  $('.add-to-cart-btn').click(function(e) {
        console.log(e);
        
        CHECKOUT.ADD_TO_CART(($(this)));
    });

}


CHECKOUT.init = function() {
    console.log('init');
   	CHECKOUT.LOAD_DATA();
    CHECKOUT.BIND_EVENT();


}

$(document).ready(function() {
    CHECKOUT.init();


});