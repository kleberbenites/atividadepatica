import { Injectable } from '@angular/core';

export interface Produtos {
  nome: string;

}


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public produtos: Produtos[] = [{
    nome: 'produto 1'
  },
  {
    nome: 'produto 2'
  }
  ]

  constructor() { }

    public todosProdutos(){
      return this.produtos;
    }



}
