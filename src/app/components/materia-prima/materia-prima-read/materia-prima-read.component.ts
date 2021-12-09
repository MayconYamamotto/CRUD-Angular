import { Component, OnInit } from '@angular/core';
import { MateriaPrima } from 'src/app/model/materiaPrima';
import { MateriaPrimaService } from 'src/app/services/materia-prima.service';

@Component({
  selector: 'app-materia-prima-read',
  templateUrl: './materia-prima-read.component.html',
  styleUrls: ['./materia-prima-read.component.css']
})
export class MateriaPrimaReadComponent implements OnInit {

  materiaPrima: MateriaPrima[] = [];
  displayedColumns = ['id', 'nome', 'estoque'];
  materiaPrimaSelecionado: MateriaPrima;

  constructor(private materiaPrimaService: MateriaPrimaService) { }

  ngOnInit() {
    this.loadMateriaPrima();
  }

  deleteMateriaPrima() {
    if (window.confirm(`Remover a matéria prima: ${this.materiaPrimaSelecionado.nome}`)) {
      this.materiaPrimaService.delete(this.materiaPrimaSelecionado.id).subscribe(() => {
        this.unselectMateriaPrima();
        this.loadMateriaPrima();
      })
    }
  }

  private loadMateriaPrima() {
    this.materiaPrimaService.read().subscribe(materiaPrima => this.materiaPrima = materiaPrima);
  }

  selectMateriaPrima(materiaPrima: MateriaPrima) {
    this.materiaPrimaSelecionado = materiaPrima;
  }

  unselectMateriaPrima() {
    this.materiaPrimaSelecionado = null;
  }

}
