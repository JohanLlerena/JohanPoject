import { example } from 'https://github.com/JohanLlerena/JohanPoject/blob/master/data.js';
// import data from './data/lol/lol.js';

function Personajes() {

    fetch("https://github.com/JohanLlerena/JohanPoject/blob/master/rickandmorty.json")
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            tabla(datos);
        });
    
    function tabla(datos) {

        for (let valor of datos.results) {
            let opcion = document.createElement("option");
            let select = document.getElementById("selectPersonajes");
            opcion.value = valor.name;
            opcion.innerText = valor.name;
            select.appendChild(opcion);
        }
    }
}
Personajes()




