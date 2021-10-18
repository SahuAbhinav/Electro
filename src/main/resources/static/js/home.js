var HOME = HOME || {}

HOME.RENDER_SLICK = function() { // Products Slick
    $('.products-slick').each(function() {
        var $this = $(this),
            $nav = $this.attr('data-nav');

        $this.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            infinite: true,
            speed: 300,
            dots: false,
            arrows: true,
            appendArrows: $nav ? $nav : false,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    });

}
HOME.RENDER_NEW_PRODUCT = function(data) {

    let template1 = $("#newProductList").html();

    $("#tab1").find('.products-slick').html(_.template(template1)({
        products: data
    }));

    
}

HOME.RENDER_TOP_PRODUCT = function(data) {

    let template1 = $("#newProductList").html();

    $("#tab2").find('.products-slick').html(_.template(template1)({
        products: data
    }));

   
};

HOME.RENDER_TOP_SELLING_PRODUCT = function(data) {

    let template1 = $("#topSellProductList").html();

    $("#topSellingContainer").find('#selling1').html(_.template(template1)({
        products: data
    }));
    
    $("#topSellingContainer").find('#selling2').html(_.template(template1)({
        products: data
    }));
    
    $("#topSellingContainer").find('#selling3').html(_.template(template1)({
        products: data
    }));

   
};




HOME.DEAL_COUNDOWN = function() {
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
HOME.LOAD_NEW_PRODUCT = function() {

    var request = AJAX.get("item/getAll", function(res) {
        console.log(res);
        HOME.RENDER_NEW_PRODUCT(res.data);
        HOME.RENDER_TOP_PRODUCT(res.data);
        HOME.RENDER_TOP_SELLING_PRODUCT(res.data);

 slickRender();
    });


}


HOME.init = function() {
    console.log('init');
    HOME.LOAD_NEW_PRODUCT();
    HOME.DEAL_COUNDOWN();




}

$(document).ready(function() {
    HOME.init();


});