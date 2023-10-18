import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { HeaderComponent } from './header/header.component';
import { ModuleComponent } from './module/module.component';
import { CustomerdetailsComponent } from './module/customer/customerdetails.component';
import { ProfileComponent } from './module/profile/profile.component';
// import { ProfileComponent } from './module/profile/profile.component';
// import { ProfileComponent } from './module/profile/profile.component';

const routes: Routes = [{path:'',component:HomecomponentComponent},
{ path: 'login', component: HeaderComponent },
{ path: 'module', component: ModuleComponent },
{path:'customer',component:CustomerdetailsComponent},
{path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
