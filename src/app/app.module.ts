import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
registerLocaleData(localePt);

/* Components */
import { ProdutoFormComponent } from './components/produto/produto-form/produto-form.component';
import { ProdutoReadComponent } from './components/produto/produto-read/produto-read.component';

/* Material Design */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

/* Pipes */
import { UnidadeMedidaPipe } from './pipes/unidade-medida.pipe';
import { MateriaPrimaFormComponent } from './components/materia-prima/materia-prima-form/materia-prima-form.component';
import { MateriaPrimaReadComponent } from './components/materia-prima/materia-prima-read/materia-prima-read.component';
import { InsumosReadComponent } from './components/insumos/insumos-read/insumos-read.component';
import { InsumosFormComponent } from './components/insumos/insumos-form/insumos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ProdutoFormComponent,
    ProdutoReadComponent,
    UnidadeMedidaPipe,
    MateriaPrimaFormComponent,
    MateriaPrimaReadComponent,
    InsumosReadComponent,
    InsumosFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    RouterModule.forRoot([
      {
        path: "",
        component: ProdutoReadComponent
      }, {
        path: "produtos/create",
        component: ProdutoFormComponent,
      }, {
        path: "produtos/update/:id",
        component: ProdutoFormComponent,
      },
      {
        path: "materia-prima",
        component: MateriaPrimaReadComponent,
      }, {
        path: "materia-prima/create",
        component: MateriaPrimaFormComponent,
      }, {
        path: "materia-prima/update/:id",
        component: MateriaPrimaFormComponent,
      }, {
        path: "insumos",
        component: InsumosReadComponent,
      }, {
        path: "insumos/create",
        component: InsumosFormComponent,
      }, {
        path: "insumos/update/:id",
        component: InsumosFormComponent,
      }
    ])
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
