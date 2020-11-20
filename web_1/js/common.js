$(document).ready(function(){
    
    $(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$("#gotop").fadeIn();
	} else {
		$("#gotop").fadeOut();
	}
});

      $("#gotop").click(function() {
      $("html, body").animate({
		scrollTop:0
	}, "slow");
	return false;
});
    

    
       $('.dp2').hide();
        
        $('#gnb>li').mouseover(function(){
           $(this).children('.dp2').stop().fadeIn();  
        });
        
        $('#gnb>li').mouseout(function(){
           $(this).children('.dp2').stop().fadeOut();  
        });
        
    
    
    
       $('.box, .box1, .box2').hide();  
        
       $('.best_list > li > a').mouseover(function(){
           $(this).children('.box, .box1, .box2').stop().slideDown();  
        });
        
       $('.best_list > li > a').mouseout(function(){
           $(this).children('.box, .box1, .box2').stop().slideUp();  
        });
    
    
 
        
        
        $('.visual').bxSlider({
           auto:true
        });
    
  
        
    






});