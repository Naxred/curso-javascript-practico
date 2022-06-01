//Codigo del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + 'cm');

function perimetroCuadrado(lado) {
    return lado * 4;
}

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + 'cm');

function areaCuadrado(lado) {
    return lado * lado;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado mide: " + areaCuadrado + 'cm^2');

console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// const alturaTriangulo = 5.5;

// console.log("Los lados del cuadrado miden: " + ladoTriangulo1 + 'cm, ' + ladoTriangulo2 + 'cm, ' + baseTriangulo + 'cm');

// console.log("La altura del triangulo es de: " + alturaTriangulo + 'cm');

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo mide: " + perimetroTriangulo + 'cm');

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo mide: " + areaTriangulo + 'cm^2');

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//Codigo del circulo
console.group("Circulos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");
// //Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Perimetro
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}



