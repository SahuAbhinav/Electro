var PRODUCT = PRODUCT || {}
PRODUCT.LAPTOPS_CATEGORY = 'Laptops';
PRODUCT.SMARTPHONES_CATEGORY = 'Smartphones';
PRODUCT.CAMERAS_CATEGORY = 'Cameras';
PRODUCT.ACCESSORIES_CATEGORY = 'Accessories';
PRODUCT.DATA = {

}

PRODUCT.DEFAULT_CATEGORY = PRODUCT.LAPTOPS_CATEGORY;

PRODUCT.RENDER_PRODUCT = function(data) {

    console.log(data);
    let template1 = $("#productDetail").html();

    
    $('#productDetailSection').html(_.template(template1)({
        product: data
    }));

   // slickRender($(el));
   PAGE_HEADER.BIND_EVENT();


}


PRODUCT._LOAD_NEW_PRODUCT = function() {

    var request = AJAX.get("item/getAll", function(res) {
        console.log(res);
        let items = res.data;
        PRODUCT.RENDER_NEW_PRODUCT(items);
        PRODUCT.RENDER_TOP_PRODUCT(items);
        PRODUCT.RENDER_TOP_SELLING_PRODUCT(items.slice(0, 3));

        slickRender($('body'));
    });

};

PRODUCT.GET = function(id) {


        var request = AJAX.post("item/get", {
            id: id
        }, function(res) {
            console.log(res);
            PRODUCT.RENDER_PRODUCT(res);
            //PRODUCT.DATA[category] = items;


        });
    

};
PRODUCT.SEARCH_PRODUCT = function() {

    var request = AJAX.post("item/search", {
        searchKeyword: $('#search_string').val()
    }, function(res) {
        console.log(res);
        PRODUCT.RENDER_NEW_PRODUCT(res.data);

        slickRender($('body'));
    });


};


PRODUCT.BIND_EVENT = function() {

    $('#search_product').click(function() {
        //alert("Hello");
        PRODUCT.SEARCH_PRODUCT();
    });

    $('[data-toggle="tab"]').click(function(e) {
        console.log(e);
        let category = $(this).attr('data-type');

        PRODUCT.LOAD_NEW_PRODUCT(category);
    });



}


PRODUCT.init = function() {
    console.log('init');
    //PRODUCT.LOAD_NEW_PRODUCT(PRODUCT.DEFAULT_CATEGORY);
    //PRODUCT.DEAL_COUNDOWN();
    PRODUCT.BIND_EVENT();


}

$(document).ready(function() {
    PRODUCT.init();

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    const id = urlParams.get('id');
    
    console.log(id);
    if (id != null && id.length>0) {
        PRODUCT.GET(id);
    } 

});