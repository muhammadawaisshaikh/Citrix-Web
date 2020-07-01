import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageModule } from './components/homepage/homepage.module';
import { GetStartedModule } from './components/get-started/get-started.module';
import { ContactModule } from './components/contact/contact.module';
import { AboutModule} from './components/about/about.module';
import { LatestNewsModule} from './components/latest-news/latest-news.module';
import { SectorModule } from './components/sector/sector.module';
import { TermsConditionsModule } from './components/terms-conditions/terms-conditions.module';
import { ClientsCharterComplaintsModule } from './components/clients-charter-complaints/clients-charter-complaints.module';
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
    HomepageModule,
    GetStartedModule,
    SectorModule,
    ContactModule,
    AboutModule,
    LatestNewsModule,
    TermsConditionsModule,
    ClientsCharterComplaintsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
