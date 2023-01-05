import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './components/pages/approval/project-list/project-list.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ExecutionListComponent } from './components/pages/execution/execution-list/execution-list.component';
import { ExpenditureComponent } from './components/pages/expenditure/expenditure.component';
import { PaidfullComComponent } from './components/pages/expenditure/paidfull-com/paidfull-com.component';
import { PaidpartialComponent } from './components/pages/expenditure/paidpartial/paidpartial.component';
import { UnpaidComponent } from './components/pages/expenditure/unpaid/unpaid.component';
import { EditprofileComponent } from './components/pages/profile/editprofile/editprofile.component';
import { PasswordComponent } from './components/pages/profile/password/password.component';
import { ProfileComponent } from './components/pages/profile/profile/profile.component';
import { ProjectExComponent } from './components/pages/project/project-ex/project-ex.component';
import { ProjectInComponent } from './components/pages/project/project-in/project-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent},
  { path: 'overview', component: ProfileComponent},
  { path: 'password', component: PasswordComponent},
  { path: 'editprofile', component:EditprofileComponent},
  { path: 'list', component:ProjectListComponent},
  { path: 'bills', component:ExpenditureComponent},
  { path: 'projectin', component: ProjectInComponent},
  { path: 'projectout', component: ProjectExComponent},
  { path: 'execution', component: ExecutionListComponent},

  { path: 'full', component: PaidfullComComponent},
  { path: 'partial', component: PaidpartialComponent},
  { path: 'unpaid', component: UnpaidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
