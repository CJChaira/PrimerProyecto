
var btnConsola = document.getElementById("btnConsola");
var btnAlerta = document.getElementById("btnAlerta");

btnAlerta.onclick = function (e) {
    var name = document.getElementById("name").value
    var lastn = document.getElementById("lastn").value
    var mail = document.getElementById("mail").value
    var msg = document.getElementById("msg").value
    /*
    if (name != null && lastn != null && mail != null && msg != null) {
        alert("Nombre: " + name + "\nApellido: " + lastn + "\nCorreo: " + mail + "\nMensaje: " + msg);
    }
    */
    
    var url =  "/Home/RecibirData"; 
    let datos = {"name":name, "lastn":lastn, "mail":mail, "msg":msg}
    var callback = function (data) {
        alert(data);
    };
    api(url, datos, callback);


    
}

/*
btnConsola.onclick = function (e) {
    var nombre = document.getElementById("name").value
    console.log(nombre);
}

function alerta() {
    var nombre = document.getElementById("name").value
    alert(nombre)
} 

function consola() {

    var nombre = document.getElementById("name").value
    console.log(nombre)
}*/