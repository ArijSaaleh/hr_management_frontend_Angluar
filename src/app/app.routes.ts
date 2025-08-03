import { Routes } from '@angular/router';
import {EmployeeList} from './employees/employee-list/employee-list';
import {EmployeeForm} from './employees/employee-form/employee-form';
import {Register} from './auth/register/register';
import {Login} from './auth/login/login';

export const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'register', component: Register},
  { path: 'login', component: Login},
  { path: 'employees', component : EmployeeList },
  { path: 'employees/new', component : EmployeeForm },
  { path: 'employees/edit/:id', component : EmployeeForm },

];
