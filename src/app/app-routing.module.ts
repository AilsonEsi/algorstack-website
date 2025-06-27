import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomSoftwareDevComponent } from './pages/services/custom-software-dev/custom-software-dev.component';
import { ListJobOportunityComponent } from './pages/jobs/list-job-oportunity/list-job-oportunity.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: '', component: HomeComponent },
  {
    path: 'about_us', component: AboutusComponent
  },
  {
    path: 'services/custom-software-development', component: CustomSoftwareDevComponent
  },
  {
    path: 'jobs/job-oportunity', component: ListJobOportunityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
