import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WaitingComponent } from './waiting/waiting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminBranchlistComponent } from './admin-branchlist/admin-branchlist.component';
import { AdmicBranchProfileComponent } from './admin-branch-profile/admic-branch-profile.component';
import { AdminTeacherListComponent } from './admin-teacher-list/admin-teacher-list.component';
import { AdminTeacherProfileComponent } from './admin-teacher-profile/admin-teacher-profile.component';
import { AdminStudentListComponent } from './admin-student-list/admin-student-list.component';
import { AdminStudentProfileComponent } from './admin-student-profile/admin-student-profile.component';
import { AdminRoleManagmentComponent } from './admin-role-managment/admin-role-managment.component';
import { SupervisorDashbourdComponent } from './supervisor-dashbourd/supervisor-dashbourd.component';
import { SupervisorBranchProfilerEditComponent } from './supervisor-branch-profiler-edit/supervisor-branch-profiler-edit.component';
import { SupervisorProfileEditComponent } from './supervisor-profile-edit/supervisor-profile-edit.component';
import { SupervisorTeacherListComponent } from './supervisor-teacher-list/supervisor-teacher-list.component';
import { SupervisorTeacherProfileComponent } from './supervisor-teacher-profile/supervisor-teacher-profile.component';
import { SupervisorStudentListComponent } from './supervisor-student-list/supervisor-student-list.component';
import { SupervisorTeacherClassListComponent } from './supervisor-teacher-class-list/supervisor-teacher-class-list.component';
import { AdminClassProfileComponent } from './admin-class-profile/admin-class-profile.component';
import { AdminClassStudentListComponent } from './admin-class-student-list/admin-class-student-list.component';
import { SupervisorTeacherClassDetailComponent } from './supervisor-teacher-class-detail/supervisor-teacher-class-detail.component';
import { AdminClassStudentProfileComponent } from './admin-class-student-profile/admin-class-student-profile.component';
import { SupervisorTeacherClassStudentDetailComponent } from './supervisor-teacher-class-student-detail/supervisor-teacher-class-student-detail.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherClassListComponent } from './teacher-class-list/teacher-class-list.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TeacherStudentListComponent } from './teacher-student-list/teacher-student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    WaitingComponent,
    DashboardComponent,
    AdminBranchlistComponent,
    AdmicBranchProfileComponent,
    AdminTeacherListComponent,
    AdminTeacherProfileComponent,
    AdminStudentListComponent,
    AdminStudentProfileComponent,
    AdminRoleManagmentComponent,
    SupervisorDashbourdComponent,
    SupervisorBranchProfilerEditComponent,
    SupervisorProfileEditComponent,
    SupervisorTeacherListComponent,
    SupervisorTeacherProfileComponent,
    SupervisorStudentListComponent,
    SupervisorTeacherClassListComponent,
    AdminClassProfileComponent,
    AdminClassStudentListComponent,
    SupervisorTeacherClassDetailComponent,
    AdminClassStudentProfileComponent,
    SupervisorTeacherClassStudentDetailComponent,
    TeacherDashboardComponent,
    TeacherClassListComponent,
    TeacherProfileComponent,
    TeacherStudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
