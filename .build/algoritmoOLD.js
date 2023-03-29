"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var algoritmoOLD_exports = {};
__export(algoritmoOLD_exports, {
  encontra: () => encontra
});
module.exports = __toCommonJS(algoritmoOLD_exports);
const encontra = (n, objetivo) => {
  const visitados = [];
  const descobertos = [];
  const caminhoMorto = [];
  let atual = n;
  const passos = [];
  let count = 0;
  descobertos.push(atual);
  while (descobertos.length > 0) {
    passos.push({
      passo: count,
      visitados: visitados.map((x) => x.id),
      descobertos: descobertos.map((x) => x.id),
      caminhoMorto: caminhoMorto.map((x) => x.id),
      atual: atual.id
    });
    if (atual.id == objetivo) {
      visitados.push(atual);
      console.log("FIM SUCESSO\n", passos);
      return visitados;
    }
    if (descobertos.includes(atual) && !visitados.includes(atual)) {
      if (atual.filhos.length > 0) {
        atual.filhos.forEach((x) => {
          if (!caminhoMorto.includes(x))
            descobertos.unshift(x);
        });
        visitados.push(atual);
      } else {
        descobertos.shift();
        caminhoMorto.push(atual);
      }
      atual = descobertos[0];
    } else if (descobertos.includes(atual) && visitados.includes(atual)) {
      caminhoMorto.push(atual);
      descobertos.shift();
      visitados.pop();
      atual = descobertos[0];
    }
    count++;
  }
  console.log("FALHA", passos);
  return visitados;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  encontra
});
//# sourceMappingURL=algoritmoOLD.js.map
