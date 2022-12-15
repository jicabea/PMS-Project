import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './components/pages/approval/project-list/project-list.component';
import { ExpenditureComponent } from './components/pages/expenditure/expenditure.component';
import { AdvancedComponent } from './components/pages/payments/advanced/advanced.component';
import { FinalPaymentComponent } from './components/pages/payments/final-payment/final-payment.component';
import { FeeNotesComponent } from './components/pages/payments/interim/fee-notes/fee-notes.component';
import { InvoiceComponent } from './components/pages/payments/interim/invoice/invoice.component';
import { IpcComponent } from './components/pages/payments/interim/ipc/ipc.component';
import { PenultimateComponent } from './components/pages/payments/penultimate/penultimate.component';
import { EditprofileComponent } from './components/pages/profile/editprofile/editprofile.component';
import { PasswordComponent } from './components/pages/profile/password/password.component';
import { ProfileComponent } from './components/pages/profile/profile/profile.component';
import { ProjectExComponent } from './components/pages/project/project-ex/project-ex.component';
import { ProjectInComponent } from './components/pages/project/project-in/project-in.component';
import { ViewPageComponent } from './components/pages/view-page/view-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'overview', component: ProfileComponent},
  { path: 'password', component: PasswordComponent},
  { path: 'editprofile', component:EditprofileComponent},
  { path: 'list', component:ProjectListComponent},
  { path: 'view', component:ViewPageComponent},
  { path: 'bills', component:ExpenditureComponent},
  { path: 'projectin', component: ProjectInComponent},
  { path: 'projectout', component: ProjectExComponent},
  { path: 'advance', component: AdvancedComponent},
  { path: 'final', component: FinalPaymentComponent},
  { path: 'penult', component: PenultimateComponent},
  { path: 'ipc', component: IpcComponent},
  { path: 'fee', component: FeeNotesComponent},
  { path: 'invoice', component: InvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
