$(document).ready(function(){
    
    var $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2, // -1 siginifie que le menu est fermé, aucune description affiché
    
    init = function(){

        bindEvents();
        if(validIndex(openedIndex))
            animateItem($mainMenuItems.eq(openedIndex), true, 700);
    },
    
    bindEvents = function(){
            
        // Lrsque l'evt click est déclenché sur les enfants des li de la div main-menu, et qui ont la classe images, exec cette fonction 
        $mainMenuItems.children(".images").click(function(){
            // index du parent de l'elt sur lequel je viens de cliquer
            var newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);  
        });
            
        $(".button").hover(function(){
                
                $(this).addClass("hovered");
            },
                               
            function(){
                $(this).removeClass("hovered");
            }
        );
            
        $(".button").click(function(){    
            var newIndex = $(this).index();
            checkAndAnimateItem(newIndex);   
        });
    },
        
        
    validIndex = function(indexToCheck){
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    },
    
    animateItem = function($item, toOpen, speed){
        /* Définition de nos variables*/
        
         // L'image en couleur contenu dans le li
         var $colorImage = $item.find(".color"),
         // Les dimensions du li selon qu'il est ouvert ou fermé
         itemParam = toOpen ? {width:"420px"}:{width:"140px"},
         // Position de l'img en couleur selon que le li est ouvert ou fermé 
         colorImageParam = toOpen ? {left: "0px"}:{left:"140px"};
          
        
         /* Utilisation de nos variables*/
         // Animation du li et l'img en couleur qui siéent 
         $colorImage.animate(colorImageParam, speed);
         $item.animate(itemParam, speed); 
        
    },
    
    
    checkAndAnimateItem = function(indexToCheckAndAnimate){
            
            if (openedIndex === indexToCheckAndAnimate) {
                
                  animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                  openedIndex = -1;
            } else {
                
                     if (validIndex(indexToCheckAndAnimate)) { // si ok  on open le menu et on ferme l'ancien qui était ouvert
                         animateItem($mainMenuItems.eq(openedIndex),false,250);
                         openedIndex = indexToCheckAndAnimate;
                         animateItem($mainMenuItems.eq(openedIndex), true,250);
                     } 
            }
    };
    
    init();
});