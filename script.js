const buscar = document.querySelector('#buscador');
buscar.addEventListener('click', buscarPelicula);

function buscarPelicula(e){
    e.preventDefault();
    const peliculas = document.querySelector('#peliculas')
    console.log(peliculas.value);
    if(peliculas.value === '' || peliculas.value === ' '){
        console.log('No escrito el nombre de la pelicula')
        document.querySelector("#titulo").innerHTML = ("Titulo de la Pelicula")
        document.querySelector("#anio").innerHTML = ("Año de la Pelicula")
        document.querySelector("#descripcion").innerHTML = ("Descripcion")
        return;
    }
    consulta(peliculas.value)
}
function consulta(peliculas){
    const apiID = 'a493c7b8';
    const apiLink = `http://www.omdbapi.com/?apikey=${apiID}&t=${peliculas}`;
    fetch(apiLink)
        .then(respuesta => {return respuesta.json()})
        .then(datos =>{
            if(datos.Response !== "True"){
                console.log("no se encuentra!")
            }else{
                console.log(datos)
                mostrarPelicula(datos)
            }
        }) 
}
function mostrarPelicula (datos){
    const{ Title, Year, Plot} = datos;
    console.log(Plot)
    document.querySelector("#titulo").innerHTML = (`${Title}`)
    document.querySelector("#anio").innerHTML = (`${Year}`)
    document.querySelector("#descripcion").innerHTML = (`${Plot}`)
}