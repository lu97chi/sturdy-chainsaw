$(document).ready(function(){
    
    $(window).scroll(function(){
        
        var windowW = $(window).width();
        if(windowW > 800){
            var scroll= $(window).scrollTop();
        
            $('header .texto' ).css({
                
                'transform': 'translate('+scroll/6+'%, 0px)'
            });
            
            $('header .menu' ).css({
                
                'transform': 'translate(-'+scroll/6+'%, 0px)'
            });
            
            $('.main .acerca_de article').css({
                'transform': 'translate(0px, -' + scroll/4 + '%)'
            });
        }
    });
    
    $(window).resize(function(){
        var windowW = $(window).width();
        if(windowW<800){
            $('.acerca_de article').css({
                'transform': 'translate(0px,0px)' 
            })
        }
    })
});