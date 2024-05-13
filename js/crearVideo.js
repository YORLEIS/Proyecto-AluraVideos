// En este archivo pasamos los parametros de POST
 import { conexionApi } from "./conexionApi.js";
// capturando formulario
const formulario = document.querySelector("[data-formulario]")

async function crearVideo(evento){
    //  evitamos que el formulario se envie por defecto
    evento.preventDefault();
    
    const titulo = document.querySelector("[data-titulo]").value
    const url = document.querySelector("[data-url]").value
    const imagen = document.querySelector("[data-imagen]").value;

    // visualizaciones de los videos
    const descripcion = Math.floor(Math.random*10).toString();

    try{
        // mandando parametros a la funcionn del archivo conexionApi
        await conexionApi.enviarVideo(titulo, descripcion, url, imagen)

        // una vez que se envio el archivo redireccionamos a  este pagina para indicar que fue enviado exitosamente
        window.location.href="../pages/envio-concluido.html"
    }catch(error){
       
        alert(error)
    
    }
   

}

formulario.addEventListener('submit', evento => crearVideo(evento))