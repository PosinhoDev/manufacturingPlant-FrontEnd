import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

// Components are imported
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';

const routes: Routes = [
  { path: '', component: ListarProductosComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/id', component: CrearProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
