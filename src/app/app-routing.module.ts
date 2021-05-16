import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FreecomponentComponent } from './login/freecomponent/freecomponent.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthguardGuard]},
  {path:'contact',component:ContactComponent},
  {path:'**',component:FreecomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
