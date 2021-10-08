import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSignupComponent } from './component/customer/customer-signup/customer-signup.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [

  {path:'customerSignUp',component:CustomerSignupComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
