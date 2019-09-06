import { Exemplo3Component } from './exemplo3/exemplo3.component';
import { Exemplo2Component } from './exemplo2/exemplo2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exemplo1Component } from './exemplo1/exemplo1.component';


const routes: Routes = [
  {path: 'exemplo1', component: Exemplo1Component},
  {path: 'exemplo2', component: Exemplo2Component},
  {path: 'exemplo3', component: Exemplo3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
