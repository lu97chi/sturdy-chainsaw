$(document).ready(function () {
    if (screen.width > 800) {
        $('.menu a').each(function (index, elemento) {
            $(this).css({
                'top': '-200px'
            });
            $(this).animate({
                top: '0'
            }, 2000 + (index * 500));
        });
    }
    
    if(screen.width>800){
        $('header .texto').css({
            opacity:0,
            marginTop:0
        });
        $('header .texto').animate({
            opacity:1,
            marginTop:'-20px'
        },1500);
    };
    $('#btn_acerca_de').on('click',function(e){
        var acerca_de = $('#acerca_de').offset().top;
        e.preventDefault();
        $('html , body').animate({
            scrollTop:acerca_de+(-100) 
        },1000)
    })
    $('#btn_precios').on('click',function(e){
        var precios = $('#titulo').offset().top;
        e.preventDefault();
        $('html , body').animate({
            scrollTop:precios
        },1000)
    })
    $('#btn_catalogo').on('click',function(e){
        var galeria = $('#galeria').offset().top
        e.preventDefault();
        $('html , body').animate({
            scrollTop:galeria
        },1000)
    })
    $('#btn_ubicacion').on('click',function(e){
        var ubicacion = $('#ubicacion').offset().top
        e.preventDefault();
        $('html , body').animate({
            scrollTop:ubicacion
        },1000)
    })
    $('#btn_contacto').on('click',function(e){
        var contacto = $('#contacto').offset().top;
        e.preventDefault();
        $('html , body').animate({
            scrollTop:contacto
        },1000)
    })
})