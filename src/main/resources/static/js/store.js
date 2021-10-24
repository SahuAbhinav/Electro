var STORE = STORE || {}
STORE.LAPTOPS_CATEGORY = 'Laptops';
STORE.SMARTPHONES_CATEGORY = 'Smartphones';
STORE.CAMERAS_CATEGORY = 'Cameras';
STORE.ACCESSORIES_CATEGORY = 'Accessories';
STORE.CART_LIST = [];
STORE.CART_ITEM = {
	id : null,
	name : null,
	quantity : 0,
	price : 0,
	imageLocation : null
	
};

STORE.DATA = {

}

STORE.DEFAULT_CATEGORY = STORE.LAPTOPS_CATEGORY;

STORE.RENDER_NEW_PRODUCT = function(data, type) {

    console.log(data);
    let el = '#tab4';
    let template1 = $("#productList").html();

    if (type == STORE.LAPTOPS_CATEGORY) {
        el = '#tab1';
    } else if (type == STORE.SMARTPHONES_CATEGORY) {
        el = '#tab2';
    } else if (type == STORE.CAMERAS_CATEGORY) {
        el = '#tab3';
    }
    $('#store').find('.storeProduct').html(_.template(template1)({
        products: data
    }));

    slickRender($(el));
     STORE.BIND_EVENT();
    


}

STORE.updatePriceSlider = function(elem , value) {
		if ( elem.hasClass('price-min') ) {
			console.log('min')
			priceSlider.noUiSlider.set([value, null]);
		} else if ( elem.hasClass('price-max')) {
			console.log('max')
			priceSlider.noUiSlider.set([null, value]);
		}
	}

STORE.DEAL_COUNDOWN = function() {

	// Input number
	$('.input-number').each(function() {
		var $this = $(this),
		$input = $this.find('input[type="number"]'),
		up = $this.find('.qty-up'),
		down = $this.find('.qty-down');

		down.on('click', function () {
			var value = parseInt($input.val()) - 1;
			value = value < 1 ? 1 : value;
			$input.val(value);
			$input.change();
			STORE.updatePriceSlider($this , value)
		})

		up.on('click', function () {
			var value = parseInt($input.val()) + 1;
			$input.val(value);
			$input.change();
			STORE.updatePriceSlider($this , value)
		})
	});
	
	var priceInputMax = document.getElementById('price-max'),
			priceInputMin = document.getElementById('price-min');

	priceInputMax.addEventListener('change', function(){
		STORE.updatePriceSlider($(this).parent() , this.value)
	});

	priceInputMin.addEventListener('change', function(){
		STORE.updatePriceSlider($(this).parent() , this.value)
	});

	

	// Price Slider
	var priceSlider = document.getElementById('price-slider');
	if (priceSlider) {
		noUiSlider.create(priceSlider, {
			start: [1, 999],
			connect: true,
			step: 1,
			range: {
				'min': 1,
				'max': 999
			}
		});

		priceSlider.noUiSlider.on('update', function( values, handle ) {
			var value = values[handle];
			handle ? priceInputMax.value = value : priceInputMin.value = value
		});
	}

}
STORE._LOAD_NEW_PRODUCT = function() {

    var request = AJAX.get("item/getAll", function(res) {
        console.log(res);
        let items = res.data;
        STORE.RENDER_NEW_PRODUCT(items);
        STORE.RENDER_TOP_PRODUCT(items);
        STORE.RENDER_TOP_SELLING_PRODUCT(items.slice(0, 3));

        slickRender($('body'));
    });

};

STORE.LOAD_NEW_PRODUCT = function(category) {

    if (!STORE.DATA[category]) {
        var request = AJAX.post("item/findByCategory", {
            searchKeyword: category
        }, function(res) {
            console.log(res);
            let items = res.data;
            STORE.RENDER_NEW_PRODUCT(items, category);
            STORE.DATA[category] = items;


        });
    }

};
STORE.SEARCH_PRODUCT = function(searchKeyword, category) {

    var request = AJAX.post("item/search", {
        searchKeyword: searchKeyword,
        category : category
    }, function(res) {
        console.log(res);
        STORE.RENDER_NEW_PRODUCT(res.data);

        slickRender($('body'));
    });


};

STORE.ADD_TO_CART = function(el) {

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

STORE.BIND_EVENT = function() {

    $('#search_product').click(function() {
        //alert("Hello");
        STORE.SEARCH_PRODUCT($('#search_string').val(), $('.input-select').val());
    });

    $('[data-toggle="tab"]').click(function(e) {
        console.log(e);
        let category = $(this).attr('data-type');

        STORE.LOAD_NEW_PRODUCT(category);
    });

    $('.add-to-cart-btn').click(function(e) {
        console.log(e);
        
        STORE.ADD_TO_CART(($(this)));
    });


}


STORE.init = function() {
    console.log('init');
    //STORE.LOAD_NEW_PRODUCT(STORE.DEFAULT_CATEGORY);
    //STORE.DEAL_COUNDOWN();
    STORE.BIND_EVENT();


}

$(document).ready(function() {
    STORE.init();

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    const category = urlParams.get('category');
    const searchKeyword = urlParams.get('searchKeyword');

    console.log(category);
    
        $('#search_string').val(searchKeyword);
        $('.input-select').val(category).change();
        STORE.SEARCH_PRODUCT(searchKeyword, category);

});