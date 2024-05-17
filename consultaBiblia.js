//const url = 'https://ajphchgh0i.execute-api.us-west-2.amazonaws.com/dev/api/books/spa-RVR1960:Rev/verses/1:20';
const urlLibros = 'https://ajphchgh0i.execute-api.us-west-2.amazonaws.com/dev/api/books'


function libros(){

  return fetch(`${urlLibros}`)

  .then(function (response) {
    if (!response.ok) {
      throw new Error('la solicitud fallo' + response.status);
    }
    return response.json();
  })
  .then(function (data) {
    //numero de capitulo y versiculo
    //const mapLibros = data.map(item => item.id +"-----"+ item.chapters.length + "--"+item.chapters[item.chapters.length - 1].osis_end);
    const mapLibros = data.map(item => item.chapters);

    //contar los capitulos de cada libro

    return mapLibros;

  })
  .catch(function (error) {

    console.log('hubo un error en la solicitud', error);
  });
}

function consultarAPi(url) {
   fetch(`${url}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('la solicitud fallo' + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (obj) {
        //console.log(obj.text);
        cargarVersiculo(obj.text); 
      })
    })
    .catch(function (error) {

      console.log('hubo un error en la solicitud', error);
    });
}


function cargarVersiculo(versiculoB){
  console.log(versiculoB)
 let contVersiculo = document.getElementById("versiculoB");
 contVersiculo.innerHTML = versiculoB;

}

// Detectar si el dispositivo es táctil
function esDispositivoTactil() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

// Función para manejar el evento de clic o toque
function manejarClic() {
  libros().then(function(mapLibros){
    //elegir numero de libro random
    let numlibro = Math.floor(Math.random()*(66 - 1 ))
  
  
    //obtener el id del libro y el versiculo
    let libro = mapLibros[numlibro]
    let totalCaps= libro.length
    //elegir un capitulo aleatorio
    let capitulo = Math.floor(Math.random()*((totalCaps-1) - 1 ))
    //elegir un versiculo aleatorio del capitulo 
    let datosLibro = libro[capitulo].osis_end.split(".")
    let idLibro = datosLibro[0]
    let idCapitulo = datosLibro[1]
    let totalVersiculos = datosLibro[2]
  
    //obtener un versiculo aleatorio
    let versiculo = Math.floor(Math.random()*((totalVersiculos) - 1 ) + 1)
  
    console.log(datosLibro)
    console.log("libro: "+ idLibro)
    console.log("captitulo: "+ idCapitulo)
    console.log("versiculo: "+ versiculo)
  
    //llamada a funcion consultarAPi
    //construimos url
    const urlLibros = `https://ajphchgh0i.execute-api.us-west-2.amazonaws.com/dev/api/books/${idLibro}/verses/${idCapitulo}:${versiculo}`
    console.log(urlLibros)
    consultarAPi(urlLibros);
  })
}

// Agregar el evento correspondiente según el tipo de dispositivo
if (esDispositivoTactil()) {
  // Si es un dispositivo táctil, escuchar el evento 'touchstart'
  document.getElementById("btnRecargar").addEventListener("touchstart", manejarClic);
} else {
  // Si no es un dispositivo táctil, escuchar el evento 'click'
  document.getElementById("btnRecargar").addEventListener("click", manejarClic);
}




//llamada Generica
//consultarAPi('https://ajphchgh0i.execute-api.us-west-2.amazonaws.com/dev/api/books/spa-RVR1960:Rev/verses/1:20')
manejarClic() 