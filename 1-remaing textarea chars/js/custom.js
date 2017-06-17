
$(function(){
    
    var maxvar= $('textarea').attr("maxlength");
    
    $('.message').html("<span>"+maxvar+'</span>characters remainings' );
    $('textarea').keyup(function(){
        
        var textlength=$('textarea').val().length;
        var rem  = maxvar - textlength;
        
        $('.message').html("<span>"+rem+'</span>characters remainings' );
    })
})