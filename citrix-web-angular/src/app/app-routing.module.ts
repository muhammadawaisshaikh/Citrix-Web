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
  },
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'latest-news',
    loadChildren: () => import('./components/latest-news/latest-news.module').then(m => m.LatestNewsModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./components/terms-conditions/terms-conditions.module').then(m => m.TermsConditionsModule)
  },
  {
    path: 'clients-charter-complaints',
    loadChildren: () => import('./components/clients-charter-complaints/clients-charter-complaints.module').then(m => m.ClientsCharterComplaintsModule)
  },
  {
    path: 'impartiality-statement',
    loadChildren: () => import('./components/impartiality-statement/impartiality-statement.module').then(m => m.ImpartialityStatementModule)
  },
  {
    path: 'certifications',
    loadChildren: () => import('./components/certifications/certifications.module').then(m => m.CertificationsModule)
  },
  {
    path: 'work-with-us',
    loadChildren: () => import('./components/work-with-us/work-with-us.module').then(m => m.WorkWithUsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
