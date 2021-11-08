$(function()
{
    $("#navbarToggle").blur(function(event){
        var screenwidth = window.innerwidth;
        if(screenwidth<768){
            $("#collapsable-nav").collapse('hide');
        }
    });
});