$('.collapsible').click(function(){
	if ( $(this).next('.blog').css('display') != 'hidden'){ // sets inactive properties
		$(this).find(".clickable").css("background-color", "black"); // dropdown color
		$(this).find(".arrow").attr("src","assets/arrow1.png"); // dropdown arrow
		
		$(this).mouseover(function() {
			$(this).find(".clickable").css("background-color","#222");}).mouseout(function() { $(this).find(".clickable").css("background-color","black"); // dropdown hover color
		});
		
	}

	if ( $(this).next('.blog').css('display') != 'block'){ // sets active properties
		$(this).find(".clickable").css("background-color", "#444");
		$(this).find(".arrow").attr("src","assets/arrow2.png");
		
		$(this).mouseover(function() {
			$(this).find(".clickable").css("background-color","#222");}).mouseout(function() { $(this).find(".clickable").css("background-color","#444");
		});
		
	}
	$(this).next('.blog').slideToggle(110);
});