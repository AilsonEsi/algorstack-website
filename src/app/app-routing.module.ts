import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomSoftwareDevComponent } from './pages/services/custom-software-dev/custom-software-dev.component';
import { ListJobOportunityComponent } from './pages/jobs/list-job-oportunity/list-job-oportunity.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: '', component: HomeComponent },
  {
    path: 'services/custom-softwre-development', component: CustomSoftwareDevComponent
  },
  {
    path: 'jobs/job-oportunity', component: ListJobOportunityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
