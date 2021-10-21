var STORE = STORE || {}
STORE.LAPTOPS_CATEGORY = 'Laptops';
STORE.SMARTPHONES_CATEGORY = 'Smartphones';
STORE.CAMERAS_CATEGORY = 'Cameras';
STORE.ACCESSORIES_CATEGORY = 'Accessories';
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


}


STORE.DEAL_COUNDOWN = function() {
    // Set the date we're counting down to
    var countDownDate = new Date("Oct 25, 2021 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"


        let html = "<li><div><h3>" + days + "</h3><span>Days</span></div></li><li><div><h3>" + hours + "</h3><span>Hours</span></div></li><li><div><h3>" + minutes + "</h3><span>Mins</span></div></li><li><div><h3>" + seconds + "</h3><span>Secs</span></div></li>";

        $('#hot-deal').find('.hot-deal-countdown').html(html);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

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
STORE.SEARCH_PRODUCT = function() {

    var request = AJAX.post("item/search", {
        searchKeyword: $('#search_string').val()
    }, function(res) {
        console.log(res);
        STORE.RENDER_NEW_PRODUCT(res.data);

        slickRender($('body'));
    });


};


STORE.BIND_EVENT = function() {

    $('#search_product').click(function() {
        //alert("Hello");
        STORE.SEARCH_PRODUCT();
    });

    $('[data-toggle="tab"]').click(function(e) {
        console.log(e);
        let category = $(this).attr('data-type');

        STORE.LOAD_NEW_PRODUCT(category);
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
    if (category != null) {
        STORE.LOAD_NEW_PRODUCT(category);
    } else if (searchKeyword != null) {
        $('#search_string').val(searchKeyword);
        STORE.SEARCH_PRODUCT();
    }

});