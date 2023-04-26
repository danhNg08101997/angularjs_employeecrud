import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.saveEmployee();
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        alert('Save employee successfully');
        this.goToEmployeeList();
      },
      (error) => alert('Save employee failed')
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
