//loadimg.js


$( document ).ready(function() {
	console.log("document ready");

	var filePath = "/images/art/";

	$.ajax({ url: filePath, success: function (data) {
		console.log(data);
    	}});
});