var formulario = document.getElementById('formulario'),
    nombre = formulario.nombre,
    email = formulario.correo,
    text = formulario.mensaje;

var contador=1;


function move(){
    $('.btn_t').click(function(){
        if(contador==1){
            $('nav').animate({
                left:'74.5%' 
            });
            $('header').css('background','#000')
            contador=0;
        }
        else{
            contador=1;
            $('nav').animate({
                left:'-100.5%'
            });
            $('header').css('background','#5e239d')
        }
    })
}
move()
    function validarNombre(e){
        if(nombre.value==''){
        nombre.style.borderBottom = "2px solid #F44336";
        e.preventDefault();
        }else
            {
                nombre.style.border = "none";
                nombre.style.borderBottom ="2px solid #CDE9FF"
            }
    }
    function validarCorreo(e){
        if(email.value==''){
        email.style.borderBottom = "2px solid #F44336";
        e.preventDefault();
        }else{
            email.style.border = "none";
            email.style.borderBottom = "2px solid #CDE9FF"
        }
    }
    function validarText(e){
        if(text.value==''){
        text.style.borderBottom = "2px solid #F44336";
        e.preventDefault();
        }else{
            text.style.border = "none";
            text.style.borderBottom = "2px solid #CDE9FF"
        }
    }

    function validacion(e){
        validarNombre(e);
        validarCorreo(e);
        validarText(e);
    }
formulario.addEventListener('submit',validacion);




