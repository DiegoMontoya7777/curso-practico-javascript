
function rangomedio(lista1) {

lista1.sort(function(a, b) {
    return a - b;
});

const tamañoLista1 = lista1.length - 1;
const elemento1 = lista1[0];
const elemento2 = lista1[tamañoLista1];

const rangoMedio = (elemento1 + elemento2) / 2;

return rangoMedio;

}