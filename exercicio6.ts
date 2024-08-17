//Crie um programa que leia um número do usuário e informe se o numero é par ou impar

import PromptSync = require ("prompt-sync");
const prompt = PromptSync();

const numero:number = Number(prompt("Digite um numero:"));

if(numero%2 == 0){
    console.log("O numero é par")
}else{
    console.log("o numero é impar")
}