
$(function(){
    
  var btnscroll = $("#up");
    
    $(window).scroll(function(){
        
     console.log($(this).scrollTop());
     $(this).scrollTop() >= 500 ? btnscroll.fadeIn(1000) : btnscroll.hide();
        
    });
    
    btnscroll.click(function(){
        $("html,body").animate({scrollTop : 0},1000);
    });
    
});