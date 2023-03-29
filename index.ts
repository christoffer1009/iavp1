import { TreeNode } from "./TreeNode";
import { encontra } from "./algoritmo";
import { encontraOLD } from "./algoritmoOLD";


const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");
const g = new TreeNode("g");
const h = new TreeNode("h");
const i = new TreeNode("i");

a.adicionaFilho(b);
a.adicionaFilho(c);
a.adicionaFilho(d);

b.adicionaFilho(e);
b.adicionaFilho(f);

c.adicionaFilho(f);
c.adicionaFilho(g);

e.adicionaFilho(h);
e.adicionaFilho(i);

//         A
//    B    C    D
//  E    F   G
//H  I
//
//

const res = encontra(a, 'g');
console.log(res)
