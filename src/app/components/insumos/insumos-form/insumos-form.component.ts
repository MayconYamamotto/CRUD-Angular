import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Insumos } from 'src/app/model/insumos';
import { MateriaPrima } from 'src/app/model/materiaPrima';
import { Produto } from 'src/app/model/produto';
import { InsumosService } from 'src/app/services/insumos.service';
import { MateriaPrimaService } from 'src/app/services/materia-prima.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-insumos-form',
  templateUrl: './insumos-form.component.html',
  styleUrls: ['./insumos-form.component.css']
})
export class InsumosFormComponent implements OnInit {

  insumosForm!: FormGroup;
  produtos: Produto[] = [];
  materiaPrimas: MateriaPrima[] = [];

  constructor(private insumosService: InsumosService, private produtoService: ProdutoService, private materiaPrimaService: MateriaPrimaService, private router: Router, private route: ActivatedRoute) {
    this.insumosForm = new FormGroup({
      id: new FormControl(),
      produto: new FormControl(null, [Validators.required]),
      materiaPrima: new FormControl(null, [Validators.required]),
      quantidade: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit() {
    this.loadProdutos();
    this.loadMateriaPrima();
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.insumosService.readById(id).subscribe((insumos: Insumos) => this.insumosForm.patchValue(insumos));
    }
  }

  private loadProdutos() {
    this.produtoService.read().subscribe(produtos => this.produtos = produtos);
  }
  private loadMateriaPrima() {
    this.materiaPrimaService.read().subscribe(materiaPrimas => this.materiaPrimas = materiaPrimas);
  }

  createInsumos(form: FormGroupDirective): void {
    const newInsumo = this.insumosForm.getRawValue();

    if (newInsumo.id) {
      this.insumosService.updateById(newInsumo.id, newInsumo).subscribe(() => {
        this.router.navigate(['/insumos']);
      })
    } else {
      this.insumosService.create(newInsumo).subscribe(() => {
        this.router.navigate(['/insumos']);
      })
    }
  }

}
