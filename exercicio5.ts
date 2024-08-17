//Crie um programa que leia dois valores (x e y) representando um intervalo. Em seguida , leia um novo valor (z) e verifique se z pertence ao intervalo [x e y]

import PromptSync = require ("prompt-sync");
const prompt = PromptSync();

const x:number = Number(prompt("digite 1° numero"));
const y:number = Number(prompt("digite 2° numero"));
const confere:number = Number(prompt("Digite um numero a ser pesquisado"));

if(confere > x && confere < y){
    console.log("está no intervalo")
}else{
    console.log("Não está no intervalo")
}
