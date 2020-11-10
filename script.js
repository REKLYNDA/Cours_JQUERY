$(function(){
	
	$("#start").click(function(){
		
		$("div").animate({left:"600px"}, 5000);
		$("div").animate({opacity:0.2}, 5000);
		$("div").animate({width:"+=100px"}, 5000);
		$("div").animate({height:"+=100px"}, 5000);
	});
	
	
	$("#stop").click(function(){
		$("div").stop(true,true); // arg 1 stop toutes les animations ; arg 2 va jusqu'à la fin de l'animation courante
		
	});
});