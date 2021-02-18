var getData = function () {
var nombre= document.getElementById("nombre").value;
var edad= document.getElementById("edad").value;
var coment= document.getElementById("comentarios").value;
var mayus= nombre.toUpperCase();
var mayusTres= mayus.substring(0,3);


var sex= document.getElementsByName("sexo");
var sexre = function() {
    for( var i=0; i<sex.length; i++){

        if (sex[i].checked) return sex[i].value;
    }
}

var cualquierCosa= sexre();

console.log(mayusTres+edad+coment+cualquierCosa);
}


