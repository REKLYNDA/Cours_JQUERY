$(function(){
	$("#start").click(function(){
	
	$('#p1').click( function(){ 
		
		$("#p2").hide(2000, function(){
			$("#p3").hide(3000, function(){
				$("#p4").hide(3000);
			});
		});
	});
});