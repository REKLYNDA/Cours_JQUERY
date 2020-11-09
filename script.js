$(function(){
	
	// $("p").hide();
	$('#p1').on({  // Fonctionnement de "on" avec l'objet entre parenthèse 
		
		mouseenter: function(){ // si la souriis entre dans le  parag 1 on cache le parag 4
			$("#p4").hide();
		},
	 
		mouseleave: function(){  // si la souris sort du parag 1 on montre le parag 4
			$("#p4").show();
   	    },
		
		click: function(){  // si on clique sur le  parag 1 on cache le parag 2
			$("#p2").hide();
		}
	});
	
});