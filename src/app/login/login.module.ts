import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

const loginRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: LoginComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
	loginRouting
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
