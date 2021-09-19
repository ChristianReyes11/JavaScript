var objAlumno = {
  matricula: "",
  nombre: "",
  carrera: "",
  email: ""
};

var myAlumnoJson;

var otherAlumno= {
  matricula: "",
  nombre: "",
  carrera: "",
  email: ""
};

function convertObjToJson() {
  // DOM 
  var matriculaElement = document.getElementById("matricula");
  var nombreElement = document.getElementById("nombre");
  var carreraElement = document.getElementById("carrera");
  var emailElement = document.getElementById("email");

  objAlumno.matricula = matriculaElement.value;
  objAlumno.nombre = nombreElement.value;
  objAlumno.carrera = carreraElement.value;
  objAlumno.email = emailElement.value;
  
  console.log(objAlumno);
  myAlumnoJson = JSON.stringify(objAlumno);
  console.log(myAlumnoJson);

  var jsonElement = document.getElementById("myjson");
  jsonElement.innerHTML = myAlumnoJson;

}

function convertJsonToObj() {
  var jsonElement = document.getElementById("myjson");
  var otherAlumno = JSON.parse(jsonElement.innerHTML);

  console.log(otherAlumno);
  console.log(otherAlumno.matricula);
  console.log(otherAlumno.nombre);
  console.log(otherAlumno.carrera);
  console.log(otherAlumno.email);

  document.getElementById("newMatricula").innerHTML = otherAlumno.matricula;
  document.getElementById("newNombre").innerHTML = otherAlumno.nombre;
  document.getElementById("newCarrera").innerHTML = otherAlumno.carrera;
  document.getElementById("newEmail").innerHTML = otherAlumno.email;
 
}
