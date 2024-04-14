import { Mascota } from './Propietario.js'

var ArrayRegistros = [];

$(document).ready(function () {
    
    $('.btn').on('click',(e)=>{
        e.preventDefault()

        let Dueño      = $('#propietario').val();
        let Direccion  = $('#direccion').val();
        let Telefono   = $('#telefono').val();
        let Apodo      = $('#nombreMascota').val();
        let Tipo       = $('#tipo').val();
        let Enfermedad = $('#enfermedad').val();

        let Registro = new Mascota(Dueño,Direccion,Telefono,Tipo,Apodo,Enfermedad)  

        ArrayRegistros.push(Registro.datosPropietario())     
       
        LlenarTabla (ArrayRegistros)
        
    })

});

function LlenarTabla (arrayDatos){
    
    $('#resultado').html('')

    let fila = '';    
     
    arrayDatos.forEach((registro,index) => {

        fila += `<li> ${registro}</li><hr>`;
       
    })
    
    $('#resultado').append(`<ul> ${fila} </ul>`)
    
    LimpiarCampos()

}

function LimpiarCampos (){

    $('#propietario').val('');
    $('#direccion').val('');
    $('#telefono').val('');
    $('#nombreMascota').val('');
    $('#tipo').val('Perro');
    $('#enfermedad').val('');

}