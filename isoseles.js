
 
function calcularAlturaTriangulo() {

const input = document.getElementById("inputLado1");
const lado1 = Number(input.value);
console.log(lado1);

const input2 = document.getElementById("inputLado2");
const lado2 = Number(input2.value);

const input3 = document.getElementById("inputLado3");
const lado3 = Number(input3.value);

if (lado1===lado2) {
    const a = lado1;
    const b = lado3;
    const h = Math.sqrt ((a*a) - ((b/2)*(b/2)));

    alert(h);
} else if (lado1===lado3) {
    const a = lado1;
    const b = lado3;
    const h = Math.sqrt ((a*a) - ((b/2)*(b/2)));

    alert(h);
} else if (lado2===lado3) {
    const a = lado2;
    const b = lado1;
    const h = Math.sqrt ((a*a) - ((b/2)*(b/2)));

    alert(h);
} else {
    
    alert("Las medidas no son de un triangulo Isoseles");

}

    

}

