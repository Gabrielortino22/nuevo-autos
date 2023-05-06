 //let contenedor = document.getElementById('contenedor')

let btnAgregar = document.getElementById("btnAgregar");

// let btnDuracion = document.getElementById('btnDuracion');
let autos = [];

const mostrarAutos = () => {
  let contenedor = document.getElementById("tblAutos");
  let tabla = "";
  for (let r of autos) {
    console.log(r);
    tabla += `<tr>
      <td>${r.id}</td>
      <td>${r.marca}</td>
      <td>${r.modelo}</td>
      <td>${r.anio}</td>
      <td>${r.precio}</td>
      <td> <a href='http://localhost:3000/autoDetail.html?index=${r.id}' > Ver detalles </a> </td>
			<td> <button type="button" class="btnEliminar" id="${r.id}">Eliminar</button></td>
    </tr>
 `;
  }
  contenedor.innerHTML = tabla;

  const borrarAutos = async(e) => {
    let id = e.target.id;

    let respuesta = await fetch(`/autos/${id}`, {
      method: 'DELETE',
      headers: {"Content-Type" : "application/json"}
    })

    load();
  }

  let botonesBorrar = document.querySelectorAll('.btnEliminar'); 

  botonesBorrar.forEach(boton => {

    boton.addEventListener('click', (e) => {
           borrarAutos(e)
    } )
  })

};

async function load() {
  const url_base = "http://localhost:3000";
  const endpoint = "/autos";

  const respuesta = await fetch(url_base + endpoint);
  let autos = await respuesta.json();
  console.log(autos);

  mostrarAutos();
}

const eliminar = (data) => {
  console.log("a eliminar", data);
};

const agregar = async () => {
  let marca = document.getElementById("marca").value;
  let modelo = document.getElementById("modelo").value;
  let anio = document.getElementById("anio").value;
  let precio = document.getElementById("precio").value;

  let auto = {
    marca: marca,
    modelo: modelo,
    anio: Number(anio),
    precio: Number(precio),
  };
  const response = await postAutosServidor(auto);

  if (!Object.keys(response).includes("error")) {
    auto.id= response.id;
    autos.push(auto);
    mostrarAutos();
  } else {
    // manejo de error
  }
};

const postAutosServidor = async (datos) => {
  const p = await fetch("/autos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });

  return await p.json();
};

btnAgregar.addEventListener("click", agregar);

load();