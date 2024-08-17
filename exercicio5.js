"use strict";
//Crie um programa que leia dois valores (x e y) representando um intervalo. Em seguida , leia um novo valor (z) e verifique se z pertence ao intervalo [x e y]
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var x = Number(prompt("digite 1° numero"));
var y = Number(prompt("digite 2° numero"));
var confere = Number(prompt("Digite um numero a ser pesquisado"));
if (confere > x && confere < y) {
    console.log("está no intervalo");
}
else {
    console.log("Não está no intervalo");
}
