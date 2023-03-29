import { TreeNode } from "./TreeNode";

export const encontra = (inicial: TreeNode, objetivo: string): TreeNode[] => {
  const lne: TreeNode[] = [];
  const le: TreeNode[] = [];
  const bss: TreeNode[] = [];


  type passo = {
    passo: number;
    lne: string[];
    le: string[];
    bss: string[];
    ec: string;
  };
  const passos: passo[] = [];
  let count = 0;

  //inicio
  let ec: TreeNode = inicial;
  le.push(ec);
  lne.push(ec)

  while (lne.length > 0) {
    passos.push({
      passo: count,
      lne: lne.map((x) => x.id),
      le: le.map((x) => x.id),
      bss: bss.map((x) => x.id),
      ec: ec.id,
    });

    if (ec.id == objetivo) {
      console.log("FIM SUCESSO\n", passos);
      return le;
    }

    let temp: TreeNode[] = ec.filhos.filter(f => !bss.includes(f) && !lne.includes(f) && !le.includes(f))

    if (temp.length == 0) {
      while (le.length != 0 && ec == le[0]) {
        bss.push(ec)
        lne.shift()
        le.shift()
        ec = lne[0]
        // console.log('aqui2', lne.length, le.length)
      }
      if(ec)
        le.unshift(ec)
    } else {
      temp.forEach(x => lne.unshift(x))
      ec = lne[0]
      le.unshift(ec)
    }

    count++
  }
  console.log("FALHA\n", passos)
  return le
}