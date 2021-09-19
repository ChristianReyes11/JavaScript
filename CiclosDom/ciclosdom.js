var mytext;
var result;
var number=10;

function creap() {
  var textElement = document.getElementById("mytext");
  mytext = textElement.value;
  console.log(mytext);
  result = "";
  for (var i=0; i<number; i++)
  {
    result += '<p>' + '<b>' +  mytext +  '</b>' +  '</p>';
  }
  console.log(result);
  document.getElementById("parrafos").innerHTML = result;  
}

function crealist()  {
  var textElement = document.getElementById("mytext");
  mytext = textElement.value;
  console.log(mytext);
  result = "<ol>";
  for (var i=0; i<number; i++)
  {
    result += '<li>' + mytext  +  '</li>';
  }
  result += "</ol>";

  console.log(result);
  document.getElementById("listas").innerHTML = result;  

}

function creatable(mynumber)  {
  var textElement = document.getElementById("mytext");
  mytext = textElement.value;
  console.log(mytext);
  result = "<table border=0>";
  result += "<tr> <th> id </th> <th> codigo </th> <th> texto </th> </tr>";

  number = mynumber;
  for (var i=0; i<number; i++)
  {
    result += "<tr>" + "<td>" + i +"</td>" + "<td>" +  i +  "</td>" + "<td>" + mytext + "</td>" + "</tr>"
  }
  result += "</table>";
  console.log(result);
  document.getElementById("tabla").innerHTML = result;
}
