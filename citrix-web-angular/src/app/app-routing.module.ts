import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: './components/homepage/homepage.module#HomepageModule'
  },
  {
    path: 'start-application',
    loadChildren: './components/start-application/start-application.module#StartApplicationModule'
  },
  {
    path: 'get-started',
    loadChildren: './components/get-started/get-started.module#GetStartedModule'
  },
  {
    path: 'sector',
    loadChildren: './components/sector/sector.module#SectorModule'
  },
  {
    path: 'contact',
    loadChildren: './components/contact/contact.module#ContactModule'
  },
  {
    path: 'about',
    loadChildren: './components/about/about.module#AboutModule'
  },
  {
    path: 'latest-news',
    loadChildren: './components/latest-news/latest-news.module#LatestNewsModule'
  },
  {
    path: 'terms-conditions',
    loadChildren: './components/terms-conditions/terms-conditions.module#TermsConditionsModule'
  },
  {
    path: 'clients-charter-complaints',
    loadChildren: './components/clients-charter-complaints/clients-charter-complaints.module#ClientsCharterComplaintsModule'
  },
  {
    path: 'impartiality-statement',
    loadChildren: './components/impartiality-statement/impartiality-statement.module#ImpartialityStatementModule'
  },
  {
    path: 'certifications',
    loadChildren: './components/certifications/certifications.module#CertificationsModule'
  },
  {
    path: 'work-with-us',
<<<<<<< Updated upstream
    loadChildren: () => import('./components/work-with-us/work-with-us.module').then(m => m.WorkWithUsModule)
  },
  {
    path: 'appeals-procedure',
    loadChildren: () => import('./components/appeals-procedure/appeals-procedure.module').then(m => m.AppealsProcedureModule)
  },
  {
    path: 'business-policy-statement',
    loadChildren: () => import('./components/business-policy-statement/business-policy-statement.module').then(m => m.BusinessPolicyStatementModule)
=======
    loadChildren: './components/work-with-us/work-with-us.module#WorkWithUsModule'
>>>>>>> Stashed changes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
