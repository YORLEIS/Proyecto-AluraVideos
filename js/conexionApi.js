// archivo para realizar la conexion a la DB
async function listarVideos(){
    // peticion de tipo GET
    const conexion = await fetch("http://localhost:3001/videos")

    const conexionConvertida = await conexion.json();
   
   return conexionConvertida
}
// Metodo para agregar videos en el formulario de manera dinamica


async function enviarVideo(titulo, descripcion, url, imagen){
    const conexion = await fetch("http://localhost:3001/videos", {
        method:"POST",
        // indica el tipo de contenido que se está enviando,
        headers: {"Content-Type":"application/json"},
        body : JSON.stringify({
            titulo: titulo,
            descripcion:`${descripcion} mil visualizaciones` ,
            url: url,
            imagen: imagen
        })
    })
   
    const conexionConvertida = conexion.json();


    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video")
    }
    
    return conexionConvertida;
}
// Busqueda de videos
async function buscarVideos(palabraClave){
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
    const conexionConvertida = await conexion.json()

    return conexionConvertida
}

// exportando los datos
export const conexionApi={
    listarVideos, enviarVideo, buscarVideos
}
