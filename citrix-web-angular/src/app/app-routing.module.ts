import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'start-application',
    loadChildren: () => import('./components/start-application/start-application.module').then(m => m.StartApplicationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
