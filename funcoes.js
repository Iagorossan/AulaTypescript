//função sem parâmetro e sem retorno
function imprime() {
    console.log("sem parâmetro e sem retorno!");
}
//chamada da função
imprime();
//função com parâmetro e sem retorno
function soma(num1, num2) {
    console.log("Soma: ".concat(num1 + num2));
}
//chamada da função
soma(1, 2);
//fumção com parâmetro e com retorno
function subtrai(num1, num2) {
    return num1 - num2;
}
//chamada da função
var resultado = subtrai(10, 9);
console.log(resultado);
