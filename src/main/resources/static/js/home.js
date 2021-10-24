var HOME = HOME || {}
HOME.LAPTOPS_CATEGORY='Laptops';
HOME.SMARTPHONES_CATEGORY='Smartphones';
HOME.CAMERAS_CATEGORY='Cameras';
HOME.ACCESSORIES_CATEGORY='Accessories';
HOME.DATA = {

}

HOME.DEFAULT_CATEGORY=HOME.LAPTOPS_CATEGORY;

HOME.RENDER_NEW_PRODUCT = function(data, type) {

    console.log(data);
    let el = '#tab4';
    let template1 = $("#newProductList").html();
	
	if(type==HOME.LAPTOPS_CATEGORY){
		el = '#tab1';
	}else if(type==HOME.SMARTPHONES_CATEGORY){
		el = '#tab2';
	}else if(type==HOME.CAMERAS_CATEGORY){
		el = '#tab3';
	}
    $(el).find('.products-slick').html(_.template(template1)({
        products: data
    }));
    
    slickRender($(el));


}


HOME.DEAL_COUNDOWN = function() {
    // Set the date we're counting down to
    var countDownDate = new Date("Nov 25, 2021 00:00:00").getTime();

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
HOME._LOAD_NEW_PRODUCT = function() {

    var request = AJAX.get("item/getAll", function(res) {
        console.log(res);
        let items = res.data;
        HOME.RENDER_NEW_PRODUCT(items);
        HOME.RENDER_TOP_PRODUCT(items);
        HOME.RENDER_TOP_SELLING_PRODUCT(items.slice(0, 3));

        slickRender($('body'));
    });

};

HOME.LOAD_NEW_PRODUCT = function(category) {

if(!HOME.DATA[category]){
    var request = AJAX.post("item/findByCategory", { searchKeyword: category },function(res) {
        console.log(res);
        let items = res.data;
        HOME.RENDER_NEW_PRODUCT(items, category);
        HOME.DATA[category] = items;

        
    });
    }

};
HOME.SEARCH_PRODUCT = function() {

    var request = AJAX.post("item/search", {
        searchKeyword: $('#search_string').val()
    }, function(res) {
        console.log(res);
        HOME.RENDER_NEW_PRODUCT(res.data);

        slickRender($('body'));
    });


};




HOME.BIND_EVENT = function() {

    $('#search_product').click(function() {
        //alert("Hello");
        //HOME.SEARCH_PRODUCT();
        
        window.location.href = "store?searchKeyword="+$('#search_string').val()+"&category="+$('.input-select').val();
    });
    
    $('[data-toggle="tab"]').click(function (e) {
  console.log(e);
  let category = $(this).attr('data-type');
  
  HOME.LOAD_NEW_PRODUCT(category);
});



}



HOME.init = function() {
    console.log('init');
    HOME.LOAD_NEW_PRODUCT(HOME.DEFAULT_CATEGORY);
    HOME.DEAL_COUNDOWN();
    HOME.BIND_EVENT();




}

$(document).ready(function() {
    HOME.init();


});