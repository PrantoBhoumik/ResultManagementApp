import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthorizeDashboardComponent } from './authorize-dashboard/authorize-dashboard.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthGuard } from './shared/auth.guard';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'authorize',pathMatch:'full'},
  {path:'authorize',component:AuthorizeDashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:TeacherDashboardComponent,canActivate:[AuthGuard]},
  {path:'studentResult',component:StudentResultComponent},
  {path:'studentdashboard',component:StudentDashboardComponent},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
