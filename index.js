/*
	index.js - for index.html
*/
window.onload = function() {
	var page = 5;
	var width = 618;
	$("#comic").find("img")
		.on("click", function(event) {
			var posX = $(this).position().left;
			posX = event.pageX - posX;
			if (posX > width/2) {
				page++;
				if (page == 35)
					page = 5
;				pageChange(page);
			}
			else {
				page--;
				if (page == 4)
					page = 5;
				pageChange(page);
			}
	})

	$("body")
		.keyup (function(event) {
			if (event.which == 39) {
				page++;
				if (page == 35)
					page = 5;
				pageChange(page);
			}
			if (event.which == 37) {
				page--;
				if (page == 4)
					page = 5;
				pageChange(page);
			}
	})

	/*
	Takes in a number and changes the first image 
	on index to the image that has that number
	*/
	function pageChange(page) {
		if (page < 10)
			$("img:first").attr({src: "./mech/Mechanical_c10_0" + page + ".png"});
		else	
			$("img:first").attr({src: "./mech/Mechanical_c10_" + page + ".png"});
		$("#pagination").html("Page " + page);
	}
}

