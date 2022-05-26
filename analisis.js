// Helpers

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitasMitad1 = lista[mitad - 1];
        const personitasMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitasMitad1, personitasMitad2]);
        return mediana;
    } else {
        const personitasMitad = lista[mitad];
        return personitasMitad;
    }
}

// Mediana General

const salariosCol = colombia.map(
    function(personitas) {
        return personitas.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del Top 10%

const spliceStar = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStar;

const salariosColTop10 = salariosColSorted.splice(
    spliceStar,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
}
    
);