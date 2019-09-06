import { Exemplo2Component } from './exemplo2/exemplo2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exemplo1Component } from './exemplo1/exemplo1.component';


const routes: Routes = [
  {path: 'exemplo1', component: Exemplo1Component},
  {path: 'exemplo2', component: Exemplo2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
