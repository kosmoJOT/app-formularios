import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { CrearRegistrosComponent } from './components/crear-registros/crear-registros.component';

const routes: Routes = [
  { path: '', redirectTo: 'crear-registros', pathMatch: 'full' },
  {path:'crear-registros', component: CrearRegistrosComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
