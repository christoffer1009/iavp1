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
var algoritmo_exports = {};
__export(algoritmo_exports, {
  encontra: () => encontra
});
module.exports = __toCommonJS(algoritmo_exports);
const encontra = (inicial, objetivo) => {
  const lne = [];
  const le = [];
  const bss = [];
  const passos = [];
  let count = 0;
  let ec = inicial;
  le.push(ec);
  lne.push(ec);
  while (lne.length > 0) {
    passos.push({
      passo: count,
      lne: lne.map((x) => x.id),
      le: le.map((x) => x.id),
      bss: bss.map((x) => x.id),
      ec: ec.id
    });
    if (ec.id == objetivo) {
      console.log("FIM SUCESSO\n", passos);
      return le;
    }
    let temp = ec.filhos.filter((f) => !bss.includes(f) && !lne.includes(f) && !le.includes(f));
    if (temp.length == 0) {
      while (le.length != 0 && ec == le[0]) {
        bss.push(ec);
        lne.shift();
        le.shift();
        ec = lne[0];
      }
      if (ec)
        le.unshift(ec);
    } else {
      temp.forEach((x) => lne.unshift(x));
      ec = lne[0];
      le.unshift(ec);
    }
    count++;
  }
  console.log("FALHA\n", passos);
  return le;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  encontra
});
//# sourceMappingURL=algoritmo.js.map
