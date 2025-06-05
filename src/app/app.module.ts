import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomSoftwareDevComponent } from './pages/services/custom-software-dev/custom-software-dev.component';
import { HttpClientModule } from '@angular/common/http';
import { ListJobOportunityComponent } from './pages/jobs/list-job-oportunity/list-job-oportunity.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomSoftwareDevComponent,
    ListJobOportunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
