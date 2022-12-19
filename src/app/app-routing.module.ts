import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './components/pages/approval/project-list/project-list.component';
import { ExecutionComponent } from './components/pages/execution/execution.component';
import { ExpenditureComponent } from './components/pages/expenditure/expenditure.component';
import { EditprofileComponent } from './components/pages/profile/editprofile/editprofile.component';
import { PasswordComponent } from './components/pages/profile/password/password.component';
import { ProfileComponent } from './components/pages/profile/profile/profile.component';
import { ProjectExComponent } from './components/pages/project/project-ex/project-ex.component';
import { ProjectInComponent } from './components/pages/project/project-in/project-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'overview', component: ProfileComponent},
  { path: 'password', component: PasswordComponent},
  { path: 'editprofile', component:EditprofileComponent},
  { path: 'list', component:ProjectListComponent},
  { path: 'bills', component:ExpenditureComponent},
  { path: 'projectin', component: ProjectInComponent},
  { path: 'projectout', component: ProjectExComponent},
  { path: 'execution', component: ExecutionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
