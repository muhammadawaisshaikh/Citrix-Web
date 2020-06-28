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
  },
  {
    path: 'get-started',
    loadChildren: () => import('./components/get-started/get-started.module').then(m => m.GetStartedModule)
  },
  {
    path: 'sector',
    loadChildren: () => import('./components/sector/sector.module').then(m => m.SectorModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
