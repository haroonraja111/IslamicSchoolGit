import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WaitingComponent } from './waiting/waiting.component';

const routes: Routes = [
  {path:'test' , component:TestComponent},
  {path:'login' , component:LoginComponent },
  {path:'signup' , component:SignUpComponent} ,
  {path:'waiting' , component:WaitingComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
