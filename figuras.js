// Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrados miden: " + ladoCuadrado + "cms");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cms");

function areaCuadrado(lado) {
    return lado * lado;
} 
//console.log("El área del cuadrado mide: " + areaCuadrado + "cms^2");

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cms, "+ ladoTriangulo2 + "cms, "+ baseTriangulo + "cms");
//console.log("La altura del triángulo mide: " + alturaTriangulo + "cms");

function perimetroTriangulo(lado1, lado2, base) {
return lado1 + lado2 + base;
}

//console.log("El perimetro del Triángulo mide: " + perimetroTriangulo + "cms");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
    }

//console.log("El área del Triángulo mide: " + areaTriangulo + "cms^2");


console.groupEnd();

// Código del Círculo
console.group("Círculos");

//const radioCirculo = 4;
//console.log("El radio del circulo mide: " + radioCirculo + "cms");

function diametroCirculo(radio) {
    return radio * 2;
} 

const PI = Math.PI;
console.log("El Valor de PI es: " + PI );


function circunferencia(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 


function areaCirculo(radio) {
    return (radio * radio) * PI;
}


console.groupEnd();

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

     
    const area = areaCuadrado(value);
    alert(area);   
}

// Aqui creamos la interacion con el triangulo

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("inputLado1");
    const valueLado1 = Number(lado1.value);
    
    const lado2 = document.getElementById("inputLado2");
    const valueLado2 = Number(lado2.value);
    
    const base = document.getElementById("inputBase");
    const valueBase = Number(base.value);
    
    const altura = document.getElementById("inputAltura");
    const valueAltura = Number(altura.value);
    
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);   

}

function calcularAreaTriangulo() {
    
    const lado1 = document.getElementById("inputLado1");
    const valueLado1 = Number(lado1.value);
    
    const lado2 = document.getElementById("inputLado2");
    const valueLado2 = Number(lado2.value);
    
    const base = document.getElementById("inputBase");
    const valueBase = Number(base.value);
    
    const altura = document.getElementById("inputAltura");
    const valueAltura = Number(altura.value);
    

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

// Aqui creamos la interacion con el triangulo

function calcularCircunferenciaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

    const perimetro = circunferencia(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = Number(input.value);

     
    const area = areaCirculo(value);
    alert(area);   
}