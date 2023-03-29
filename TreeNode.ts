export class TreeNode {
  id: string;
  filhos: TreeNode[] = [];

  constructor(id: string) {
    this.id = id;
  }

  adicionaFilho(n: TreeNode) {
    this.filhos.push(n);
  }

  removeFilho(id: string) {
    this.filhos = this.filhos.filter((x) => x.id != id);
  }
}
