import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = 'http://localhost:8080/api/v1/employees';
  private addURL = 'http://localhost:8080/api/v1/employees/add';

  constructor(private httpClient: HttpClient) {}

  getEmployeeList(payload: any) {
    return this.httpClient.post<any>(`${this.baseURL}`, payload);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post<Object>(`${this.addURL}`, employee);
  }
}
