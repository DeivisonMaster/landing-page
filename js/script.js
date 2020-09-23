$(document).ready(function (){
    $('a.tooltip').mouseover(function(){
        var texto = $(this).attr('data-tooltip');

        $(this).children('.text_tooltip').html(texto);
        $(this).children('.text_tooltip').css('opacity', '1');
    });

    $('a.tooltip').mouseout(function(){
        $(this).children('.text_tooltip').css('opacity', '0');
    });

    var page = $('html, body');
    $('a.tooltip').click(function(){
        page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });


    $('nav').mouseover(function (){
        $('.nav-itens').addClass('nav-show');
    });
    
    $('nav').mouseout(function (){
        $('.nav-itens').removeClass('nav-show');
    });

    $(this).on('scroll', function(){
        var topWindow = $(window).scrollTop();

        if(topWindow > 60){
            $('header').addClass('header_fixed');
        }else{
            $('header').removeClass('header_fixed');
        }
    });
});