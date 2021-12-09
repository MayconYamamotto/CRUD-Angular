import { Component, OnInit } from '@angular/core';
import { Insumos } from 'src/app/model/insumos';
import { InsumosService } from 'src/app/services/insumos.service';

@Component({
  selector: 'app-insumos-read',
  templateUrl: './insumos-read.component.html',
  styleUrls: ['./insumos-read.component.css']
})
export class InsumosReadComponent implements OnInit {

  insumos: Insumos[] = [];
  displayedColumns = ['id', 'produto', 'materiaPrima', 'quantidade'];
  insumoSelecionado: Insumos;

  constructor(private insumoService: InsumosService) { }

  ngOnInit() {
    this.loadInsumos();
  }

  deleteInsumo() {
    if (window.confirm(`Remover o insumo: ${this.insumoSelecionado.id}`)) {
      this.insumoService.delete(this.insumoSelecionado.id).subscribe(() => {
        this.unselectInsumo();
        this.loadInsumos();
      })
    }
  }

  private loadInsumos() {
    this.insumoService.read().subscribe(insumos => this.insumos = insumos);
  }

  selectInsumo(insumo: Insumos) {
    this.insumoSelecionado = insumo;
  }

  unselectInsumo() {
    this.insumoSelecionado = null;
  }

}
