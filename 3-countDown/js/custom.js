
$(function(){
    
    var coountdown = setInterval(function(){
        
        var count =  parseInt($('.countdown').html());
        
        if(count != 0)
            
           $('.countdown').html(count-1);
        else
        {
            clearInterval(coountdown);
           $('.countdown').html("Finished");
        }
    },1000)
    
        
      
})