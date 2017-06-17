
$(function(){
    
  $('div:first').css("display","block");

    $('h1').click(function(){
        $(this).next().slideToggle(500);
        $('div').not($(this).next()).slideUp(500);
    });
    
});