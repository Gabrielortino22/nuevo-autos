let container = document.querySelector('#container');
let params = [];

const processParam = () => {

    let paramString = window.location.search.substring(1) /* 'index=1' */
    let paramArray = paramString.split('&');


    for (let i = 0; i < paramArray.length; i++) {

        let tmpArray = paramArray[i].split('='); /*['index', '1'] */

        params[tmpArray[0]] = tmpArray[1] /* params['index'] = 1 */
    }
}


const getPeliculaDetail = async () => {
    try {
        processParam();
        const response = await fetch(`http://localhost:3051/peliculas/${params["index"]}`);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        } else {
            const pelicula = await response.json();
            console.log(pelicula)
            document.querySelector('#id').innerHTML += pelicula['id'];
            document.querySelector('#titulo').innerHTML += pelicula['titulo'];
            document.querySelector('#actoresPrincipales').innerHTML += pelicula['actoresPrincipales'];
            document.querySelector('#generos').innerHTML += pelicula['generos'];
            document.querySelector('#sinopsis').innerHTML += pelicula['sinopsis'];
            document.querySelector('#imagen').innerHTML += pelicula['imagen'];
            document.querySelector('#duracion').innerHTML += pelicula['duracion'];
            document.querySelector('#fechaLanzamiento').innerHTML += pelicula['fechaLanzamiento'];
        }
    } catch (error) {
        console.error(error);
        container.innerHTML = "<h1>Connection error</h1>";

    }
}
getPeliculaDetail();
