"use strict";
//Crie um programa que leia um número do usuário e informe se o numero é par ou impar
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var numero = Number(prompt("Digite um numero:"));
if (numero % 2 == 0) {
    console.log("O numero é par");
}
else {
    console.log("o numero é impar");
}
