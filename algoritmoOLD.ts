// ********** DESCONSIDERAR **********

import { TreeNode } from "./TreeNode";

export const encontra = (n: TreeNode, objetivo: string): TreeNode[] => {
  const visitados: TreeNode[] = []; //LNE
  const descobertos: TreeNode[] = []; //LE
  const caminhoMorto: TreeNode[] = []; //BSS
  let atual: TreeNode = n; //EC  
  
  type passo = {
    passo: number;
    visitados: string[];
    descobertos: string[];
    caminhoMorto: string[];
    atual: string;
  };
  const passos: passo[] = [];
  let count = 0;

  //inicio
  descobertos.push(atual);

  while (descobertos.length > 0) {
  
    passos.push({
      passo: count,
      visitados: visitados.map((x) => x.id),
      descobertos: descobertos.map((x) => x.id),
      caminhoMorto: caminhoMorto.map((x) => x.id),
      atual: atual.id,
    });

    if (atual.id == objetivo) {
      visitados.push(atual);
      console.log("FIM SUCESSO\n", passos);
      return visitados;
    }

    //descoberto mas não explorado
    if (descobertos.includes(atual) && !visitados.includes(atual)) {
      if (atual.filhos.length > 0 ) {
        //coloca filhos em descobertos
        atual.filhos.forEach((x) => {
          if (!caminhoMorto.includes(x))
            descobertos.unshift(x);
        });

        visitados.push(atual);

      } else {
        //não tem filhos
        descobertos.shift();
        caminhoMorto.push(atual);
      }
      //próximo descoberto
      atual = descobertos[0];

      //descoberto e explorado
    } else if (descobertos.includes(atual) && visitados.includes(atual)) {
      caminhoMorto.push(atual);
      descobertos.shift();
      visitados.pop();
      //próximo
      atual = descobertos[0];
    }

    count++;
  }

  console.log("FALHA", passos)
  return visitados;
};