
let btnAgregar = document.getElementById("btnAgregar");


let peliculas = [];

const mostrarPeliculas = () => {
  let contenedor = document.getElementById("tblPeliculas");
  let tabla = "";
  for (let r of peliculas) {
    tabla += `<tr>
      <td>${r.id}</td>
       <td>${r.titulo}</td>
      <td>${r.actoresPrincipales}</td>
      <td>${r.generos}</td>
      <td>${r.sinopsis}</td>
      <td><img src="${r.imagen}" /> </td>
      <td>${r.duracion}</td>
      <td>${r.fechaLanzamiento}</td>
      <td> <a href='http://localhost:3000/peliculaDetail.html?index=${r.id}' > Ver detalles </a> </td>
			<td> <button type="button" class="btnEliminar" id="${r.id}">Eliminar</button></td>
    </tr>
    <tr>
    <td>${r.id}</td>
    <td><input type="text" value="${r.titulo}" id="titulo${r.id}"</td> 
    <td><input type="text" value="${r.actoresPrincipales}" id="actoresPrincipales${r.id}"</td>
    <td><input type="text" value="${r.generos}" id="generos${r.id}"</td>
    <td><input type="text"value="${r.sinopsis}" id="sinopsis${r.id}"</td>
    <td><input type="text"value="${r.imagen}" id="imagen${r.id}"</td>
    <td><input type="number" value="${r.duracion}" id="duracion${r.id}"</td>
    <td><input type="number"value="${r.fechaLanzamiento}" id="fechaLanzamiento${r.id}"</td>
    <td> ---</td>

    <td><button class="btnUpdPeliculas" id="${r.id}">Actualizar</button></td>
    </tr>
    
 `;
  }

  contenedor.innerHTML = tabla;

// Funcion para borrar peliculas
  const borrarPelicula = async (e) => {
    let id = e.target.id;

    let respuesta = await fetch(`/peliculas/${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    })

    load();
  }
  
//Evento a los botones borrar
  let botonesBorrar = document.querySelectorAll('.btnEliminar');

  botonesBorrar.forEach(boton => {

    boton.addEventListener('click', (e) => {
      borrarPelicula(e)
    })
  })

  async function btnActualizarClick(e) {

    let id = e.target.id;
    console.log(id);

    let renglon = {
    "titulo": document.querySelector(`#titulo${id}`).value,
    "actoresPrincipales": document.querySelector(`#actoresPrincipales${id}`).value,
    "generos": document.querySelector(`#generos${id}`).value,
    "sinopsis": document.querySelector(`#sinopsis${id}`).value,
    "imagen": Image(document.querySelector(`#imagen${id}`)).value,
    "duracion": Number(document.querySelector(`#duracion${id}`).value),
    "fechaLanzamiento": Number(document.querySelector(`#fechaLanzamiento${id}`).value)
    }

    let respuesta = await fetch(`/peliculas/${id}`, {
             method :'PUT',
             headers: { 'Content-Type' : 'application/json' },
             body : JSON.stringify(renglon)
      });

      load();
    }

  let botonesActualizar = document.querySelectorAll(".btnUpdPelicula");

  botonesActualizar.forEach(boton => {
    boton.addEventListener("click", (e) => {
      btnActualizarClick(e)
    });
  });

};

async function load() {
  const url_base = "http://localhost:3000";
  const endpoint = "/peliculas";

  const respuesta = await fetch(url_base + endpoint);
  peliculas = await respuesta.json();
  console.log(peliculas);

  mostrarPeliculas();
}

const eliminar = (data) => {
  console.log("a eliminar", data);
};

const agregar = async () => {
  let titulo = document.getElementById("titulo").value;
  let actoresPrincipales = document.getElementById("actoresPrincipales").value;
  let generos = document.getElementById("generos").value;
  let sinopsis = document.getElementById("sinopsis").value;
  let imagen = document.getElementById("imagen").value;
  let duracion = document.getElementById("duracion").value;
  let fechaLanzamiento = document.getElementById("fechaLanzamiento").value;

  let pelicula = {
    titulo:titulo,
    actoresPrincipales:actoresPrincipales,
    generos:generos,
    sinopsis:sinopsis,
    imagen:Image (imagen),
    duracion: Number(duracion),
    fechaLanzamiento: Number(fechaLanzamiento),
  };
  const response = await postPeliculaServidor(pelicula);

  if (!Object.keys(response).includes("error")) {
    pelicula.id = response.id;
    peliculas.push(pelicula);
    mostrarPeliculas();
  } else {
    // manejo de error
  }
};

const postPeliculaServidor = async (datos) => {
  const p = await fetch("/peliculas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });

  return await p.json();
};

btnAgregar.addEventListener("click", agregar);

load();