"use strict";
var import_TreeNode = require("./TreeNode");
var import_algoritmo = require("./algoritmo");
const a = new import_TreeNode.TreeNode("a");
const b = new import_TreeNode.TreeNode("b");
const c = new import_TreeNode.TreeNode("c");
const d = new import_TreeNode.TreeNode("d");
const e = new import_TreeNode.TreeNode("e");
const f = new import_TreeNode.TreeNode("f");
const g = new import_TreeNode.TreeNode("g");
const h = new import_TreeNode.TreeNode("h");
const i = new import_TreeNode.TreeNode("i");
a.adicionaFilho(b);
a.adicionaFilho(c);
a.adicionaFilho(d);
b.adicionaFilho(e);
b.adicionaFilho(f);
c.adicionaFilho(f);
c.adicionaFilho(g);
e.adicionaFilho(h);
e.adicionaFilho(i);
const res = (0, import_algoritmo.encontra)(a, "g");
console.log(res);
//# sourceMappingURL=index.js.map
