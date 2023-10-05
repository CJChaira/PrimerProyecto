// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/**
* Realiza una solicitud a la API.
* @param {string} url - La URL a la que se realizará la solicitud.
* @param {object} datos - Los datos a enviar en la solicitud.
* @param {function} callback - La función de devolución de llamada para manejar la respuesta.
*/
function api(url, datos, callback) {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error en la solicitud");
            }
        })
        .then(function (data) {
            // Manejar la respuesta
            callback(data);
        })
        .catch(function (error) {
            console.error("Error al realizar la solicitud:", error);
        });
}