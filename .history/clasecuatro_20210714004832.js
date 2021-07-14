function iniciar() {
    var boton = document.getElementById('grabar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
}

function nuevoitem() {
    var clave = document.getElementById('clave').value;
    var valor = document.getElementById('texto').value;
    sessionStorage.setItem(clave, valor);
    mostrar();
    document.getElementById('clave').value = '';
    document.getElementById('texto').value = '';
}

function mostrar() {
    var cajadatos = document.getElementById('cajadatos');
    cajadatos.innerHTML = '<div><button onclick="eliminarTodo()">Eliminar Todo</button></div>';
    for (var f = 0; f < sessionStorage.length; f++) {
        var clave = sessionStorage.key(f);
        var valor = sessionStorage.getItem(clave);
        cajadatos.innerHTML += '<div>' + clave + ' - ' + valor + '<br><button onclick="eliminar(\'' + clave + '\')">Eliminar</button></div>';
    }
}

function eliminar(clave) {
    if (confirm('Está Seguro?')) {
        sessionStorage.removeItem(clave);
        mostrar();
    }
}

function eliminarTodo() {
    if (confirm('Está Seguro?')) {
        sessionStorage.clear();
        mostrar();
    }
}
window.addEventListener('load', iniciar, false)


/**...........jquery......................... */

$(document).ready(function() {




    $("#flip").click(function() {
        $("#panel").slideDown(5000);
    });
    $("#stop").click(function() {
        $("#panel").stop();
    });

    $("#dos").click(function() {
        $("div").animate({ right: '200px' });
    });
    // $('#java').slideToggle('slow');
    $('#java').on('click', function() {
        $('#java').css('background-color', 'black');
    })
    $("#tres").click(function() {
        // $('#java').slideToggle('slow');
        $("#rule").delay("slow").slideToggle('slow');
        $("#java").delay("slow").slideToggle('slow');

    });


    /*  $.ajax('social.html', {

         success: function(respuesta) {
             $('.lateral').append($(respuesta))

         } 

     })*/

    $.get('social.html', function(respuesta) {
        $('.lateral').append($(respuesta))
    })



    $("#usuarios").click(function() {
        $("main").fadeIn('slow')
        $.getJSON('https://randomuser.me/api/?results=500')
            .then(function(respuesta) {

                respuesta.results.forEach(function(persona) {
                    console.log(persona.picture.thumbnail);
                    $('<img>')
                        .attr('src', persona.picture.thumbnail)
                        .appendTo('.contenido');
                });



            });
    });


});
/**....................................................... */
const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea')

const listadoTareas = document.querySelector('.listado-tareas')

const db = window.localStorage

btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1, 1000),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }

    guardarContacto(db, contacto);

}
cargarContactos(db, listadoTareas)