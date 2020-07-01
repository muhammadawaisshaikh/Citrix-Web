import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StartApplicationModule } from './components/start-application/start-application.module';
import { HomepageModule } from './components/homepage/homepage.module';
import { GetStartedModule } from './components/get-started/get-started.module';
import { ContactModule } from './components/contact/contact.module';
import { AboutModule} from './components/about/about.module';
import { LatestNewsModule} from './components/latest-news/latest-news.module';
import { SectorModule } from './components/sector/sector.module';
import { TermsConditionsModule } from './components/terms-conditions/terms-conditions.module';
import { ClientsCharterComplaintsModule } from './components/clients-charter-complaints/clients-charter-complaints.module';
import { ImpartialityStatementModule } from './components/impartiality-statement/impartiality-statement.module';
import { CertificationsModule } from './components/certifications/certifications.module';
import { AppealsProcedureModule } from './components/appeals-procedure/appeals-procedure.module';
import { BusinessPolicyStatementModule } from './components/business-policy-statement/business-policy-statement.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomepageModule,
    StartApplicationModule,
    GetStartedModule,
    SectorModule,
    ContactModule,
    AboutModule,
    LatestNewsModule,
    TermsConditionsModule,
    ClientsCharterComplaintsModule,
    ImpartialityStatementModule,
    CertificationsModule,
    AppealsProcedureModule,
    AppealsProcedureModule,
    BusinessPolicyStatementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
