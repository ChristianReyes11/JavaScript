function getMyIpHttp() {

  var request = new XMLHttpRequest(); // permite llamar una API, integrada con js
  
  // Open a new connection, using GET request on the URL endpoint
  // Asincronas: funcion que se llama, pero no sabemos cuando va a terminar.. responder
  // Sincrona: paso a paso.. 1 , 2 ,3..  4..


  // solo se ejecuta hasta que exista una respuesta
  request.onload = function (data) {
    console.log(data.target.response);
    console.log(JSON.parse(data.target.response));
  }

  //request.open('GET', 'https://api.ipify.org?format=json', true);
  
  request.open('GET', 'https://randomuser.me/api/?results=10', true);

  request.send();
  

}


function getMyIpFetch() {
  // create request object

  var request = new Request('https://api.ipify.org?format=json',
     {
       method : 'GET',
       headers: new Headers({ 'Content-Type': 'application/json'})
     });
 
  // Now use it

  fetch(request)
  .then(function(data) {   // si hay exito
     console.log('my result : ');
     console.log(data);

     data.json()
     .then(function(myjson) {
       console.log('json results =');
       console.log(myjson);
     });


  })
  .catch(err => {  // en caso de error
     console.log(err);
  });
  

}


function getMyIp() {

  $.getJSON("https://api.ipify.org?format=json",
    function(json) {
       console.log(json);
       $('#resultado').text(JSON.stringify(json));
     }
  );

}


function getMyData(randomNumber) {

  $.getJSON("https://randomuser.me/api/?results="+randomNumber,
    function(json) {
      console.log(json.results);
      $('#resultado').text(JSON.stringify(json.results));
    }
  );
  
}
