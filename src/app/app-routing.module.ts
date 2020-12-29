import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TodoModel} from './Models/todo.model';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ekle',
    loadChildren: () => import('./ekle/ekle.module').then(m => m.EklePageModule)
  },
  {
    path: 'guncelle/:title',
    loadChildren: () => import('./guncelle/guncelle.module').then(m => m.GuncellePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ekle',
    loadChildren: () => import('./ekle/ekle.module').then( m => m.EklePageModule)
  },
  {
    path: 'guncelle',
    loadChildren: () => import('./guncelle/guncelle.module').then( m => m.GuncellePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
