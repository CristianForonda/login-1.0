$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

var matrizUsuario = Array();

const reg = /^[A-Z]\d{3}[a-zñ]{3}[^A-Za-z\dñÑ ]{3}$/;

function othername() {
    var input = document.getElementById("Contraseña").value;
    
    if(reg.test(input)){
        matrizUsuario.push({
            usuario: document.getElementById("Usuario").value,
            correo:document.getElementById("Correo").value,
            telefono:document.getElementById("Telefono").value,
            contraseña:document.getElementById("Contraseña").value

        })
        console.log(matrizUsuario);

    }else{
        alert("La contraseña no cumple con los requisitos ")
    }

}

function iniciarSesion () {
    for (const usuario of matrizUsuario)
        if (usuario.usuario == usu.value && usuario.contraseña == contra.value)
        {
            u = usuario
            alert(JSON.stringify(u))
            break;
        }
        else{
            alert("el usuario no existe ")
        }       
}