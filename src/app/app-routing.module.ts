import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WaitingComponent } from './waiting/waiting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminBranchlistComponent } from './admin-branch-list/admin-branchlist.component';
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
import { TeacherStudentProfileComponent } from './teacher-student-profile/teacher-student-profile.component';


const routes: Routes = [
  {path:'login' , component:LoginComponent },
  {path:'signup' , component:SignUpComponent} ,
  {path:'waiting' , component:WaitingComponent},
  // admin links 
  {path:'Dashboard' , component:DashboardComponent},  
  {path:'admin-branch-list' , component:AdminBranchlistComponent}, 
  {path:'admin-branch-profile' , component:AdmicBranchProfileComponent}, 
  {path:'admin-teacher-List' , component:AdminTeacherListComponent},  
  {path:'admin-teacher-Profile' , component:AdminTeacherProfileComponent},  
  {path:'admin-student-List' , component:AdminStudentListComponent},  
  {path:'admin-student-Profile' , component:AdminStudentProfileComponent},   
  {path:'admin-role-Managment' , component:AdminRoleManagmentComponent},
  {path:'admin-class-profile' , component:AdminClassProfileComponent},
  {path:'admin-class-student-list' , component:AdminClassStudentListComponent},
  {path:'admin-class-student-profile', component:AdminClassStudentProfileComponent},
    //supervisor Links 
  {path:'supervisor-dashbourd' , component:SupervisorDashbourdComponent},  
  {path:'supervisor-branch-Profile-edit' , component:SupervisorBranchProfilerEditComponent}, 
  {path:'supervisor-profile-edit' , component:SupervisorProfileEditComponent},
  {path:'supervisor-teacher-List' , component:SupervisorTeacherListComponent}, 
  {path:'supervisor-teacher-profile' , component:SupervisorTeacherProfileComponent}, 
  {path:'supervisor-student-list' , component:SupervisorStudentListComponent}, 
  {path:'supervisor-teacher-class-list' , component:SupervisorTeacherClassListComponent}, 
  {path:'supervisor-teacher-class-detail' , component:SupervisorTeacherClassDetailComponent}, 
  {path:'supervisor-teacher-class-student-detail' , component:SupervisorTeacherClassStudentDetailComponent}, 
  // Teachers Links
  {path:'teacher-dashboard' , component:TeacherDashboardComponent}, 
  {path:'teacher-class-list' , component:TeacherClassListComponent}, 
  {path:'teacher-profile' , component:TeacherProfileComponent},
  {path:'teacher-student-list' , component:TeacherStudentListComponent}, 
  {path:'teacher-student-profile' , component:TeacherStudentProfileComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
