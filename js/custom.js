
$(function(){
    
 $('#my-tabs li').click(function(){
     $(this).removeClass('inactive').siblings().addClass('inactive');
     
     var myID=$(this).attr('id');
     $('#mycontainer div').hide();
     $('#'+myID+"-content").fadeIn('1000');
 });
    
});