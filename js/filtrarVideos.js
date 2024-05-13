// Archivo Buqueda de videos dinamica

import { conexionApi } from "./conexionApi.js";


import crearCard from "./mostrarVideos.js";

// Seleccionar el campo de búsqueda
const campoDeBusqueda = document.getElementById("buscar");

async function filtrarVideo(evento){
    // evitar que la pagina se recargue
    evento.preventDefault();
    const  datosDeBusqueda= document.querySelector("[data-busqueda]").value;

    const busqueda = await conexionApi.buscarVideos(datosDeBusqueda)


    // obtenemos elemento ul del index.html
    const lista = document.querySelector("[data-lista]")

    // Este código elimina recursivamente todos los hijos de un elemento HTML representado por lista. Es útil cuando necesitas limpiar un elemento y eliminar todo su contenido antes de agregar nuevo contenido dinámicamente.
    while (lista.firstChild)  {
        lista.removeChild(lista.firstChild);
    }
    
    busqueda.forEach(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)))
    
    if(busqueda.length===0){
        lista.innerHTML= `<h2 class="mensaje__titulo">No fueron encontrados elementos para ${datosDeBusqueda}</h2>`
    }
  

}

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener('click', evento=> filtrarVideo(evento) )


// para enter
campoDeBusqueda.addEventListener("keydown",function(event) {
    if (event.key === 'Enter') {
        filtrarVideo(event);
    }} );