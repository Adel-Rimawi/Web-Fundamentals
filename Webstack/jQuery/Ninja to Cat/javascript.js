$(document).ready(function(){

    $("img").click(function() { 
    $(this).attr("temp", $(this).attr("src"));
    $(this).attr("src",$(this).attr("test" ));
    $(this).attr('test', $(this).attr('temp'));
})






});