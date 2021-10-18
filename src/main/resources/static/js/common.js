_.templateSettings = {
	interpolate : /\<\@\=(.+?)\@\>/gim,
	evaluate : /\<\@([\s\S]+?)\@\>/gim,
	escape : /\<\@\-(.+?)\@\>/gim
};

var AJAX = {

		get : function(url, callback) {
			
			jQuery.ajax({ 
		        type 		: "GET", 
		        url 		: url, 
		        dataType 	: "json", 
		        success 	: callback
		        	  
		    });
		},
		
		post : function(url, input, callback) {
			
			jQuery.ajax({ 
				type 		: "POST", 
		        contentType	: "application/json;charset=utf-8", 
		        url 		: url, 
		        data		: JSON.stringify(input),
		        dataType 	: "json", 
		        success 	: callback		     
		    });  		
		},
	};

	 $.ajaxSetup({
	 		//contentType: "application/json; charset=utf-8"
	 		headers: {
	 		 	"Content-Type": "application/json ; charset=utf-8"
	 		 }
	 	});
	 	

var calculateFinalPrice = function(price, discountPercentage) {

	return price * ( (100-discountPercentage) / 100 );

};	 	