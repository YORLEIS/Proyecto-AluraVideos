// Archivo para mostrar los videos en el HTML

// importacion
import {conexionApi} from './conexionApi.js'

const lista = document.querySelector('[data-lista]')

export default function crearCard(titulo, descripcion, url, imagen) {
    // Entonces cada vez que se ejecute esta funcion se creara un elemento de tipo li
    const video = document.createElement("li")
    // añdiendo la clase
    video.className = "videos__item"
// estructura del video
    video.innerHTML = ` <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descripcion-video">
        <img src="${imagen}" alt="logo canal alura">
        <h3> ${titulo}</h3>
        <p>${descripcion}s</p>
    </div>`

    return video;
}
async function listarVideos(){
    try{
        // listarVideos es la funcion del archivo conexionApi la estamos llamando
        const listApi = await conexionApi.listarVideos()

        listApi.forEach(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)))

    }catch{
        lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :( </h2>`
    }
    
}

listarVideos()