import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// MAT COMPONENTS
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
// COMPONENTS
import { SidenavComponent } from './components/templates/sidenav/sidenav.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { PasswordComponent } from './components/pages/profile/password/password.component';
import { EditprofileComponent } from './components/pages/profile/editprofile/editprofile.component';
import { ProfileComponent } from './components/pages/profile/profile/profile.component';
import { ProjectListComponent } from './components/pages/approval/project-list/project-list.component';
import { ExpenditureComponent } from './components/pages/expenditure/expenditure.component';
import { ProjectInComponent } from './components/pages/project/project-in/project-in.component';
import { ProjectExComponent } from './components/pages/project/project-ex/project-ex.component';
import { EditApprovalComponent } from './components/pages/approval/edit-approval/edit-approval.component';
import { ViewApprovalComponent } from './components/pages/approval/view-approval/view-approval.component';
import { ExecutionComponent } from './components/pages/execution/execution.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    PasswordComponent,
    EditprofileComponent,
    ProfileComponent,
    ProjectListComponent,
    ExpenditureComponent,
    ProjectInComponent,
    ProjectExComponent,
    EditApprovalComponent,
    ViewApprovalComponent,
    ExecutionComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
