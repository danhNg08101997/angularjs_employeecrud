import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployeeList({}).subscribe((data) => {
      if (data) {
        this.employees = data;
      } else {
        alert('Get all Employees failed');
      }
    });
  }

  updateEmployee(id: number) {
    // this.router.navigate([`/update-employee/${id}`]);
    this.router.navigate(['/update-employee/', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        alert('Delete employee successfully');
        this.getEmployees();
      },
      (error) => console.log(error)
    );
  }

  viewEmployee(id: number) {
    this.router.navigate(['/view-employee/', id]);
  }
}
