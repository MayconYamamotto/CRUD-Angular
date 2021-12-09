import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos: Produto[] = [];
  displayedColumns = ['id', 'produto', 'valor'];
  produtoSelecionado: Produto;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.loadProdutos();
  }

  deleteProduto() {
    if (window.confirm(`Remover o produto: ${this.produtoSelecionado.produto}`)) {
      this.produtoService.delete(this.produtoSelecionado.id).subscribe(() => {
        this.unselectProduto();
        this.loadProdutos();
      })
    }
  }

  private loadProdutos() {
    this.produtoService.read().subscribe(produtos => this.produtos = produtos);
  }

  selectProduto(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  unselectProduto() {
    this.produtoSelecionado = null;
  }
}
