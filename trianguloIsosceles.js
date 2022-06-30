function alturaTrianguloIsosceles (lado1, lado2, base) {
    if(lado1 === lado2 && lado1 != base){
        catetoOpuestoElevado = lado1 * lado1;
        catetoAdyacenteElevado = (base/2) * (base/2);
        alturaElevada = catetoOpuestoElevado - catetoAdyacenteElevado;
        altura = Math.sqrt(alturaElevada);
        alert(altura);
    }else{
        alert("No es un triangulo Isosceles");
    }
}