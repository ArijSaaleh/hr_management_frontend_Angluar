import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../model/employee.model';
import {EmployeeService} from '../employee-service/employee';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm implements OnInit {
  employee: Employee = { firstName: '', lastName: '', email: '', departmentId: 1 };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.employeeService.getById(+id).subscribe(data => (this.employee = data));
    }
  }

  onSubmit() {
    if (this.isEdit && this.employee.id) {
      this.employeeService.update(this.employee.id, this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    } else {
      this.employeeService.create(this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }


}
