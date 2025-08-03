import { Component , OnInit} from '@angular/core';

import {  Router} from '@angular/router';
import { EmployeeService } from '../employee-service/employee';
import {Employee} from '../model/employee.model';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getAll().subscribe(data => {
      this.employees = data;
    });
  }

  editEmployee(id?: number) {
    if (id) {
      this.router.navigate(['/employees/form', id]);
    }
  }

  deleteEmployee(id?: number) {
    if (id && confirm('Are you sure?')) {
      this.employeeService.delete(id).subscribe(() => this.loadEmployees());
    }
  }

}
