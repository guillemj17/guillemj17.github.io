function cargaAJAX() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            // Typical action to be performed when the document is ready:
            console.log("RESPUESTA RECIBIDA");
            console.log(xhttp.responseText);

            var obj = JSON.parse(xhttp.responseText);

            // console.log(obj.origen);
            // console.log(obj["nombre"]);

            var arrDibujos = obj.dibujos

            for (var i=0; i < arrDibujos.lenght; i++);{

                pintaCosas2(arrDibujos[i]);

            }
            
        }else if(this.readyState == 4 &&  this.status == 404){

            alert ("LA RUTA ESTÁ MAL!!!! ");

        }

    };

    // Debería ser una ruta absoluta. La pongo relativa para que no haya errores
    var ruta = "http://localhost/guille/ejercicio1/dibujos.json"

    //alert(ruta);

    xhttp.open("GET", ruta, true);
    xhttp.send();

}

function pintaCosas2(arrDibujos){

    var capa = document.createElement("div")
    capa.setAttribute("id", "resultado");
    capa.setAttribute("class", "parte");
    capa.setAttribute("class", "derecha");

    var textNode = document.createTextNode(dibujos.nombre);

    capa.appendChild(textNode);

    var seccion = document.getElementById("resultado")

    seccion.appendChild(capa);

}