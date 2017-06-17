
$(function(){
    
    (function animateImg(){
        
        $('.offer img').animate({
            top: '-180px'
        },1000, function(){
            
            $(this).animate({
                top: '-132px'
            },1000,function(){
                animateImg();
            });
        });
    }());
    
});