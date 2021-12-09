import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormGroupDirective, Validators } from '@angular/forms';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from '../../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  produtoForm!: FormGroup;

  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) {
    this.produtoForm = new FormGroup({
      id: new FormControl(),
      produto: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      valor: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.produtoService.readById(id).subscribe((produto: Produto) => this.produtoForm.patchValue(produto));
    }
  }

  createProduto(form: FormGroupDirective): void {
    const newProduto = this.produtoForm.getRawValue();

    if (newProduto.id) {
      this.produtoService.updateById(newProduto.id, newProduto).subscribe(() => {
        this.router.navigate(['/']);
      })
    } else {
      this.produtoService.create(newProduto).subscribe(() => {
        this.router.navigate(['/']);
      })
    }
  }
}
