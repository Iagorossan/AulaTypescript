"use strict";
//1) Crie um arquivo chamado ex1.ts
//2) Crie um programa que receba um número do usuário e mostre seus 2 antecessores e sucessores
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var entrada = prompt("Insira um numero");
var numero1 = Number(entrada);
var numero2 = numero1 - 1;
var numero3 = numero1 - 2;
var numero4 = numero1 + 1;
var numero5 = numero1 + 2;
console.log("o numero".concat(numero1, " tem como seus antecessores ").concat(numero2, ",").concat(numero3, " e como sucessores ").concat(numero4, ",").concat(numero5));
