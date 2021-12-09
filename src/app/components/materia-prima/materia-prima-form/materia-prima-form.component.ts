import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriaPrima } from 'src/app/model/materiaPrima';
import { MateriaPrimaService } from 'src/app/services/materia-prima.service';

@Component({
  selector: 'app-materia-prima-form',
  templateUrl: './materia-prima-form.component.html',
  styleUrls: ['./materia-prima-form.component.css']
})
export class MateriaPrimaFormComponent implements OnInit {

  materiaPrimaForm!: FormGroup;

  constructor(private materiaPrimaService: MateriaPrimaService, private router: Router, private route: ActivatedRoute) {
    this.materiaPrimaForm = new FormGroup({
      id: new FormControl(),
      nome: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      estoque: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.materiaPrimaService.readById(id).subscribe((materiaPrima: MateriaPrima) => this.materiaPrimaForm.patchValue(materiaPrima));
    }
  }

  createMateriaPrima(form: FormGroupDirective): void {
    const newMateriaPrima = this.materiaPrimaForm.getRawValue();

    if (newMateriaPrima.id) {
      this.materiaPrimaService.updateById(newMateriaPrima.id, newMateriaPrima).subscribe(() => {
        this.router.navigate(['/materia-prima']);
      })
    } else {
      this.materiaPrimaService.create(newMateriaPrima).subscribe(() => {
        this.router.navigate(['/materia-prima']);
      })
    }
  }

}
